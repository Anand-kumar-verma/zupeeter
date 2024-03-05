import ArticleIcon from "@mui/icons-material/Article";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import axios from "axios";
import { useFormik } from "formik";
import * as React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import io from "socket.io-client";
import pr0 from "../../../../assets/images/0.png";
import pr11 from "../../../../assets/images/11.png";
import pr22 from "../../../../assets/images/22.png";
import pr33 from "../../../../assets/images/33.png";
import pr4 from "../../../../assets/images/4.png";
import { endpoint } from "../../../../services/urls";
import Policy from "../policy/Policy";
// const socket = io("https://app.ferryinfotech.in/");
const socket = io("http://192.168.18.183:9000");
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const OneMinCountDown = () => {
  const client = useQueryClient();
  const [one_min_time, setOne_min_time] = useState(0);
  const show_this_one_min_time = String(one_min_time).padStart(2, "0");

  React.useEffect(()=>{
    if(show_this_one_min_time === "01"){
      oneMinCheckResult()
      oneMinColorWinning()
    } 
  },[show_this_one_min_time])

  const [poicy, setpoicy] = React.useState(false);
  const handleClickOpenpoicy = () => {
    setpoicy(true);
  };
  const handleClosepolicy = () => {
    setpoicy(false);
  };

  const initialValues = {
    openTimerDialogBox: false,
  };

  const fk = useFormik({
    initialValues: initialValues,
    onSubmit: () => {
      console.log(fk.values);
    },
  });

  React.useEffect(() => {
    socket.on("onemin", (onemin) => {
      setOne_min_time(onemin);
      if (onemin === 5) fk.setFieldValue("openTimerDialogBox", true);
      if (onemin === 59) fk.setFieldValue("openTimerDialogBox", false);
    });

    return () => {
      socket.off("onemin");
    };
  }, []);

  const oneMinCheckResult = async () => {
    console.log("checkresult function hit")
    try {
      const response = await axios.get(`${endpoint.check_result}`);
      client.refetchQueries("gamehistory")
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
  };
  const oneMinColorWinning = async () => {
    console.log("checkresult function hit2")
    try {
      const response = await axios.get(`${endpoint.color_winning}?id=1&gid=1`);
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
  };

  return (
    <Box className="countdownbg">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ padding: 1, width: "48%" }} className="win-banner">
          <Box onClick={() => handleClickOpenpoicy()}>
            <ArticleIcon />
            <Typography variant="body1" color="initial">
              How to play
            </Typography>
          </Box>
          <Dialog
            open={poicy}
            TransitionComponent={Transition}
            onClose={handleClosepolicy}
            className="dialogsmall"
          >
            <Box>
              <Stack className="dialog-header-policy">
                <Box>
                  <Typography variant="body1" color="initial">
                    Policy
                  </Typography>
                </Box>
                <IconButton onClick={handleClosepolicy}>
                  <CloseIcon />
                </IconButton>
              </Stack>
            </Box>
            <Policy />
          </Dialog>
          <Typography variant="body1" color="initial">
            Win Go 1Min
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box component="img" src={pr0}></Box>
            <Box component="img" src={pr11}></Box>
            <Box component="img" src={pr22}></Box>
            <Box component="img" src={pr33}></Box>
            <Box component="img" src={pr4}></Box>
          </Stack>
        </Box>
        <Box>
          <Typography variant="h3" color="initial" className="winTextone">
            Time remaining
          </Typography>
          <Stack direction="row">
            <Box className="timerBoxone">0</Box>
            <Box className="timerBox">0</Box>
            <Box>:</Box>
            <Box className="timerBox">
              {show_this_one_min_time?.substring(0, 1)}
            </Box>
            <Box className="timerBoxfour">
              {show_this_one_min_time?.substring(1, 2)}
            </Box>
          </Stack>
          <Typography variant="h3" color="initial" className="winTextone">
            202403011253
          </Typography>
        </Box>
      </Box>
      {fk.values.openTimerDialogBox && (
        <Dialog
          open={fk.values.openTimerDialogBox}
          TransitionComponent={Transition}
          PaperProps={{
            style: {
              backgroundColor: "transparent",
              boxShadow: "none",
            },
          }}
        >
          <div className="flex gap-2 justify-cente !bg-black !bg-opacity-5">
            <div
              style={{
                background: "linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)",
              }}
              className="p-1 !px-4 lg:!text-[200px] !text-[100px] rounded-xl !font-bold"
            >
              {show_this_one_min_time?.substring(0, 1)}
            </div>
            <div
              style={{
                background: "linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)",
              }}
              className="p-1 !px-4 lg:!text-[200px] !text-[100px] rounded-xl !font-bold"
            >
              {show_this_one_min_time?.substring(1, 2)}
            </div>
          </div>
        </Dialog>
      )}
    </Box>
  );
};

export default OneMinCountDown;

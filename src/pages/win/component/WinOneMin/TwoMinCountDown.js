import ArticleIcon from "@mui/icons-material/Article";
import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import axios from "axios";
import { useFormik } from "formik";
import * as React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import { useSocket } from "../../../../Shared/SocketContext";
import pr0 from "../../../../assets/images/0.png";
import pr11 from "../../../../assets/images/11.png";
import pr22 from "../../../../assets/images/22.png";
import pr33 from "../../../../assets/images/33.png";
import pr4 from "../../../../assets/images/4.png";
import { endpoint } from "../../../../services/urls";
import Policy from "../policy/Policy";
import countdownfirst from "../../../../assets/countdownfirst.mp3";
import countdownlast from "../../../../assets/countdownlast.mp3";
import circle from "../../../../assets/images/circle-arrow.png";
import howToPlay from "../../../../assets/images/user-guide.png";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const TwoMinCountDown = () => {
  const socket = useSocket();
  const client = useQueryClient();
  const [three_min_time, setThree_min_time] = useState("0_0");
  const show_this_three_min_time_sec = String(
    three_min_time?.split("_")?.[1]
  ).padStart(2, "0");
  const show_this_three_min_time_min = String(
    three_min_time?.split("_")?.[0]
  ).padStart(2, "0");

  React.useEffect(() => {
    if (show_this_three_min_time_sec === "01") {
      oneMinCheckResult();
      oneMinColorWinning();
    }
  }, [show_this_three_min_time_sec]);

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
    const handleThreeMin = (threemin) => {
      setThree_min_time(threemin);
      if (
        (threemin?.split("_")?.[1] === "5" ||
          threemin?.split("_")?.[1] === "4" ||
          threemin?.split("_")?.[1] === "3" ||
          threemin?.split("_")?.[1] === "2") &&
        threemin?.split("_")?.[0] === "0"
      )
        handlePlaySound();
      if (
        threemin?.split("_")?.[1] === "1" &&
        threemin?.split("_")?.[0] === "0"
      )
        handlePlaySoundLast();
      if (
        threemin?.split("_")?.[1] === "5" &&
        threemin?.split("_")?.[0] === "0"
      ) {
        fk.setFieldValue("openTimerDialogBox", true);
      }
      if (threemin?.split("_")?.[1] === "59") {
        fk.setFieldValue("openTimerDialogBox", false);
      }
    };

    socket.on("threemin", handleThreeMin);

    return () => {
      socket.off("threemin", handleThreeMin);
    };
  }, []);

  const oneMinCheckResult = async () => {
    try {
      await axios.get(`${endpoint.check_result}`);
      client.refetchQueries("gamehistory");
      client.refetchQueries("gamehistory_chart");
      client.refetchQueries("myhistory");
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
  };
  const oneMinColorWinning = async () => {
    console.log("checkresult function hit");
    try {
      await axios.get(`${endpoint.color_winning}?id=2&gid=2`);
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
  };

  const audioRefMusic = React.useRef(null);
  const handlePlaySound = async () => {
    try {
      if (audioRefMusic?.current?.pause) {
        await audioRefMusic?.current?.play();
      } else {
        await audioRefMusic?.current?.pause();
      }
    } catch (error) {
      // Handle any errors during play
      console.error("Error during play:", error);
    }
  };
  const audioRefMusiclast = React.useRef(null);
  const handlePlaySoundLast = async () => {
    try {
      if (audioRefMusiclast?.current?.pause) {
        await audioRefMusiclast?.current?.play();
      } else {
        await audioRefMusiclast?.current?.pause();
      }
    } catch (error) {
      // Handle any errors during play
      console.error("Error during play:", error);
    }
  };

  return (
    <Box className="countdownbg">
      <audio ref={audioRefMusic} hidden>
        <source src={`${countdownfirst}`} type="audio/mp3" />
      </audio>
      <audio ref={audioRefMusiclast} hidden>
        <source src={`${countdownlast}`} type="audio/mp3" />
      </audio>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "50%",
            borderRight: "1px dashed white",
            paddingRight: "2%",
          }}
          className="win-banner"
        >
          <Box onClick={() => handleClickOpenpoicy()}>
            <Box
              component="img"
              src={howToPlay}
              sx={{ width: "25px !important", height: "25px !important" }}
            ></Box>
            <Typography variant="body1" color="initial">
              How to play
            </Typography>
            <Box
              component="img"
              src={circle}
              sx={{ width: "15px !important", height: "15px !important" }}
            ></Box>
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
            <Box className="timerBoxone">
              {show_this_three_min_time_min?.substring(0, 1)}
            </Box>
            <Box className="timerBox">
              {show_this_three_min_time_min?.substring(1, 2)}
            </Box>
            <Box>:</Box>
            <Box className="timerBox">
              {show_this_three_min_time_sec?.substring(0, 1)}
            </Box>
            <Box className="timerBoxfour">
              {show_this_three_min_time_sec?.substring(1, 2)}
            </Box>
          </Stack>
          <Typography variant="h3" color="initial" className="winTexttwo">
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
                fontSize: 200,
                borderRadius: 20,
                background: "rgb(73, 57, 193)",
                fontWeight: 700,
                width: 150,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              {show_this_three_min_time_sec?.substring(0, 1)}
            </div>
            <div
              style={{
                fontSize: 200,
                borderRadius: 20,
                background: "rgb(73, 57, 193)",
                fontWeight: 700,
                width: 150,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              {show_this_three_min_time_sec?.substring(1, 2)}
            </div>
          </div>
        </Dialog>
      )}
    </Box>
  );
};

export default TwoMinCountDown;

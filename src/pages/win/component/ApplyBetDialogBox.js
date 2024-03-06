import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Box,
  Button,
  DialogContentText,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import FormControlLabel from "@mui/material/FormControlLabel";
import Slide from "@mui/material/Slide";
import * as React from "react";
import { useState } from "react";
import Policy from "./policy/Policy";
import axios from "axios";
import { endpoint } from "../../../services/urls";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const ApplyBetDialogBox = ({
  apply_bit_dialog_box,
  setapply_bit_dialog_box,
  type,
  gid,
}) => {
  const client = useQueryClient();
  const login_data = localStorage.getItem("logindata");
  const user_id = JSON.parse(login_data).UserID;
  const [value, setValue] = useState(1);
  const [Rules, setRules] = useState(false);
  const [calculated_value, setcalculated_value] = useState(1);

  const handleClickValue = (value) => {
    if (value === 0) {
      return setValue(1);
    }
    setValue(value);
  };
  const handleClickOpenRules = () => {
    setRules(true);
  };
  const handleCloseRules = () => {
    setRules(false);
  };

  async function betFunctionStart() {
    console.log("FUnction called apply bit")
    const reqBody = {
      userid: user_id,
      amount: calculated_value | 0,
      number:
        (type === "green" && 10) ||
        (type === "red" && 30) ||
        (type === "voilet" && 20) ||
        (type === "big" && 40) ||
        (type === "small" && 50) ||
        type,
      gameid: Number(gid),
    };
    try {
      const response = await axios.post(`${endpoint.applybet}`, reqBody);
      console.log(response);
      if (response?.data?.error === "200") {
        toast.success(response?.data?.msg);
        setapply_bit_dialog_box(false);
      }
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
    client.refetchQueries("walletamount");
  }

  return (
    <Dialog
      open={apply_bit_dialog_box}
      TransitionComponent={Transition}
      keepMountedonClose={() => setapply_bit_dialog_box(false)}
      className="dialogsmall"
    >
      <Box>
        <Stack
          className={`${
            ((type === "green" ||
              type === 1 ||
              type === 3 ||
              type === 7 ||
              type === 9) &&
              "!bg-gradient-to-b from-[#B7F8AF] to-[#50CB53]") ||
            ((type === "red" ||
              type === 2 ||
              type === 6 ||
              type === 4 ||
              type === 8) &&
              "!bg-gradient-to-b from-[#F67682] to-[#B03C47]") ||
            ((type === "voilet" || type === 0 || type === 5) &&
              "!bg-gradient-to-b from-[#F79CF8] to-[#873088]") ||
            (type === "small" &&
              "!bg-gradient-to-b from-[#68A1ED] to-[#21497F]") ||
            (type === "big" && "!bg-gradient-to-b from-[#FBDA74] to-[#BB9112]")
          } 
            dialog-header `}
        >
          <Box>
            <Typography variant="body1" color="initial">
              {(type === "green" && "Join Green") ||
                (type === "voilet" && "Join Voilet") ||
                (type === "red" && "Join Red") ||
                type}
            </Typography>
          </Box>
          <IconButton onClick={() => setapply_bit_dialog_box(false)}>
            <CloseIcon />
          </IconButton>
        </Stack>
      </Box>
      <Box className="dialogsmallbat">
        <Typography variant="body1" color="initial">
          Contract Money
        </Typography>
        <Box
          className={`
            addbtnbox`}
        >
          {[1, 10, 100, 1000]?.map((i) => {
            return (
              <Button
                onClick={() => handleClickValue(i)}
                className={`${
                  ((type === "green" ||
                    type === 1 ||
                    type === 3 ||
                    type === 7 ||
                    type === 9) &&
                    "!bg-gradient-to-b from-[#B7F8AF] to-[#50CB53]") ||
                  ((type === "red" ||
                    type === 2 ||
                    type === 6 ||
                    type === 4 ||
                    type === 8) &&
                    "!bg-gradient-to-b from-[#F67682] to-[#B03C47]") ||
                  ((type === "voilet" || type === 0 || type === 5) &&
                    "!bg-gradient-to-b from-[#F79CF8] to-[#873088]") ||
                  (type === "small" &&
                    "!bg-gradient-to-b from-[#68A1ED] to-[#21497F]") ||
                  (type === "big" &&
                    "!bg-gradient-to-b from-[#FBDA74] to-[#BB9112]")
                } 
            `}
              >
                {i}
              </Button>
            );
          })}
        </Box>
        <Typography variant="body1" color="initial">
          small
        </Typography>
      </Box>
      <Stack direction="row" className="bat-price-input-box">
        <IconButton onClick={() => handleClickValue(value - 1)}>
          <RemoveIcon />
        </IconButton>
        <TextField
          placeholder="Enter value"
          value={value}
          variant="outlined"
          type="number"
          onChange={(e) => handleClickValue(parseInt(e.target.value))}
        />
        <IconButton onClick={() => handleClickValue(value + 1 || 1)}>
          <AddIcon />
        </IconButton>
      </Stack>
      <Box className=" !grid !grid-cols-6 gap-1 !pt-8" sx={{ px: 2 }}>

        {[1, 5, 10, 20, 50, 100]?.map((i) => {
          return (
            <div
              onClick={() => setcalculated_value(value * i)}
              className={`${
                ((type === "green" ||
                  type === 1 ||
                  type === 3 ||
                  type === 7 ||
                  type === 9) &&
                  "!bg-gradient-to-b from-[#B7F8AF] to-[#50CB53]") ||
                ((type === "red" ||
                  type === 2 ||
                  type === 6 ||
                  type === 4 ||
                  type === 8) &&
                  "!bg-gradient-to-b from-[#F67682] to-[#B03C47]") ||
                ((type === "voilet" || type === 0 || type === 5) &&
                  "!bg-gradient-to-b from-[#F79CF8] to-[#873088]") ||
                (type === "small" &&
                  "!bg-gradient-to-b from-[#68A1ED] to-[#21497F]") ||
                (type === "big" &&
                  "!bg-gradient-to-b from-[#FBDA74] to-[#BB9112]")
              }
             !px-3 !py-2 rounded-md  !text-center !text-[#8f5206]
            `}
            >
              {i}x
            </div>
          );
        })}
      </Box>
      <Stack direction="row" className="total-money-box">
        <Typography variant="body1" color="initial">
          Total contract money is ₹{" "}
        </Typography>
        <Typography variant="body1" color="initial">
          {calculated_value || "0"}
        </Typography>
      </Stack>
      <Stack direction="row" className="agree-btn">
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="I Agree"
        />
        <Button onClick={() => handleClickOpenRules()}>Personal Rules</Button>
        <Dialog
          open={Rules}
          onClose={handleCloseRules}
          className="dialog-rules"
        >
          <DialogContentText id="alert-dialog-description">
            <Stack direction="row" className="personal-rules-header">
              <Typography>Presale Rule</Typography>
              <CloseIcon onClick={() => handleCloseRules()} />
            </Stack>
            <Policy />
          </DialogContentText>
        </Dialog>
      </Stack>
      <Stack direction="row" className="agree-btn-two">
        <Button
          className="!text-white"
          variant="text"
          color="primary"
          onClick={() => betFunctionStart()}
        >
          Confirm
        </Button>
        <Button
          className="!text-white"
          variant="text"
          color="primary"
          onClick={() => setapply_bit_dialog_box(false)}
        >
          Cancel
        </Button>
      </Stack>
    </Dialog>
  );
};

export default ApplyBetDialogBox;

import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import {
    Box,
    Button,
    Container,
    FormControl,
    MenuItem,
    OutlinedInput,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import { useFormik } from "formik";
import * as React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { zubgback, zubgback_cricket, zubgbackgrad, zubgmid } from "../../Shared/color";
import Layout from "../../component/Layout/Layout";

function CricketWalletFundDepositForm() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const initialValue = {
    amount: "",
    deposit_type: "",
    service_provider: "",
  };

  const fk = useFormik({
    initialValues: initialValue,
    onSubmit: () => {
      console.log(fk.values);
    },
  });
  return (
    <Layout footer={false}>
      <Container sx={style.container}>
        <Box sx={style.header}>
          <Box component={NavLink} onClick={() => goBack()}>
            <KeyboardArrowLeftOutlinedIcon />
          </Box>
          <Typography variant="body1" color="initial">
            Cricket Wallet Fund Deposit Request
          </Typography>
          <Typography variant="body1" color="initial">
            {" "}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "95%",
            marginLeft: "2.5%",
            background: zubgback,
            borderRadius: "10px",
            padding: "10px",
            mt: "10px",
          }}
        >
          <Box mt={2} component="form">
            <Box mt={2}>
              <FormControl fullWidth>
                <Stack direction="row" className="loginlabel">
                  <Typography variant="h3">Enter Amount</Typography>
                </Stack>
                <OutlinedInput
                  placeholder="Enter Amount"
                  type="number"
                  name="amount"
                  id="amount"
                  value={fk.values.amount}
                  onChange={fk.handleChange}
                  className="loginfieldspass"
                />
              </FormControl>
            </Box>
            <Box mt={2}>
              <FormControl fullWidth>
                <Stack direction="row" className="loginlabel">
                  <Typography variant="h3">Select Deposit Type</Typography>
                </Stack>
                <TextField
                  placeholder="Select Deposit Type"
                  select
                  id="deposit_type"
                  name="deposit_type"
                  value={fk.values.deposit_type}
                  onChange={fk.handleChange}
                  InputProps={{
                    style: {
                      borderColor: "#4939c1",
                      borderWidth: "1px",
                      color: "white", // Set text color to white
                    },
                  }}
                >
                  <MenuItem value="New Id">New Id</MenuItem>
                  <MenuItem value="Recharge">Recharge</MenuItem>
                </TextField>
              </FormControl>
            </Box>
            <Box mt={2}>
              <FormControl fullWidth>
                <Stack direction="row" className="loginlabel">
                  <Typography variant="h3">Select Service Provider Type</Typography>
                </Stack>
                <TextField
                  placeholder="Select Deposit Type"
                  select
                  id="service_provider"
                  name="service_provider"
                  value={fk.values.service_provider}
                  onChange={fk.handleChange}
                  InputProps={{
                    style: {
                      borderColor: "#4939c1",
                      borderWidth: "1px",
                      color: "white", // Set text color to white
                    },
                  }}
                >
                  <MenuItem value="A">A</MenuItem>
                  <MenuItem value="B">B</MenuItem>
                  <MenuItem value="C">C</MenuItem>
                  <MenuItem value="D">D</MenuItem>
                </TextField>
              </FormControl>
              <div className="!flex !justify-between !text-white !pt-5">
                <p>Status:</p>
                <p className="!text-green-500">Success</p>
              </div>
              <div className="!flex !justify-between !text-white">
                <p>Go For Login:</p>
                <p className="!text-blue-500 !cursor-pointer" onClick={()=>navigate('/cricket/registration')}>Click here for login</p>
              </div>
              <Button sx={style.paytmbtntwo}>Submit</Button>
            </Box>{" "}
          </Box>
        </Box>
        <Box
          sx={{
            width: "95%",
            marginLeft: "2.5%",
            background: zubgback,
            borderRadius: "10px",
            padding: "10px",
            mt: "10px",
          }}
        >
            <div className="!flex !justify-between"> 
            <span>Deposit</span>
            <span>Expire</span>

            </div>
        </Box>
       

      </Container>
    </Layout>
  );
}

export default CricketWalletFundDepositForm;

export const style = {
  container: {
    background: zubgback_cricket,
    width: "100%",
    height: "100vh",
    overflow: "auto",
  },
  header: {
    padding: "15px 8px",
    background: zubgback_cricket,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& > p": {
      fontSize: "20px",
      fontWeight: "600",
      textAlign: "center",
      color: "white",
    },
    "& > a > svg": {
      color: "white",
      fontSize: "35px",
    },
  },
  notificationBox: {
    width: "95%",
    marginLeft: "2.5%",
    borderRadius: "10px",
    background: zubgmid,
    padding: "10px",
    mt: "10px",
    "&>div>div>p": {
      color: "white",
      fontSize: "14px",
      marginLeft: "10px",
      fontWeight: "500",
    },
    "&>p": {
      color: "white",
      fontSize: "13px",
      marginLeft: "0px",
      fontWeight: "500",
      mt: "10px",
    },
    "&>div>div>svg": { color: "white", fontSize: "24px" },
    "&>div>svg": { color: "white", fontSize: "24px" },
  },
  notificationStack: { alignItems: "center", justifyContent: "space-between" },
  paytmbtntwo: {
    borderRadius: "5px",
    textTransform: "capitalize",
    mb: 2,
    background: zubgmid,
    color: "white !important",
    width: "100%",
    mt: "20px",
    border: "1px solid white",
    padding: "10px",
    "&:hover": { background: zubgbackgrad, border: "1px solid transparent" },
  },
};

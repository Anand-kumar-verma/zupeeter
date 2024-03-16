import CachedIcon from "@mui/icons-material/Cached";
import CloseIcon from "@mui/icons-material/Close";
import HistoryIcon from "@mui/icons-material/History";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import * as React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CustomCircularProgress from "../../../Shared/CustomCircularProgress";
import { zubgback, zubgbackgrad, zubgmid } from "../../../Shared/color";
import audiovoice from "../../../assets/bankvoice.mp3";
import cip from "../../../assets/cip.png";
import dot from "../../../assets/images/circle-arrow.png";
import quickpay from "../../../assets/images/deposit.png";
import payment from "../../../assets/images/payment (1).png";
import playgame from "../../../assets/images/playgame.jpg";
import balance from "../../../assets/images/send.png";
import user from "../../../assets/images/user-guide.png";
import payNameIcon2 from "../../../assets/payNameIcon2.png";
import Layout from "../../../component/Layout/Layout";
import { cashDepositFn } from "../../../services/apicalling";
import { useFormik } from "formik";

function WalletRecharge() {
  const audioRefMusic = React.useRef(null);
  const login_data = localStorage.getItem("logindata");
const user_id = JSON.parse(login_data).UserID;
 const [loding ,setloding] =React.useState(false)
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  React.useEffect(() => {
    handlePlaySound();
  }, []);

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
  
async function depositFunction(){
  setloding(true)
  cashDepositFn({
    userid: user_id,
    amount: 10,
    transection_id: 123,
    status: "success",
  })
  setloding(false)
}

const initialValues= {
  amount:10,
}

const fk = useFormik({
  initialValues:initialValues,
  onSubmit:()=>{
    console.log(fk.values)
  }
})

  return (
    <Layout>
      <audio ref={audioRefMusic} hidden>
        <source src={`${audiovoice}`} type="audio/mp3" />
      </audio>
      <Container
        className="no-scrollbar"
        sx={{
          background: zubgback,
          width: "100%",
          height: "100vh",
          overflow: "auto",
          mb: 4,
        }}
      >
        <Box sx={style.header}>
          <Box component={NavLink} onClick={goBack}>
            <KeyboardArrowLeftOutlinedIcon />
          </Box>
          <Typography variant="body1" color="initial">
            Deposit
          </Typography>
          <Box component={NavLink} to="/depositHistory">
            <HistoryIcon />
          </Box>
        </Box>
        <Box
          sx={{
            background: zubgmid,
            borderRadius: "10px",
            padding: "30px 20px",
            width: "95%",
            margin: "auto",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={playgame}
            sx={{
              opacity: "0.2",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          ></Box>
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <Box component="img" src={balance} width={50}></Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: "16px ",
                fontWeight: 500,
                color: "white",
                ml: "10px",
              }}
            >
              {" "}
              Balance
            </Typography>
          </Stack>
          <Stack direction="row" sx={{ alignItems: "center", mt: "10px" }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: "30px ",
                fontWeight: "600",
                color: "white",
                mr: "10px",
              }}
            >
              {" "}
              ₹3,069.32
            </Typography>
            <CachedIcon sx={{ color: "white" }} />
          </Stack>
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              mt: "20px",
            }}
          >
            <Box component="img" src={cip} width={50}></Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "14px ", color: "white", ml: "10px" }}
            >
              **** **** **** ****
            </Typography>
          </Stack>
        </Box>
        <Box sx={style.paymentBoxOuter}>
          <Box sx={style.paymentlink} component={NavLink}>
            <Box
              component="img"
              src={payNameIcon2}
              sx={{ width: "100px", height: "80px", borderRadius: "10px" }}
            ></Box>
            <Typography variant="body1" color="initial">
              UPI
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              padding: "10px",
              width: "95%",
              margin: "auto",
              mt: "20px",
              background: zubgmid,
              borderRadius: "10px",
              mb: 2,
            }}
          >
            <Stack direction="row" sx={{ alignItems: "center", mb: "20px" }}>
              <Box component="img" src={quickpay} width={30}></Box>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: "15px ", color: "white", ml: "10px" }}
              >
                {" "}
                Select channel
              </Typography>
            </Stack>
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                mt: "10px",
              }}
            >
              <Box
                sx={{
                  width: "48%",
                  background: zubgbackgrad,
                  padding: "15px 20px",
                  borderRadius: "10px",
                  mb: "10px",
                  "&>p": { fontSize: "14px", color: "white" },
                }}
              >
                <Typography variant="body1" color="initial">
                  IMpay-QR
                </Typography>
                <Typography variant="body1" color="initial">
                  Balance:100 - 50K
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "48%",
                  background: zubgback,
                  padding: "15px 20px",
                  borderRadius: "10px",
                  mb: "10px",
                  "&>p": { fontSize: "14px", color: "white" },
                }}
              >
                <Typography variant="body1" color="initial">
                  TYpay-QR
                </Typography>
                <Typography variant="body1" color="initial">
                  Balance:500 - 50K
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "48%",
                  background: zubgback,
                  padding: "15px 20px",
                  borderRadius: "10px",
                  mb: "10px",
                  "&>p": { fontSize: "14px", color: "white" },
                }}
              >
                <Typography variant="body1" color="initial">
                  HeyPay-APP
                </Typography>
                <Typography variant="body1" color="initial">
                  Balance:100 - 50K
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "48%",
                  background: zubgback,
                  padding: "15px 20px",
                  borderRadius: "10px",
                  mb: "10px",
                  "&>p": { fontSize: "14px", color: "white" },
                }}
              >
                <Typography variant="body1" color="initial">
                  UPIpay-APP
                </Typography>
                <Typography variant="body1" color="initial">
                  Balance:100 - 50K
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "48%",
                  background: zubgback,
                  padding: "15px 20px",
                  borderRadius: "10px",
                  mb: "10px",
                  "&>p": { fontSize: "14px", color: "white" },
                }}
              >
                <Typography variant="body1" color="initial">
                  BYpay-APP
                </Typography>
                <Typography variant="body1" color="initial">
                  Balance:100 - 50K
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "48%",
                  background: zubgback,
                  padding: "15px 20px",
                  borderRadius: "10px",
                  mb: "10px",
                  "&>p": { fontSize: "14px", color: "white" },
                }}
              >
                <Typography variant="body1" color="initial">
                  OKpay-QR
                </Typography>
                <Typography variant="body1" color="initial">
                  Balance:500 - 50K
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "48%",
                  background: zubgback,
                  padding: "15px 20px",
                  borderRadius: "10px",
                  mb: "10px",
                  "&>p": { fontSize: "14px", color: "white" },
                }}
              >
                <Typography variant="body1" color="initial">
                  MGpay-QR
                </Typography>
                <Typography variant="body1" color="initial">
                  Balance:500 - 100K
                </Typography>
              </Box>
            </Stack>
          </Box>

          <Box
            sx={{
              padding: "10px",
              width: "95%",
              margin: "auto",
              mt: "20px",
              background: zubgmid,
              borderRadius: "10px",
              mb: 2,
            }}
          >
            <Stack direction="row" sx={{ alignItems: "center", mb: "20px" }}>
              <Box component="img" src={payment} width={30}></Box>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: "15px ", color: "white", ml: "10px" }}
              >
                Deposit amount
              </Typography>
            </Stack>
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                mt: "10px",
              }}
            >
              <Button sx={style.paytmbtn} onClick={()=>fk.setFieldValue("amount",500)}> ₹ 500</Button>
              <Button sx={style.paytmbtn} onClick={()=>fk.setFieldValue("amount",1000)}> ₹ 1K</Button>
              <Button sx={style.paytmbtn} onClick={()=>fk.setFieldValue("amount",5000)}> ₹ 5K</Button>
              <Button sx={style.paytmbtn} onClick={()=>fk.setFieldValue("amount",10000)}> ₹ 10K</Button>
              <Button sx={style.paytmbtn} onClick={()=>fk.setFieldValue("amount",15000)}> ₹ 15K</Button>
              <Button sx={style.paytmbtn} onClick={()=>fk.setFieldValue("amount",20000)}> ₹ 20K</Button>
            </Stack>
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                mt: "10px",
              }}
            >
              <OutlinedInput
                fullWidth
                placeholder="Enter amount"
                className="wallet-textfield"
                type="number"
                id="amount"
                name="amount"
                value={fk.values.amount}
                onChange={fk.handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton edge="end">
                      <CloseIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
              <Button sx={style.paytmbtntwo}
              onClick={fk.handleSubmit}
              >Deposit</Button>
            </Stack>
          </Box>
          <Box
            sx={{
              padding: "10px",
              width: "95%",
              margin: "auto",
              mt: "20px",
              background: zubgmid,
              borderRadius: "10px",
              mb: 5,
            }}
          >
            <Stack direction="row" sx={{ alignItems: "center", mb: "20px" }}>
              <Box component="img" src={user} width={30}></Box>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: "15px ", color: "white", ml: "10px" }}
              >
                {" "}
                Recharge instructions
              </Typography>
            </Stack>
            <Box
              sx={{
                border: "1px solid white",
                padding: 2,
                borderRadius: "10px",
              }}
            >
              <Stack direction="row" sx={style.rechargeinstext}>
                <Box component="img" src={dot} width={15}></Box>
                <Typography variant="body1" color="initial">
                  If the transfer time is up, please fill out the deposit form
                  again.
                </Typography>
              </Stack>
              <Stack direction="row" sx={style.rechargeinstext}>
                <Box component="img" src={dot} width={15}></Box>
                <Typography variant="body1" color="initial">
                  The transfer amount must match the order you created,
                  otherwise the money cannot be credited successfully.
                </Typography>
              </Stack>
              <Stack direction="row" sx={style.rechargeinstext}>
                <Box component="img" src={dot} width={15}></Box>
                <Typography variant="body1" color="initial">
                  If you transfer the wrong amount, our company will not be
                  responsible for the lost amount!
                </Typography>
              </Stack>
              <Stack direction="row" sx={style.rechargeinstext}>
                <Box component="img" src={dot} width={15}></Box>
                <Typography variant="body1" color="initial">
                  Note: do not cancel the deposit order after the money has been
                  transferred.
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Box>
        <CustomCircularProgress isLoading={loding} />
      </Container>
    </Layout>
  );
}

export default WalletRecharge;

const style = {
  header: {
    padding: "15px 8px",
    background: zubgback,
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
  wthui: {
    textAlign: "center",
    width: "32%",
    minHeight: "15vh",
    background: zubgmid,
    borderRadius: "10px",
    mb: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&>div>p": { color: "white" },
  },
  paymentlink: {
    width: "32%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    background: zubgmid,
    padding: "10px 0px",
    borderRadius: "10px",
    "&>p": {
      color: "white",
      fontSize: "12px",
      fontWeight: "500",
      textAlign: "center",
      mt: "5px",
    },
  },
  paymentBoxOuter: {
    width: "95%",
    margin: "auto",
    my: "20px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  paytmbtn: {
    mb: 2,
    background: zubgback,
    color: "white !important",
    width: "31%",
    border: "1px solid white",
    padding: "10px",
    "&:hover": { background: zubgbackgrad, border: "1px solid transparent" },
  },
  paytmbtntwo: {
    borderRadius: "5px",
    textTransform: "capitalize",
    mb: 2,
    background: zubgbackgrad,
    color: "white !important",
    width: "100%",
    mt: "20px",
    border: "1px solid white",
    padding: "10px",
    "&:hover": { background: zubgbackgrad, border: "1px solid transparent" },
  },
  rechargeinstext: {
    mb: "10px",
    alignItems: "center",
    justifyContent: "start",
    "&>p": { marginLeft: "10px", color: "white !important", fontSize: "14px" },
  },
};

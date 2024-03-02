import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import copy from "clipboard-copy";
import { useFormik } from "formik";
import moment from "moment";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Icon1 from "../../assets/images/icon1.png";
import Layout from "../../component/Layout/Layout";
import { endpoint, rupees } from "../../services/urls";
import { useNavigate } from "react-router-dom";
import Icon2 from "../../assets/images/icon2.png";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
function Wallet() {
  const navigate = useNavigate();
  const login_data = localStorage.getItem("logindata");
  const user_id = JSON.parse(login_data).UserID;
  const [select_type_of_history, setselect_type_of_history] = useState(1);
  const { isLoading, data } = useQuery(["walletamount"], () => walletamount(), {
    refetchOnMount: false,
    refetchOnReconnect: true,
  });

  const walletamount = async () => {
    try {
      const response = await axios.get(
        `${endpoint.userwallet}?userid=${user_id}`
      );
      return response;
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
  };
  const initialValues = {
    referrel_code: "https://zupeeter.com/auth/registration/WlcxMjM0NTY3",
  };
  const fk = useFormik({
    initialValues: initialValues,
    onSubmit: () => {
      console.log("This is handle submit");
    },
  });

  const amount = data?.data?.data?.wallet || 0;
  if (isLoading)
    return (
      <Layout>
        <CircularProgress />
      </Layout>
    );
  return (
    <Layout>
      <Box sx={styles.root}>
        <Container>
          <div className="h-screen">
            <div
              style={{
                background: "linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)",
              }}
              className="grid place-items-center rounded-b-[50px]"
            >
              <span className="py-[8%]">Wallet</span>
            </div>
            <div className="bg-white !bg-opacity-10 rounded-lg p-5 mt-3 flex flex-col w-full items-center">
              <img
                className="w-10 h-10"
                src="https://zupeeter.com/application/libraries/user_assets/gouser.svg"
              />
              <p className="text-xl !text-white font-bold">Member</p>
              <div className="flex justify-between w-full mt-3">
                <Box>
                  <Box className="serv-item cursor-pointer">
                    <Box
                      component="img"
                      src={Icon1}
                      alt="Deposit"
                      sx={styles.depositWithdrawIcon}
                      onClick={() => navigate("/view_fund_request")}
                    />
                  </Box>
                  <Typography
                    variant="body1"
                    color="initial"
                    className="db-header"
                  >
                    Deposit
                  </Typography>
                </Box>
                <div className="">
                  <p className="text-4xl font-bold">{rupees} 212.32</p>
                  <p className="!text-white">Withdrawal Wallet</p>
                </div>
                <Box>
                  <Box className="serv-item">
                    <Box
                      onClick={() => navigate("/view_width_request")}
                      component="img"
                      src={Icon2}
                      alt="Withdraw"
                      sx={styles.depositWithdrawIcon}
                      className="!cursor-pointer"
                    />
                  </Box>
                  <Typography
                    variant="body1"
                    color="initial"
                    className="db-header"
                  >
                    Withdraw
                  </Typography>
                </Box>
              </div>
            </div>
            <div className="w-full grid grid-cols-2 mt-3">
              <div
                onClick={() => setselect_type_of_history(1)}
                style={{
                  background:
                    `${select_type_of_history===1?"linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)":""}`,
                }}
                className="cursor-pointer  place-items-center flex w-full justify-center items-center flex-col rounded-lg py-2"
              >
                <AccountBalanceWalletIcon className="!w-[40px] !h-[40px]" />
                <p className="text-sm">Deposit History</p>
              </div>
              <div
                onClick={() => setselect_type_of_history(2)}
                style={{
                  background:
                    `${select_type_of_history===2?"linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)":""}`,
                }}
                className="cursor-pointer place-items-center flex w-full justify-center items-center flex-col rounded-lg py-2"
              >
                <AccountBalanceWalletIcon className="!w-[40px] !h-[40px]" />
                <p className="text-sm">Withdrawal History</p>
              </div>
            </div>
          </div>
        </Container>
      </Box>
    </Layout>
  );
}

export default Wallet;

const styles = {
  root: { background: "#202020", pb: 6 },
  depositWithdrawIcon: { width: "30px", height: "30px" },
};

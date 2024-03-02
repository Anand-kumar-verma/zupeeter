import {
  Avatar,
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
import { Logout } from "@mui/icons-material";
import GroupsIcon from '@mui/icons-material/Groups';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import CottageIcon from '@mui/icons-material/Cottage';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import Person2Icon from '@mui/icons-material/Person2';
import LockResetIcon from '@mui/icons-material/LockReset';
import AppsIcon from '@mui/icons-material/Apps';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
function Account() {
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

  const page_data = [
    {
      icon: <SpaceDashboardIcon
      className="!w-[40px] !h-[40px] "
      color="#FAE59F"
    />,
      name: "Dashboard",
      link: "/dashboard",
    },
    {
        icon: <GroupsIcon
        className="!w-[40px] !h-[40px] "
        color="#FAE59F"
      />,
        name: "My Team",
        link: "/account-my-team",
      },
      {
        icon: <RequestQuoteIcon
        className="!w-[40px] !h-[40px] "
        color="#FAE59F"
      />,
        name: "Income",
        link: "/account-income",
      },
      {
        icon: <CardGiftcardIcon
        className="!w-[40px] !h-[40px] "
        color="#FAE59F"
      />,
        name: "Betting Bonus",
        link: "/account-betting-zone",
      },
      {
        icon: <CottageIcon
        className="!w-[40px] !h-[40px] "
        color="#FAE59F"
      />,
        name: "Bank Details",
        link: "/account-band-details",
      },
      {
        icon: <Person2Icon
        className="!w-[40px] !h-[40px] "
        color="#FAE59F"
      />,
        name: "Profile",
        link: "/account-profile",
      },
      {
        icon: <LockResetIcon
        className="!w-[40px] !h-[40px] "
        color="#FAE59F"
      />,
        name: "Password",
        link: "/account-password",
      },
      {
        icon: <AppsIcon
        className="!w-[40px] !h-[40px] "
        color="#FAE59F"
      />,
        name: "ICO",
        link: "/account-ico",
      },
      {
        icon: <PrivacyTipIcon
        className="!w-[40px] !h-[40px] "
        color="#FAE59F"
      />,
        name: "Privacy Policy",
        link: "/account-privacy-policy",
      },
      {
        icon: <StarBorderIcon
        className="!w-[40px] !h-[40px] "
        color="#FAE59F"
      />,
        name: "Risk Disclosure Agreement",
        link: "/account-risk-disclosure-agreement",
      },
      {
        icon: <CloudDownloadIcon
        className="!w-[40px] !h-[40px] "
        color="#FAE59F"
      />,
        name: "App Download",
        link: "",
      },
  ];
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
              className="grid place-items-center rounded-b-[50px] relative"
            >
              <div className="py-[3%] w-full px-[10%] flex justify-between">
                <div className="flex flex-col justify-center items-center ">
                  <Avatar />
                  <span className="text-sm text-white">Edit Profile</span>
                </div>
                <div className="flex flex-col justify-center items-center ">
                  <p>Personal Center</p>
                  <span className="text-sm text-white">ID:2348902374</span>
                </div>
                <div className="flex flex-col justify-center items-center ">
                  <Logout />
                  <span className="text-sm text-white">Logout</span>
                </div>
              </div>
              <div className="w-full flex justify-center absolute -bottom-6 ">
                <div className="w-[80%] grid grid-cols-2 bg-[#D4EDDA] px-2 items-center ">
                  <p className="">Available Balance (₹):</p>
                  <Button variant="contained" className="!bg-white">
                    122.123
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-full  grid grid-cols-3 mt-[10%]">
              {page_data?.map((i) => {
                return (
                  <div 
                  onClick={()=>navigate(i?.link)}
                  className="cursor-pointer  place-items-center flex w-full flex-col items-center rounded-lg py-2">
                    <p>{i?.icon}</p>
                    <p className="text-[12px] !text-white">{i?.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Box>
    </Layout>
  );
}

export default Account;

const styles = {
  root: { background: "#202020", pb: 6 },
  depositWithdrawIcon: { width: "30px", height: "30px" },
};

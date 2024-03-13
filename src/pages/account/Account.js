import { Logout } from "@mui/icons-material";
import AppsIcon from "@mui/icons-material/Apps";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import CottageIcon from "@mui/icons-material/Cottage";
import GroupsIcon from "@mui/icons-material/Groups";
import LockResetIcon from "@mui/icons-material/LockReset";
import Person2Icon from "@mui/icons-material/Person2";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import {
  Avatar,
  Box,
  Button,
  Container
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Layout from "../../component/Layout/Layout";
import { endpoint } from "../../services/urls";
import CustomCircularProgress from "../../Shared/CustomCircularProgress";

function Account() {
  const navigate = useNavigate();
  const login_data = localStorage.getItem("logindata");
  const user_id = JSON.parse(login_data).UserID;
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
    referrel_code: "https://gamezone.com/auth/registration/WlcxMjM0NTY3",
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
      icon: (
        <SpaceDashboardIcon
          className="!w-[40px] !h-[40px] !text-[#8f5206]"
          color="#FAE59F"
        />
      ),
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: (
        <GroupsIcon
          className="!w-[40px] !h-[40px] !text-[#8f5206]"
          color="#FAE59F"
        />
      ),
      name: "My Team",
      link: "/account-my-team",
    },
    {
      icon: (
        <RequestQuoteIcon
          className="!w-[40px] !h-[40px] !text-[#8f5206] "
          color="#FAE59F"
        />
      ),
      name: "Income",
      link: "/account-income",
    },
    {
      icon: (
        <CardGiftcardIcon
          className="!w-[40px] !h-[40px] !text-[#8f5206]"
          color="#FAE59F"
        />
      ),
      name: "Betting Bonus",
      link: "/account-betting-zone",
    },
    {
      icon: (
        <CottageIcon
          className="!w-[40px] !h-[40px] !text-[#8f5206]"
          color="#FAE59F"
        />
      ),
      name: "Bank Details",
      link: "/account-band-details",
    },
    {
      icon: (
        <Person2Icon
          className="!w-[40px] !h-[40px] !text-[#8f5206]"
          color="#FAE59F"
        />
      ),
      name: "Profile",
      link: "/account-profile",
    },
    {
      icon: (
        <LockResetIcon
          className="!w-[40px] !h-[40px] !text-[#8f5206]"
          color="#FAE59F"
        />
      ),
      name: "Password",
      link: "/account-password",
    },
    {
      icon: (
        <AppsIcon
          className="!w-[40px] !h-[40px] !text-[#8f5206]"
          color="#FAE59F"
        />
      ),
      name: "ICO",
      link: "/account-ico",
    },
    {
      icon: (
        <PrivacyTipIcon
          className="!w-[40px] !h-[40px] !text-[#8f5206]"
          color="#FAE59F"
        />
      ),
      name: "Privacy Policy",
      link: "/account-privacy-policy",
    },
    {
      icon: (
        <StarBorderIcon
          className="!w-[40px] !h-[40px] !text-[#8f5206] "
          color="#FAE59F"
        />
      ),
      name: "Risk Disclosure Agreement",
      link: "/account-risk-disclosure-agreement",
    },
    {
      icon: (
        <CloudDownloadIcon
          className="!w-[40px] !h-[40px] !text-[#8f5206] "
          color="#FAE59F"
        />
      ),
      name: "App Download",
      link: "",
    },
  ];

  return (
    <Layout>
      <Box sx={styles.root}>
        <Container>
          <div className="h-screen">
            <div
              style={{
                background: "linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)",
              }}
              className="grid bg-white bg-opacity-80 place-items-center rounded-b-[50px] relative"
            >
              <div className="py-[3%] w-full px-[10%] flex justify-between">
                <div className="flex flex-col justify-center items-center ">
                  <Avatar />
                  <span className="text-sm text-black">Edit Profile</span>
                </div>
                <div className="flex flex-col justify-center items-center ">
                  <p>Personal Center</p>
                  <span className="text-sm text-black">ID:2348902374</span>
                </div>
                <div
                  className="flex flex-col justify-center items-center !cursor-pointer"
                  onClick={() => {
                    localStorage.clear();
                    navigate("/");
                  }}
                >
                  <Logout />
                  <span className="text-sm text-black">Logout</span>
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
            <div className="w-full bg-white bg-opacity-30 rounded-lg  grid grid-cols-3 mt-[10%]">
              {page_data?.map((i) => {
                return (
                  <div
                    onClick={() => navigate(i?.link)}
                    className="cursor-pointer  place-items-center flex w-full flex-col items-center rounded-lg py-2"
                  >
                    <p>{i?.icon}</p>
                    <p className="text-[12px] !text-black">{i?.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <CustomCircularProgress isLoading={isLoading}/>
        </Container>
      </Box>
    </Layout>
  );
}

export default Account;

const styles = {
  // root: { background: "#202020", pb: 6 },
  depositWithdrawIcon: { width: "30px", height: "30px" },
};

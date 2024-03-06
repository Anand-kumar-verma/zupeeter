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
  CircularProgress,
  Container,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';
import VoicemailIcon from '@mui/icons-material/Voicemail';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import Layout from "../../../../component/Layout/Layout";
import { endpoint } from "../../../../services/urls";
import LogoutIcon from '@mui/icons-material/Logout';
function IncomeMainSection() {
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
      icon: (
        <LogoutIcon className="!w-[40px] !h-[40px] !text-[#8f5206]" color="#8f5206" />
      ),
      name: "Referral Bonus",
      link: "/account-income-referral-bonus",
    },
    {
      icon: <VoicemailIcon className="!w-[40px] !h-[40px] !text-[#8f5206] " color="#8f5206" />,
      name: "Level Bonus",
      link: "/account-income-level-bonus",
    },
    {
      icon: (
        <CenterFocusWeakIcon className="!w-[40px] !h-[40px] !text-[#8f5206]" color="#8f5206" />
      ),
      name: "Team Betting Bonus",
      link: "/account-income-team-betting-bonus",
    },
    {
      icon: (
        <CardGiftcardIcon className="!w-[40px] !h-[40px] !text-[#8f5206]" color="#8f5206" />
      ),
      name: "Team Salary Bonus",
      link: "/account-income-team-salary-bonus",
    },
    {
      icon: <AccessibilityIcon className="!w-[40px] !h-[40px] !text-[#8f5206]" color="#8f5206" />,
      name: "Registration Bonus",
      link: "/account-income-registratioin-bonus",
    }
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
              className="grid place-items-center rounded-b-[50px]"
            >
              <span className="py-[8%]">Wallet</span>
            </div>
            <div className="w-full  grid grid-cols-3 mt-[10%]">
              {page_data?.map((i) => {
                return (
                  <div
                    onClick={() => navigate(i?.link)}
                    className="cursor-pointer  place-items-center flex w-full flex-col items-center rounded-lg py-2"
                  >
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

export default IncomeMainSection;

const styles = {
  root: { background: "#202020", pb: 6 },
  depositWithdrawIcon: { width: "30px", height: "30px" },
};

import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
} from "@mui/material";
import axios from "axios";
import copy from "clipboard-copy";
import { useFormik } from "formik";
import moment from "moment";
import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Layout from "../../../component/Layout/Layout";
import { endpoint, rupees } from "../../../services/urls";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import CallIcon from '@mui/icons-material/Call';
import { Lock, Mail } from "@mui/icons-material";
function Profile() {
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
          <div className="no-scrollbar h-screen overflow-auto">
            <div
              style={{
                background: "linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)",
              }}
              className="grid place-items-center rounded-b-[50px]"
            >
              <span className="py-[8%]">User Profile</span>
            </div>

            <div className="cursor-pointer flex flex-col items-center bg-white !bg-opacity-10 rounded-lg p-5 mt-3 py-8">
              <div className="flex justify-center w-full relative">
                <img
                  className="h-[20%] w-[20%] bg-black p-2 rounded-full"
                  src="https://zupeeter.com/application/libraries/profile.png"
                />
                <CameraAltIcon className="absolute bottom-0 left-[55%] !text-white" />
              </div>
              <p className="text-lg !text-white mt-2"> Vijay Bahadur Thapa</p>
              <p className="text-sm !text-white ">ZW1234567</p>
              <div className="!border-[1px] border-white grid grid-cols-3 place-items-center w-full py-3 mt-2">
                <div className="w-full flex  flex-col items-center">
                  <p>276</p>
                  <p className="!text-[12px] !text-white">Total Team</p>
                </div>
                <div className="w-full flex  flex-col items-center">
                  <p>0</p>
                  <p className="!text-[12px] !text-white">Total Investment</p>
                </div>
                <div className="w-full flex  flex-col items-center">
                  <p>194</p>
                  <p className="!text-[12px] !text-white">Total Income</p>
                </div>
              </div>
              <p className="py-4 !text-white">Account Info</p>
              <div className="!border-[1px] border-white w-full py-3 mt-2 px-3">
                <div className="flex gap-2">
                    <PersonIcon/>
                    <span className="!text-white">ZW1234567</span>
                </div>
                <p className="bg-[#DCB86A] h-[1px] !my-2 "></p>
                <div className="flex gap-2">
                    <PersonIcon/>
                    <span className="!text-white">Vijay Bahadur Thapa</span>
                </div>
                <p className="bg-[#DCB86A] h-[1px] !my-2 "></p>
                <div className="flex gap-2">
                    <CallIcon/>
                    <span className="!text-white">12345</span>
                </div>
                <p className="bg-[#DCB86A] h-[1px] !my-2 "></p>
                <div className="flex gap-2">
                    <Mail/>
                    <span className="!text-white">magiccoin01@gmail.com</span>
                </div>
                <p className="bg-[#DCB86A] h-[1px] !my-2 "></p>
                <div className="flex gap-2">
                    <Lock/>
                    <span className="!text-white">554411</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Box>
    </Layout>
  );
}

export default Profile;

const styles = {
  root: { background: "#202020", pb: 6 },
};

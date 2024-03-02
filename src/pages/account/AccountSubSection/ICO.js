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
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useNavigate } from "react-router-dom";
function ICO() {
  const navigate = useNavigate();
  const login_data = localStorage.getItem("logindata");
  const user_id = JSON.parse(login_data).UserID;
  const functionTOCopy = (value) => {
    copy(value);
    toast.success("Copied to clipboard!");
  };
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
          <div className="h-screen overflow-auto">
            <div
              style={{
                background: "linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)",
              }}
              className="grid place-items-center rounded-b-[50px]"
            >
              <span className="py-[8%]">Zupeeter Token</span>
            </div>

            <div className="cursor-pointer bg-white flex justify-between !bg-opacity-10 rounded-lg p-5 mt-3 py-8">
              <div className="flex flex-col   -gap-10">
                <div className=" !text-white leading-1 ">
                  Total ICO Token Distribution=<span>2,00,00,000</span>
                </div>
                <div className=" !text-white leading-1 ">
                  {" "}
                  Remaining ICO Token Distribution= <span>19882263</span>
                </div>
                <div className=" !text-white leading-1 ">
                  ICO Price <span>₹ 2</span>
                </div>
              </div>
              <span className="!text-2xl !text-[#FF7D89] font-bold">
                <img
                  className="h-[60px] w-[60px]"
                  src="https://zupeeter.com/application/libraries/token.png"
                />
              </span>
            </div>
            <div className="cursor-pointer bg-white  !bg-opacity-10 rounded-lg p-5 mt-3 py-8">
              <p className="text-center items-center font-bold !text-white !text-xl">
                Deposit
              </p>
              <div className="grid lg:grid-cols-3 grid-cols-2 items-center mt-3">
                <p className="!text-white !text-[12x]">
                  My First Deposit Amount
                </p>
                <div className="col-span-2 flex w-full justify-center items-center">
                  <span
                    style={{
                      background:
                        "linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)",
                    }}
                    className="!p-2 !px-4 rounded-lg"
                  >
                    {rupees}
                  </span>
                  <TextField
                    value={0}
                    size="small"
                    className="!bg-white !bg-opacity-5"
                  />
                </div>
              </div>
              <div className="grid lg:grid-cols-3 grid-cols-2 items-center mt-3">
                <p className="!text-white !text-[12x]">Received ICO Token</p>
                <div className="col-span-2 flex w-full justify-center items-center">
                  <span
                    style={{
                      background:
                        "linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)",
                    }}
                    className="!p-2 !px-3 rounded-lg"
                  >
                    <img
                      className="w-[20px] h-[20px]"
                      src="https://zupeeter.com/application/libraries/token.png"
                    />
                  </span>
                  <TextField
                    value={Number(0).toFixed(4)}
                    size="small"
                    className="!bg-white !bg-opacity-5"
                  />
                </div>
              </div>
            </div>
            <div className="cursor-pointer bg-white  !bg-opacity-10 rounded-lg p-5 mt-3 py-8">
              <p className="text-center !font-bold text-xl !text-white">
                Launching
              </p>
              <div className="cursor-pointer flex justify-between mt-2">
                <div className="flex flex-col   -gap-10">
                  <div className=" !text-white leading-1 ">
                    ICO Launching Date= <span>26 Aug 2024</span>
                  </div>
                  <div className=" !text-white leading-1 ">
                    {" "}
                    Remaining Time=<span>176d 12h 36m 36s</span>
                  </div>
                </div>
                <span className="!text-2xl !text-[#FF7D89] font-bold">
                  <img
                    className="h-[60px] w-[60px]"
                    src="https://zupeeter.com/application/libraries/token.png"
                  />
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Box>
    </Layout>
  );
}

export default ICO;

const styles = {
  root: { background: "#202020", pb: 6 },
};

import {
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  MenuItem,
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
import Layout from "../../component/Layout/Layout";
import { endpoint, rupees } from "../../services/urls";

function Withdrawl() {
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
        <div  style={{
              background: "linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)",
            }}
            className="grid place-items-center  rounded-b-[50px]">
            <span className="py-[8%]">Withdraw</span>
          </div>
          <div className="bg-white !bg-opacity-10 rounded-lg p-5 mt-3 w-full flex flex-col items-center px-[10%]">
            <p className="text-4xl">{rupees} 285.49</p>
            <p className="!text-white font-semibold text-xl">Balance</p>
            <div className="!bg-white !h-[1px] mt-3 w-full"></div>
            <div className="grid grid-cols-3 w-full items-center mt-3 gap-2">
              <span className="col-span-1 !text-white !text-sm">
                Enter Amount *
              </span>
              <TextField
                placeholder="Enter Wallet Amont"
                className="!text-white col-span-2 !bg-white !bg-opacity-5"
                size="small"
              />
              <span className="col-span-1 !text-white !text-sm ">
                Withdrawal Type *
              </span>
              <TextField
                select
                placeholder="Enter Wallet Amont"
                className="!text-white col-span-2 !bg-white !bg-opacity-5 "
                size="small"
              >
                <MenuItem selected value="Bank Type">Bank Type</MenuItem>
              </TextField>
              <span className="col-span-1 !text-white !text-sm">
                Bank Name *
              </span>
              <TextField
                placeholder="Enter Wallet Amont"
                className="!text-white col-span-2 !bg-white !bg-opacity-5 "
                size="small"
              />
              <span className="col-span-1 !text-white !text-sm">
                Account Holder Name *
              </span>
              <TextField
                placeholder="Enter Wallet Amont"
                className="!text-white col-span-2 !bg-white !bg-opacity-5 "
                size="small"
              />
              <span className="col-span-1 !text-white !text-sm">
                IFSC Code *
              </span>
              <TextField
                placeholder="Enter Wallet Amont"
                className="!text-white col-span-2 !bg-white !bg-opacity-5 "
                size="small"
              />
              <span className="col-span-1 !text-white !text-sm">
                Account Number *
              </span>
              <TextField
                placeholder="Enter Wallet Amont"
                className="!text-white col-span-2 !bg-white !bg-opacity-5 "
                size="small"
              />
              <span className="col-span-1 !text-white !text-sm">
                Transaction Password *
              </span>
              <TextField
                placeholder="Enter Wallet Amont"
                className="!text-white col-span-2 !bg-white !bg-opacity-5 "
                size="small"
              />
              <Button
                    variant="contained"
                    className={`!bg-[#47C45D] place-items-center col-span-3 !text-white`}
                  >
                  Submit
                </Button>
            </div>
          </div>
        </div>
        </Container>
      </Box>
    </Layout>
  );
}

export default Withdrawl;

const styles = {
  root: { background: "#202020", pb: 6 },
};

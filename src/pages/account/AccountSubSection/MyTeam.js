import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import {
  Box,
  CircularProgress,
  Container
} from "@mui/material";
import axios from "axios";
import copy from "clipboard-copy";
import { useFormik } from "formik";
import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Layout from "../../../component/Layout/Layout";
import { endpoint } from "../../../services/urls";
  function MyTeam() {
    const navigate = useNavigate()
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
            <div
              style={{
                background: "linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)",
              }}
              className="grid place-items-center rounded-b-[50px]"
            >
              <span className="py-[8%]">My Team</span>
            </div>

            <div>
              {[
                1,
                2,
                3,
                4,
                34,
                45,
                53,
                3,
                3,
                34,
                34,
                354,
                34,
                2,
                4234,
                234,
                234,
                234,
                23423,
              ]?.map((i,index) => {
                return (
                  <div
                  onClick={()=>navigate(`/account-my-team/details/${index+1}`)}
                   className="cursor-pointer bg-white !bg-opacity-10 rounded-lg p-5 mt-3 py-8">
                    <div className="flex justify-between w-full">
                      <span className="font-bold !text-white !text-xl ">Level {index+1}</span>
                      <span className="!text-2xl !text-[#FF7D89] font-bold">
                        Total Team:{i}
                        <KeyboardDoubleArrowRightIcon className="!text-[#FF7D89]"/>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </Box>
      </Layout>
    );
  }
  
  export default MyTeam;
  
  const styles = {
    root: { background: "#202020", pb: 6 },
  };
  
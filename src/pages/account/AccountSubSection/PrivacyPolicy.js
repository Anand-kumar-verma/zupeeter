import { Box, CircularProgress, Container } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Layout from "../../../component/Layout/Layout";
import { endpoint } from "../../../services/urls";
import { DockTwoTone } from "@mui/icons-material";
function PrivacyPolicy() {
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
          <div
            style={{
              background: "linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)",
            }}
            className="grid place-items-center rounded-b-[50px]"
          >
            <span className="py-[8%]">Privacy Policy</span>
          </div>

          <div className="mt-3  w-full  bg-white bg-opacity-5    p-3">
            <p className="!text-[12px] !text-white">
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use
              the Service and tells You about Your privacy rights and how the
              law protects You.
            </p>
            <p className="text-4xl !text-white">
              Interpretation and Definitions
            </p>
            <p className="text-2xl !text-white">Interpretation</p>
            <p className="!text-[12px] !text-white">
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </p>
            <p className="text-2xl !text-white">Definitions</p>
            <p className="!text-[12px] !text-white">
              For the purposes of this Privacy Policy:
            </p>
            <div>
              <FiberManualRecordIcon fontSize="10px" className="" />
              <span className=" ml-4 !text-[12px] !text-white !font-bold">
                You
              </span>
              <span className="!text-[12px] !text-white">
                {" "}
                means the individual accessing or using the Service, or the
                company, or other legal entity on behalf of which such
                individual is accessing or using the Service, as applicable.
              </span>
            </div>
            <div>
              <FiberManualRecordIcon fontSize="10px" className="" />
              <span className=" ml-4 !text-[12px] !text-white !font-bold">
                Company
              </span>
              <span className="!text-[12px] !text-white">
                {" "}
                (referred to as either "the Company", "We", "Us" or "Our" in
                this Agreement) refers to Trade Mall.
              </span>
            </div>
            <div>
              <FiberManualRecordIcon fontSize="10px" className="" />
              <span className=" ml-4 !text-[12px] !text-white !font-bold">
                Affiliate
              </span>
              <span className="!text-[12px] !text-white">
                {" "}
                means an entity that controls, is controlled by or is under
                common control with a party, where "control" means ownership of
                50% or more of the shares, equity interest or other securities
                entitled to vote for election of directors or other managing
                authority.
              </span>
            </div>
            <div>
              <FiberManualRecordIcon fontSize="10px" className="" />
              <span className=" ml-4 !text-[12px] !text-white !font-bold">
                Account
              </span>
              <span className="!text-[12px] !text-white">
                {" "}
                means a unique account created for You to access our Service or
                parts of our Service.{" "}
              </span>
            </div>
            <div>
              <FiberManualRecordIcon fontSize="10px" className="" />
              <span className=" ml-4 !text-[12px] !text-white !font-bold">
                Website
              </span>
              <span className="!text-[12px] !text-white">
                {" "}
                refers to Trade Mall, accessible from https://trademall.io{" "}
              </span>
            </div>
            <div>
              <FiberManualRecordIcon fontSize="10px" className="" />
              <span className=" ml-4 !text-[12px] !text-white !font-bold">
                Service
              </span>
              <span className="!text-[12px] !text-white">
                {" "}
                refers to the Website.
              </span>
            </div>
            <div>
              <FiberManualRecordIcon fontSize="10px" className="" />
              <span className=" ml-4 !text-[12px] !text-white !font-bold">
                Country
              </span>
              <span className="!text-[12px] !text-white">
                {" "}
                refers to: Uttar Pradesh, India
              </span>
            </div>
            <div>
              <FiberManualRecordIcon fontSize="10px" className="" />
              <span className=" ml-4 !text-[12px] !text-white !font-bold">
                Service Provider
              </span>
              <span className="!text-[12px] !text-white">
                {" "}
                means any natural or legal person who processes the data on
                behalf of the Company. It refers to third-party companies or
                individuals employed by the Company to facilitate the Service,
                to provide the Service on behalf of the Company, to perform
                services related to the Service or to assist the Company in
                analyzing how the Service is used.{" "}
              </span>
            </div>
            <div>
              <FiberManualRecordIcon fontSize="10px" className="" />
              <span className=" ml-4 !text-[12px] !text-white !font-bold">
                Third-party Social Media Service{" "}
              </span>
              <span className="!text-[12px] !text-white">
                {" "}
                refers to any website or any social network website through
                which a User can log in or create an account to use the Service.{" "}
              </span>
            </div>
            <div>
              <FiberManualRecordIcon fontSize="10px" className="" />
              <span className=" ml-4 !text-[12px] !text-white !font-bold">
                Personal Data{" "}
              </span>
              <span className="!text-[12px] !text-white">
                {" "}
                is any information that relates to an identified or identifiable
                individual.{" "}
              </span>
            </div>
            <div>
              <FiberManualRecordIcon fontSize="10px" className="" />
              <span className=" ml-4 !text-[12px] !text-white !font-bold">
                Cookies{" "}
              </span>
              <span className="!text-[12px] !text-white">
                {" "}
                are small files that are placed on Your computer, mobile device
                or any other device by a website, containing the details of Your
                browsing history on that website among its many uses.{" "}
              </span>
            </div>
            <div>
              <FiberManualRecordIcon fontSize="10px" className="" />
              <span className=" ml-4 !text-[12px] !text-white !font-bold">
                Device{" "}
              </span>
              <span className="!text-[12px] !text-white">
                {" "}
                means any device that can access the Service such as a computer,
                a cellphone or a digital tablet.{" "}
              </span>
            </div>
            <div>
              <FiberManualRecordIcon fontSize="10px" className="" />
              <span className=" ml-4 !text-[12px] !text-white !font-bold">
                Usage Data{" "}
              </span>
              <span className="!text-[12px] !text-white">
                {" "}
                refers to data collected automatically, either generated by the
                use of the Service or from the Service infrastructure itself
                (for example, the duration of a page visit).{" "}
              </span>
            </div>
            <p className="text-4xl !text-white">
              Collecting and Using Your Personal Data
            </p>
            <p className="text-2xl !text-white">Types of Data Collected</p>
            <p className="text-xl !text-white">Personal Data</p>
            <p className="!text-[12px] !text-white">
              While using Our Service, We may ask You to provide Us with certain
              personally identifiable information that can be used to contact or
              identify You. Personally identifiable information may include, but
              is not limited to:
            </p>
            <div>
              <FiberManualRecordIcon fontSize="10px" className="" />
              <span className=" ml-4 !text-[12px] !text-white ">
                Email address{" "}
              </span>
            </div>
            <div>
              <FiberManualRecordIcon fontSize="10px" className="" />
              <span className=" ml-4 !text-[12px] !text-white ">
                First name and last name{" "}
              </span>
            </div>
            <div>
              <FiberManualRecordIcon fontSize="10px" className="" />
              <span className=" ml-4 !text-[12px] !text-white ">
                Phone number{" "}
              </span>
            </div>
            <div>
              <FiberManualRecordIcon fontSize="10px" className="" />
              <span className=" ml-4 !text-[12px] !text-white ">
                Address, State, Province, ZIP/Postal code, Cit{" "}
              </span>
            </div>
            <div>
              <FiberManualRecordIcon fontSize="10px" className="" />
              <span className=" ml-4 !text-[12px] !text-white ">
                Usage Data{" "}
              </span>
            </div>
            <p className="text-xl !text-white">Usage Data</p>
            <p className="!text-white text-[10px]">
              Usage Data is collected automatically when using the Service.
              Usage Data may include information such as Your Device's Internet
              Protocol address (e.g. IP address), browser type, browser version,
              the pages of our Service that You visit, the time and date of Your
              visit, the time spent on those pages, unique device identifiers
              and other diagnostic data.
            </p>
            <p className="!text-white text-[10px]">
              When You access the Service by or through a mobile device, We may
              collect certain information automatically, including, but not
              limited to, the type of mobile device You use, Your mobile device
              unique ID, the IP address of Your mobile device, Your mobile
              operating system, the type of mobile Internet browser You use,
              unique device identifiers and other diagnostic data.
            </p>
            <p className="!text-white text-[10px]">
              We may also collect information that Your browser sends whenever
              You visit our Service or when You access the Service by or through
              a mobile device.
            </p>
            <p className="text-xl !text-white">
              Tracking Technologies and Cookies
            </p>
            <p className="!text-[10px] !text-white">
              We use Cookies and similar tracking technologies to track the
              activity on Our Service and store certain information. Tracking
              technologies used are beacons, tags, and scripts to collect and
              track information and to improve and analyze Our Service. You can
              instruct Your browser to refuse all Cookies or to indicate when a
              Cookie is being sent. However, if You do not accept Cookies, You
              may not be able to use some parts of our Service.
            </p>
            <p className="!text-[10px] !text-white">
              Cookies can be "Persistent" or "Session" Cookies. Persistent
              Cookies remain on your personal computer or mobile device when You
              go offline, while Session Cookies are deleted as soon as You close
              your web browser.
            </p>
            <p className="!text-[10px] !text-white">
              We use both session and persistent Cookies for the purposes set
              out below:
            </p>
            <p>
              <FiberManualRecordIcon fontSize="10px" className="" />
              <span className=" ml-4 !text-sm !text-white ">
              Necessary / Essential Cookies{" "}
              </span>
            </p>
          </div>
        </Container>
      </Box>
    </Layout>
  );
}

export default PrivacyPolicy;

const styles = {
  root: { background: "#202020", pb: 6 },
  depositWithdrawIcon: { width: "30px", height: "30px" },
};

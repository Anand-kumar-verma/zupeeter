import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import FitbitIcon from "@mui/icons-material/Fitbit";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import InfoIcon from "@mui/icons-material/Info";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import TelegramIcon from "@mui/icons-material/Telegram";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  IconButton,
  Slide,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import copy from "clipboard-copy";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import one from "../../assets/images/1.png";
import two from "../../assets/images/2.png";
import three from "../../assets/images/3.png";
import Icon1 from "../../assets/images/icon1.png";
import CloseIcon from "@mui/icons-material/Close";

import Icon2 from "../../assets/images/icon2.png";
import playnow from "../../assets/images/playnow.png";
import Layout from "../../component/Layout/Layout";
import { endpoint, rupees } from "../../services/urls";
import playnow from "../../assets/images/playnow.png";
import { Policy } from "@mui/icons-material";
import Notification from "./Notification";
import Lottery from "./DashboadSubcomponent/Lottery";
import Original from "./DashboadSubcomponent/Original";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function Dashboard() {
  const isAvailableUser = sessionStorage.getItem("isAvailableUser");
  const navigate = useNavigate();
  const [poicy, setpoicy] = React.useState(false);
  const [type_of_game, settype_of_game] = React.useState("");

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
  const game_data = [
    {
      name: "Lottery",
      img: "https://ossimg.bdgadminbdg.com/IndiaBDG/gamecategory/gamecategory_202401100619315n2k.png",
    },
    {
      name: "Original",
      img: "https://ossimg.bdgadminbdg.com/IndiaBDG/gamecategory/gamecategory_20240110061847fevc.png",
    },
    {
      name: "Slots",
      img: "https://ossimg.bdgadminbdg.com/IndiaBDG/gamecategory/gamecategory_20240110061937gbid.png",
    },
    {
      name: "Sports",
      img: "https://ossimg.bdgadminbdg.com/IndiaBDG/gamecategory/gamecategory_20240110061915xrqy.png",
    },
    {
      name: "Popular",
      img: "https://ossimg.bdgadminbdg.com/IndiaBDG/gamecategory/gamecategory_202401100619464x51.png",
    },
    {
      name: "Casino",
      img: "https://ossimg.bdgadminbdg.com/IndiaBDG/gamecategory/gamecategory_20240110061909hwqs.png",
    },
  ];
  const amount = data?.data?.data?.wallet || 0;

  const handleClosepolicy = () => {
    setpoicy(false);
    sessionStorage.removeItem("isAvailableUser");
  };
  useEffect(() => {
    if (isAvailableUser) {
      setpoicy(true);
    }
  }, []);

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
            className=" rounded-b-md"
          >
            <div className="px-10 py-2 flex justify-between">
              <div className="flex items-center gap-2">
                <FitbitIcon />
                <span className="text-[14px]">Welcome to zupeeter game</span>
              </div>
              <div className="flex gap-1 items-center cursor-pointer">
                <CloudDownloadIcon />
                <span className="text-[12px]">Download App</span>
              </div>
            </div>
          </div>
          <Box className="!px-2">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper !rounded-lg !mt-2"
            >
              <SwiperSlide>
                <Box
                  component="img"
                  src={one}
                  alt="Slide 1"
                  sx={styles.swiperImage}
                  className="!rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  component="img"
                  src={two}
                  alt="Slide 2"
                  sx={styles.swiperImage}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  component="img"
                  src={three}
                  alt="Slide 3"
                  sx={styles.swiperImage}
                />
              </SwiperSlide>
            </Swiper>
          </Box>
          <div className="mt-2 flex items-center gap-5 !bg-white !bg-opacity-5 rounded-lg px-3 py-3">
            <RecordVoiceOverIcon />
            <p className="text-[12px] !text-white leading-3">
              See the Installation page for additional docs about how to make
              sure everything is set up correctly.
            </p>
            <InfoIcon className="!cursor-pointer" />
          </div>
          <Stack direction="row" sx={styles.depositWithdrawContainer}>
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
              <Typography variant="body1" color="initial" className="db-header">
                Deposit
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" color="initial" className="b-val">
                ₹ {amount}
              </Typography>
              <Typography variant="body1" color="initial" className="b-valp">
                Available Balance
              </Typography>
            </Box>
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
              <Typography variant="body1" color="initial" className="db-header">
                Withdraw
              </Typography>
            </Box>
          </Stack>
          <Box sx={styles.referralLinkContainer}>
            <Typography variant="body1" sx={styles.referralLinkTitle}>
              Referral Link
            </Typography>
            <Stack direction="row" sx={styles.referralLinkInputContainer}>
              <TextField
                className="dbinput"
                fullWidth
                id="referrel_code"
                name="referrel_code"
                value={fk.values.referrel_code}
                onChange={fk.handleChange}
                sx={styles.referralLinkInput}
              />
              <Button
                variant="contained"
                className="whitebtn"
                sx={styles.referralLinkButton}
                onClick={() => functionTOCopy(fk.values.referrel_code)}
              >
                Copy
              </Button>
            </Stack>
            <Stack direction="row" sx={styles.socialButtonsContainer}>
              <Button className="telegrambtn" sx={styles.telegramButton}>
                <Stack>
                  <Box sx={styles.socialButtonIcon}>
                    <TelegramIcon sx={styles.socialIcon} />
                  </Box>
                  <Box sx={styles.socialButtonText}>telegram</Box>
                </Stack>
              </Button>
              <Button className="supportbtn" sx={styles.supportButton}>
                <Stack>
                  <HelpOutlineIcon sx={styles.socialIconinfo} />
                  <Box sx={styles.socialButtonText}>Support</Box>
                </Stack>
              </Button>
            </Stack>
          </Box>
          <div className="mt-2 w-full grid grid-cols-3 gap-[2%]">
            {game_data?.map((i) => {
              return (
                <div
                  onClick={() => settype_of_game(i?.name)}
                  style={{
                    background:
                      "linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)",
                  }}
                  className="cursor-pointer rounded-lg w-full flex flex-col items-center justify-center"
                >
                  <img className="w-[90px] h-[90px] " src={i?.img} />
                  <p className="!text-sm font-bold">{i?.name}</p>
                </div>
              );
            })}
          </div>

          {type_of_game === "Lottery" && <Lottery />}
          {type_of_game === "Original" && <Original />}

          <div className="!bg-white !bg-opacity-5 px-5 py-4">
            <p className="!text-[#DCB86A] font-bold text-xl">
              I Winning Information
            </p>
            {[1, 2, 3, 4, 4, 5, 5].map((i) => {
              return (
                <div className="grid grid-cols-3 cursor-pointer bg-white !bg-opacity-10 rounded-lg px-5 py-2 mt-3">
                  <div className="flex items-center gap-2">
                    <Avatar />
                    <span className="!text-gray-500 text-[14px]">
                      Anand***d
                    </span>
                  </div>
                  <div>
                    <img
                      className="h-20 w-28 border-[1px] border-yellow-600 rounded-lg"
                      src="https://ossimg.bdgadminbdg.com/IndiaBDG/lotterycategory/lotterycategory_20240110062118e9kt.png"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="!text-lg !text-[#f0d8a4] whitespace-nowrap">
                      Receiving {rupees}2334.322
                    </span>
                    <span className="  !text-sm !text-gray-500">
                      Winning Amount
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <Dialog
            open={poicy}
            TransitionComponent={Transition}
            onClose={handleClosepolicy}
            className="dialogsmall"
          >
            <Box>
              <Stack className="dialog-header-policy">
                <Box>
                  <Typography variant="body1" sx={{ color: "white" }}>
                    Notification
                  </Typography>
                </Box>
                <IconButton onClick={handleClosepolicy}>
                  <CloseIcon />
                </IconButton>
              </Stack>
            </Box>
            <Notification handleClosepolicy={handleClosepolicy} />
          </Dialog>
        </Container>
      </Box>
    </Layout>
  );
}

export default Dashboard;

const styles = {
  root: { background: "#202020", pb: 6 },
  dashboardTitle: {
    textAlign: "center",
    color: "white !important",
    fontSize: "21px",
    fontWeight: "500",
  },
  swiperImage: { width: "100%", height: "auto" },
  depositWithdrawContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    mt: 2,
  },
  depositWithdrawIcon: { width: "30px", height: "30px" },
  referralLinkContainer: {
    background: "#3A3A3A",
    padding: "15px 15px",
    borderRadius: "5px",
    mt: 4,
  },
  referralLinkTitle: {
    color: "white !important",
    fontSize: "14px",
    fontWeight: "500 !important",
  },
  referralLinkInputContainer: { alignItems: "center" },
  referralLinkInput: { width: "100%" },
  referralLinkButton: { marginLeft: 2 },
  socialButtonsContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    mt: 4,
  },
  telegramButton: {
    fontSize: "14px",
    color: "white !important",
    textTransform: "capitalize",
    fontWeight: "400",
  },
  supportButton: {
    fontSize: "14px",
    color: "white !important",
    textTransform: "capitalize",
    fontWeight: "400",
  },
  socialButtonIcon: {
    margin: "auto",
    background: "white",
    borderRadius: "50%",
    width: "25px",
    height: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  socialIcon: { fontSize: "20px", "&>path": { color: "#6da7f4 !important" } },
  socialIconinfo: {
    fontSize: "20px",
    margin: "auto",
    "&>path": { color: "white !important" },
  },
  socialButtonText: {
    color: "white !important",
    textTransform: "capitalize",
    fontWeight: "400",
    fontSize: "14px",
  },
  gameImage: {
    width: "90px",
    height: "80px",
    position: "absolute",
    top: "-20px",
    right: "0px",
  },
  gameTitle: {
    fontSize: "22px",
    fontWeight: "600",
    color: "white !important",
    transition: "all 0.3s",
  },
  gameDescription: {
    fontSize: "15px",
    fontWeight: "400",
    color: "white !important",
    mt: 2,
    transition: "all 0.3s",
  },
  userImage: { width: "50px", height: "50px" },
};

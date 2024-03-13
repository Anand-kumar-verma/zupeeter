import CachedIcon from "@mui/icons-material/Cached";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Box, Container, Stack, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { zubgback, zubgbackgrad, zubgback_cricket } from "../../Shared/color";
import cip from "../../assets/cip.png";
import deposit from "../../assets/deposit.png";
import card from "../../assets/images/card-payment.png";
import gift from "../../assets/images/gift-box.png";
import graph from "../../assets/images/graph.png";
import notification from "../../assets/images/notification.png";
import balance from "../../assets/images/send.png";
import trans from "../../assets/images/translation.png";
import winofthematch from "../../assets/winofthematch.png";
import { useEffect, useState } from "react";
import SplashScreen from "../SplashScreen";
import withdrow from "../../assets/images/cash-withdrawal.png";
import rechargeIcon from "../../assets/images/deposit.png";
import wdhistory from "../../assets/images/history.png";
import deposite from "../../assets/images/payment.png";
import Layout from "../../component/Layout/Layout";
import ReactApexChart from "react-apexcharts";
function CricketUserprofile() {
  const [showSplashScreen, setShowSplashScreen] = useState(false);
  const isAvailableUser = sessionStorage.getItem("isAvailableCricketUser");
  const navigate = useNavigate();
  const handleClosepolicy = () => {
    setShowSplashScreen(false);
    sessionStorage.removeItem("isAvailableCricketUser");
  };
  useEffect(() => {
    if (isAvailableUser) {
      setShowSplashScreen(true);
    }
  }, []);
  useEffect(() => {
    setTimeout(() => {
      handleClosepolicy();
    }, 2000);
  }, []);
  // showSplashScreen

  const state = {
    series: [44, 55, 67, 83],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
              color:'white'
            },
            total: {
              show: true,
              label: "Run",
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249
              },
              style: {
                fontSize: "16px",
                colors: ["#fff"], // Set the color to white
              },
            },
          },
        },
      },
      labels: ["Rank", "Team", "Rating", "Point"],
    },
  };

  if (showSplashScreen) return <SplashScreen />;
  return (
    <Layout footer={false}>
      <Container sx={style.container} >
        <Stack direction="row" sx={style.header}>
          <Box sx={style.profileBox}>
            <Box
              component="img"
              src={
                "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/6.png"
              }
              // src={profile}
              sx={style.profileImage}
            />
          </Box>
          <Box sx={style.userInfo}>
            <Typography variant="" color="initial">
              Rohit Sharma
            </Typography>
            <Typography variant="body1" color="initial">
              UID | 52414986
            </Typography>
          </Box>
          <Box sx={style.rankImage}>
            <Box component="img" src={winofthematch} sx={style.rankImage} />
          </Box>
        </Stack>
        <Box
          sx={style.balanceContainer}
          className={" !grid !grid-cols-2 !gap-2 !bg-[#3883BF] !bg-opacity-20"}
        >
          <div className=" !bg-white !bg-opacity-5 rounded-lg p-2">
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <Box component="img" src={balance} sx={style.cardImage} />
              <Typography
                variant="body1"
                color="initial"
                sx={style.balanceText}
              >
                Wallet Amount
              </Typography>
            </Stack>
            <Stack direction="row" sx={{ alignItems: "center", mt: "10px" }}>
              <Typography
                variant="body1"
                color="initial"
                sx={style.totalBalance}
              >
                ₹3,069.32
              </Typography>
              <CachedIcon sx={style.cachedIcon} />
            </Stack>
            <Stack direction="row" sx={{ alignItems: "center", mt: "10px" }}>
              <Box component="img" src={cip} sx={style.cardImage} />
              <Typography variant="body1" color="initial" sx={style.cardNumber}>
                *** *** *** ***
              </Typography>
            </Stack>
          </div>
          <div className=" !bg-white !bg-opacity-5 rounded-lg p-2">
            <ReactApexChart
              options={state.options}
              series={state.series}
              type="radialBar"
            />
          </div>
        </Box>

        <Box
          className="wallet-track-box"
          sx={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/936417012/vector/cricket-stadium-vector-background.jpg?s=612x612&w=0&k=20&c=ktPUWBDjsTAYT0cjroYMkgJG3AQPLPuSOO1Vd8Urgyg=")',
          }}
        >
          <Stack
            direction="row"
            sx={{
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{ width: "49%" }}
              className={"!bg-white !bg-opacity-20 !rounded-lg !py-2"}
            >
              <Box
                sx={{
                  margin: "auto",
                  background: "white",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "white !important",
                    background: zubgback_cricket,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                  }}
                >
                  0%
                </Box>
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  mt: "15px",
                  "&>p": { color: "white", fontSize: "12px" },
                }}
              >
                <Typography variant="body1" color="initial">
                  ₹ 0.00
                </Typography>
                <Typography variant="body1" color="initial">
                  Main Wallet
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ width: "49%" }}
              className={"!bg-white !bg-opacity-20 !rounded-lg  !py-2"}
            >
              <Box
                sx={{
                  margin: "auto",
                  background: zubgbackgrad,
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "white !important",
                    background: zubgback_cricket,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                  }}
                >
                  100%
                </Box>
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  mt: "15px",
                  "&>p": { color: "white", fontSize: "12px" },
                }}
              >
                <Typography variant="body1" color="initial">
                  ₹ 3,077.72
                </Typography>
                <Typography variant="body1" color="initial">
                  3rd party wallets
                </Typography>
              </Box>
            </Box>
          </Stack>
          <Stack
            direction="row"
            sx={{
              width: "100%",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            {[
              { img: rechargeIcon, item: "Deposit",nav:"/cricket/depositCash" },
              { img: withdrow, item: "Withdraw",nav:"/cricket/withdrawlCash" },
              { img: wdhistory, item: "Deposit history",nav:"/cricket/deposit-history"  },
              { img: deposite, item: "Withdrawal history",nav:"/cricket/withdrawl-history"  },
            ].map((i) => {
              return (
                <Box
                  sx={{
                    width: "24%",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                    "&>a>p": {
                      fontSize: "12px",
                      color: "white",
                      textAlign: "center",
                    },
                    mt: "30px",
                    "&>a>img": { margin: "auto" },
                    mt: "30px",
                  }}
                  className={"!bg-white !bg-opacity-30 !rounded-lg !py-2"}
                >
                  <NavLink to={i.nav}>
                    <Box component="img" src={i.img} width={50}></Box>
                    <Typography variant="body1" color="initial" mt={1}>
                      {i.item}
                    </Typography>
                  </NavLink>
                </Box>
              );
            })}
          </Stack>
        </Box>
        <Box sx={style.actionContainer}>
          <Box
            className={"!cursor-pointer"}
            onClick={() => navigate("/cricket/deposit-history")}
            sx={{
              width: "49%",
              background: zubgbackgrad,
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <Box
                component="img"
                src={deposit}
                className="!textblue"
                sx={{ width: "40px", height: "40px", marginRight: "20px" }}
              ></Box>
              <Box
                sx={{
                  "&>:nth-child(1)": {
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "white",
                  },
                  "&>:nth-child(2)": {
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "white",
                  },
                }}
              >
                <Typography variant="body1" color="initial">
                  Deposit
                </Typography>
                <Typography variant="body1" color="initial">
                  My Deposit history
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Box
            className={"!cursor-pointer"}
            onClick={() => navigate("/cricket/withdrawl-history")}
            sx={{
              width: "49%",
              background: zubgbackgrad,
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <Box
                component="img"
                src={card}
                sx={{ width: "40px", height: "40px", marginRight: "20px" }}
              ></Box>
              <Box
                sx={{
                  "&>:nth-child(1)": {
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "white",
                  },
                  "&>:nth-child(2)": {
                    fontSize: "10px",
                    fontWeight: "500",
                    color: "white",
                  },
                }}
              >
                <Typography variant="body1" color="initial">
                  Withdrawl
                </Typography>
                <Typography variant="body1" color="initial">
                  My Withdrawl history
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
        {/* // start bottom page */}
        <Box sx={style.actionContainertwo}>
          <Stack
            sx={{
              padding: "10px",
              background: zubgback_cricket,
              width: "100%",
              borderRadius: "10px",
              // backgroundImage:
              //   'url("https://media.istockphoto.com/id/936417006/vector/cricket-stadium-vector-wallpaper.jpg?s=612x612&w=0&k=20&c=uig_bpfwpVGd4dZl2VypwcfA1Lx7W4kLr-6A00NIw1M=")',
            }}
          >
            <Stack
              direction="row"
              sx={{
                borderBottom: "1px solid white",
                padding: "10px",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              
            >
              <Stack direction="row" sx={{ alignItems: "center" }}>
                <Box
                  component="img"
                  src={notification}
                  sx={{ width: "20px", height: "20px", marginRight: "10px" }}
                ></Box>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ color: "black", fontSize: "13px", fontWeight: "600" }}
                >
                  Notification
                </Typography>
              </Stack>
              <Box component={NavLink}>
                <KeyboardDoubleArrowRightIcon
                  sx={{ color: "white", fontSize: "23px", fontWeight: "600" }}
                />
              </Box>
            </Stack>
            <Stack
              direction="row"
              sx={{
                borderBottom: "1px solid white",
                padding: " 10px 10px 10px 5px",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              
            >
              <Stack direction="row" sx={{ alignItems: "center" }}>
                <Box
                  component="img"
                  src={gift}
                  sx={{ width: "30px", height: "30px", marginRight: "10px" }}
                ></Box>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ color: "black", fontSize: "13px", fontWeight: "600" }}
                >
                  Gifts
                </Typography>
              </Stack>
              <Box component={NavLink}>
                <KeyboardDoubleArrowRightIcon
                  sx={{ color: "white", fontSize: "23px", fontWeight: "600" }}
                />
              </Box>
            </Stack>
            <Stack
              direction="row"
              sx={{
                borderBottom: "1px solid white",
                padding: " 10px 10px 10px 5px",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              
            >
              <Stack direction="row" sx={{ alignItems: "center" }}>
                <Box
                  component="img"
                  src={graph}
                  sx={{ width: "25px", height: "25px", marginRight: "10px" }}
                ></Box>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ color: "black", fontSize: "13px", fontWeight: "600" }}
                >
                  Game statistics
                </Typography>
              </Stack>
              <Box component={NavLink}>
                <KeyboardDoubleArrowRightIcon
                  sx={{ color: "white", fontSize: "23px", fontWeight: "600" }}
                />
              </Box>
            </Stack>
            <Stack
              direction="row"
              sx={{
                borderBottom: "1px solid white",
                padding: " 10px 10px 10px 5px",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              
            >
              <Stack direction="row" sx={{ alignItems: "center" }}>
                <Box
                  component="img"
                  src={trans}
                  sx={{ width: "25px", height: "25px", marginRight: "10px" }}
                ></Box>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ color: "black", fontSize: "13px", fontWeight: "600" }}
                >
                  Language
                </Typography>
              </Stack>
              <Box component={NavLink}>
                <Typography
                  sx={{ color: "white", fontSize: "13px", fontWeight: "500" }}
                >
                  English
                </Typography>
              </Box>
            </Stack>
            <Stack
              direction="row"
              sx={{
                borderBottom: "1px solid white",
                padding: " 10px 10px 10px 5px",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              
            >
              <Stack direction="row" sx={{ alignItems: "center" }}>
                <Box
                  component="img"
                  src={trans}
                  sx={{ width: "25px", height: "25px", marginRight: "10px" }}
                ></Box>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ color: "black", fontSize: "13px", fontWeight: "600" }}
                >
                  Total Match
                </Typography>
              </Stack>
              <Box component={NavLink}>
                <Typography
                  sx={{ color: "white", fontSize: "13px", fontWeight: "500" }}
                >
                  21300
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Layout>
  );
}

export default CricketUserprofile;

const style = {
  container: { background: zubgback },
  header: {
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: "20px",
  },
  profileBox: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    overflow: "hidden",
  },
  profileImage: { width: "100%", height: "100%" },
  userInfo: {
    "& > :nth-child(1)": {
      fontSize: "18px",
      fontWeight: "600",
      color: "white",
    },
    "& > :nth-child(2)": {
      fontSize: "14px",
      fontWeight: "400",
      color: "white",
    },
  },
  rankImage: { width: "100px", height: "100px" },
  balanceContainer: {
    background: zubgback_cricket,
    borderRadius: "10px",
    padding: "20px",
    width: "95%",
    margin: "auto",
    marginTop: "2px",
  },
  balanceText: {
    fontSize: "16px",
    fontWeight: "500",
    color: "white",
    marginLeft: "10px",
  },
  totalBalance: {
    fontSize: "30px",
    fontWeight: "600",
    color: "white",
    marginRight: "10px",
  },
  cachedIcon: { color: "white" },
  cardImage: { width: "50px" },
  cardNumber: { fontSize: "14px", color: "white", marginLeft: "10px" },
  actionContainer: {
    background: "#3883BF",
    borderRadius: "10px",
    padding: "20px",
    width: "95%",
    margin: "auto",
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  actionBox: { width: "20%" },
  actionImage: { width: "30px", height: "30px", margin: "auto" },
  actionText: {
    color: "white",
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "500",
  },
  actionContainertwo: {
    background: zubgbackgrad,
    flexDirection: "column",
    borderRadius: "10px",
    padding: "10px",
    width: "95%",
    margin: "auto",
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

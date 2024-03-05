import ArticleIcon from "@mui/icons-material/Article";
import CloseIcon from "@mui/icons-material/Close";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SummarizeIcon from "@mui/icons-material/Summarize";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Pagination from "@mui/material/Pagination";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import moment from "moment";
import * as React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { NavLink, useNavigate } from "react-router-dom";
import pr0 from "../../../../assets/images/0.png";
import pr11 from "../../../../assets/images/11.png";
import pr22 from "../../../../assets/images/22.png";
import pr33 from "../../../../assets/images/33.png";
import pr4 from "../../../../assets/images/4.png";
import pr5 from "../../../../assets/images/5.png";
import pr6 from "../../../../assets/images/6.png";
import pr7 from "../../../../assets/images/7.png";
import pr8 from "../../../../assets/images/8.png";
import pr9 from "../../../../assets/images/9.png";
import Layout from "../../../../component/Layout/Layout";
import { endpoint, rupees } from "../../../../services/urls";
import ApplyBetDialogBox from "../ApplyBetDialogBox";
import Policy from "../policy/Policy";
import io from "socket.io-client";
import { useFormik } from "formik";
import OneMinCountDown from "./OneMinCountDown";
import TwoMinCountDown from "./TwoMinCountDown";
import ThreeMinCountDown from "./ThreeMinCountDown";
// const socket = io("https://app.ferryinfotech.in/");
const socket = io("http://192.168.189.149:9000");
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function WinOneMin({ gid }) {
  const navigate = useNavigate();
  const login_data = localStorage.getItem("logindata");
  const user_id = JSON.parse(login_data).UserID;
  const [TabTwo, setTabTwo] = useState(1);
  const [expanded, setExpanded] = useState(false);
  const [apply_bit_dialog_box, setapply_bit_dialog_box] = React.useState(false);
  const [dialog_type, setdialog_type] = React.useState("");
  const [one_min_time, setOne_min_time] = useState(0);
  const show_this_one_min_time = String(one_min_time).padStart(2, "0");

  const { isLoading, data: game_history } = useQuery(
    ["gamehistory"],
    () => GameHistoryFn(),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );

  const GameHistoryFn = async () => {
    try {
      const response = await axios.get(
        `${endpoint.game_history}?limit=20&offset=0&gameid=${gid}`
      );
      return response;
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
  };

  const { isLoading: myhistory_loding, data: my_history } = useQuery(
    ["myhistory"],
    () => MyHistoryFn(),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );

  const MyHistoryFn = async () => {
    try {
      const response = await axios.get(
        `${endpoint.my_history}?userid=${user_id}&limit=0`
      );
      return response;
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
  };
  const game_history_data = game_history?.data?.data;
  const my_history_data = my_history?.data?.data?.filter(
    (i) => i?.gameid === gid
  );

  if (isLoading || myhistory_loding)
    return (
      <Layout>
        <CircularProgress />
      </Layout>
    );
  return (
    <Box className="mainBox">
      {gid === "1" ? (
        <OneMinCountDown />
      ) : gid === "2" ? (
        <TwoMinCountDown />
      ) : (
        <ThreeMinCountDown />
      )}
      <Box sx={{ py: 2 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Button
            className="greembtn"
            onClick={() => {
              setapply_bit_dialog_box(true);
              setdialog_type("green");
            }}
          >
            Join Green
          </Button>
          <Button
            className="greemviolet"
            onClick={() => {
              setapply_bit_dialog_box(true);
              setdialog_type("voilet");
            }}
          >
            Join Violet
          </Button>
          <Button
            className="greemred"
            onClick={() => {
              setapply_bit_dialog_box(true);
              setdialog_type("red");
            }}
          >
            Join Red
          </Button>
        </Stack>
        <Box className="pridictcolor">
          {[
            { no: 0, img: pr0 },
            { no: 1, img: pr11 },
            { no: 2, img: pr22 },
            { no: 3, img: pr33 },
            { no: 4, img: pr4 },
          ]?.map((i) => {
            return (
              <Box
                className="!cursor-pointer"
                component="img"
                src={i?.img}
                onClick={() => {
                  setapply_bit_dialog_box(true);
                  setdialog_type(i.no);
                }}
              ></Box>
            );
          })}
        </Box>
        <Box className="pridictcolor">
          {[
            { no: 5, img: pr5 },
            { no: 6, img: pr6 },
            { no: 7, img: pr7 },
            { no: 8, img: pr8 },
            { no: 9, img: pr9 },
          ]?.map((i) => {
            return (
              <Box
                className="!cursor-pointer"
                component="img"
                src={i?.img}
                onClick={() => {
                  setapply_bit_dialog_box(true);
                  setdialog_type(i.no);
                }}
              ></Box>
            );
          })}
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Button
            className="btnsm"
            onClick={() => {
              setapply_bit_dialog_box(true);
              setdialog_type("small");
            }}
          >
            small
          </Button>
          <Button
            className="btmbig"
            onClick={() => {
              setapply_bit_dialog_box(true);
              setdialog_type("big");
            }}
          >
            Big
          </Button>

          {/* small */}

          {/* small close */}
        </Stack>
      </Box>
      <Box className="tableBox">
        <Box sx={{ background: "#3A3A3A" }}>
          <Stack direction="row">
            <Box
              component={NavLink}
              onClick={() => setTabTwo(1)}
              className={TabTwo === 1 ? "activewinNav Winnav" : "Winnav"}
            >
              <Typography variant="h3" color="initial">
                Game History
              </Typography>
            </Box>
            <Box
              component={NavLink}
              onClick={() => setTabTwo(2)}
              className={TabTwo === 2 ? "activewinNav Winnav" : " Winnav"}
            >
              <Typography variant="h3" color="initial">
                Chart
              </Typography>
            </Box>
            <Box
              component={NavLink}
              onClick={() => setTabTwo(3)}
              className={TabTwo === 3 ? "activewinNav Winnav" : " Winnav"}
            >
              <Typography variant="h3" color="initial">
                My History
              </Typography>
            </Box>
          </Stack>
        </Box>
        {TabTwo === 1 && (
          <Box>
            <Stack direction="row" className="onegotextbox">
              <Typography variant="body1" color="initial">
                <EmojiEventsIcon /> ONE GO Record
              </Typography>
            </Stack>
            <TableContainer component={Paper}>
              <Table
                sx={{ maxWidth: 575, background: "#3A3A3A", color: "white" }}
                className="wintable"
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell className="!text-white">Period</TableCell>
                    <TableCell className="!text-white">Number</TableCell>
                    <TableCell className="!text-white">Big Small</TableCell>
                    <TableCell className="!text-white">Result</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {game_history_data?.slice(0, 20)?.map((i) => {
                    return (
                      <TableRow>
                        <TableCell className="!text-white">
                          {Date.now(i?.datetime)}
                        </TableCell>
                        <TableCell className="!text-white">
                          {i?.number}
                        </TableCell>
                        <TableCell
                          className={`${
                            Number(i?.number) <= 4
                              ? "!text-blue-400"
                              : "!text-green-400"
                          }`}
                        >
                          {Number(i?.number) <= 4 ? "Small" : "Big"}
                        </TableCell>
                        <TableCell>
                          {i?.number === "0" || i?.number === "5" ? (
                            <div className="!flex !gap-1">
                              <div
                                className={`!w-[15px] !h-[15px] !rounded-full ${
                                  (i?.number === "0" && "bg-red-400") ||
                                  (i?.number === "5" && "bg-green-400")
                                }`}
                              ></div>
                              <div
                                className={`!w-[15px] !h-[15px] !rounded-full ${
                                  (i?.number === "0" && "bg-violet-400") ||
                                  (i?.number === "5" && "bg-violet-400")
                                }`}
                              ></div>
                            </div>
                          ) : (
                            <>
                              {((i?.number === "1" ||
                                i?.number === "3" ||
                                i?.number === "7" ||
                                i?.number === "9" ||
                                i?.number === "10") && (
                                <div
                                  className={`!w-[15px] !h-[15px] !rounded-full ${
                                    (i?.number === "1" ||
                                      i?.number === "3" ||
                                      i?.number === "7" ||
                                      i?.number === "9" ||
                                      i?.number === "10") &&
                                    "bg-green-400"
                                  }`}
                                ></div>
                              )) ||
                                ((i?.number === "2" ||
                                  i?.number === "4" ||
                                  i?.number === "6" ||
                                  i?.number === "8" ||
                                  i?.number === "30") && (
                                  <div
                                    className={`!w-[15px] !h-[15px] !rounded-full ${
                                      (i?.number === "2" ||
                                        i?.number === "4" ||
                                        i?.number === "6" ||
                                        i?.number === "8" ||
                                        i?.number === "30") &&
                                      "bg-red-400"
                                    }`}
                                  ></div>
                                )) || (
                                  <div
                                    className={`!w-[15px] !h-[15px] !rounded-full ${
                                      (i?.number === "50" && "bg-[#68A1ED]") ||
                                      (i?.number === "40" && "bg-[#D8B23E]") ||
                                      (i?.number === "20" && "bg-[#FE63FF]")
                                    }`}
                                  ></div>
                                )}
                            </>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
              <Box className="paginationTable">
                <Pagination count={10} />
              </Box>
            </TableContainer>
          </Box>
        )}

        {TabTwo === 2 && (
          <Box className="chartTable">
            <Stack direction="row" className="onegotextbox">
              <Typography variant="body1" color="initial">
                <SummarizeIcon /> Statistic(last 100 Periods)
              </Typography>
            </Stack>
            {game_history_data?.map((i, indexi) => {
              return (
                <Box className="charttableheadingBox !bg-white !bg-opacity-5 !p-3 ">
                  <Stack direction="row">
                    <Box className="charttableheading">
                      <Typography variant="body1" color="initial">
                        {Date.now()}
                      </Typography>
                    </Box>
                    <Box className="winningNumberBox ">
                      <Typography
                        className={`circleNumberbody  !bg-white !font-bold ${
                          i?.number === "0"
                            ? "!bg-gradient-to-b from-[#e85053] to-[#8c06f2] !text-white"
                            : "!bg-white !text-black"
                        }`}
                      >
                        {" "}
                        0
                      </Typography>
                      <Typography
                        className={`circleNumberbody  !bg-white !font-bold ${
                          i?.number === "1"
                            ? "!bg-[#4bef98] !text-white"
                            : "!bg-white !text-black"
                        }`}
                      >
                        {" "}
                        1
                      </Typography>
                      <Typography
                        className={`circleNumberbody  !bg-white !font-bold ${
                          i?.number === "2"
                            ? "!bg-[#f1494c] !text-white"
                            : "!bg-white !text-black"
                        }`}
                      >
                        {" "}
                        2
                      </Typography>
                      <Typography
                        className={`circleNumberbody  !bg-white !font-bold ${
                          i?.number === "3"
                            ? "!bg-[#46eb93] !text-white"
                            : "!bg-white !text-black"
                        }`}
                      >
                        {" "}
                        3
                      </Typography>
                      <Typography
                        className={`circleNumberbody  !bg-white !font-bold ${
                          i?.number === "4"
                            ? "!bg-[#ed4b4e] !text-white"
                            : "!bg-white !text-black"
                        }`}
                      >
                        {" "}
                        4
                      </Typography>
                      <Typography
                        className={`circleNumberbody  !bg-white !font-bold ${
                          i?.number === "5"
                            ? "!bg-gradient-to-b from-[#55f8a1] to-[#8c06f2] !text-white"
                            : "!bg-white !text-black"
                        }`}
                      >
                        {" "}
                        5
                      </Typography>
                      <Typography
                        className={`circleNumberbody  !bg-white !font-bold ${
                          i?.number === "6"
                            ? "!bg-[#f54b4e] !text-black"
                            : "!bg-white !text-black"
                        }`}
                      >
                        {" "}
                        6
                      </Typography>
                      <Typography
                        className={`circleNumberbody  !bg-white !font-bold ${
                          i?.number === "7"
                            ? "!bg-[#4af499] !text-white"
                            : "!bg-white !text-black"
                        }`}
                      >
                        {" "}
                        7
                      </Typography>
                      <Typography
                        className={`circleNumberbody  !bg-white !font-bold ${
                          i?.number === "8"
                            ? "!bg-[#eb494c] !text-white"
                            : "!bg-white !text-black"
                        }`}
                      >
                        {" "}
                        8
                      </Typography>
                      <Typography
                        className={`circleNumberbody  !bg-white !font-bold ${
                          i?.number === "9"
                            ? "!bg-[#4cf199] !text-white"
                            : "!bg-white !text-black"
                        }`}
                      >
                        {" "}
                        9
                      </Typography>
                      <Typography
                        className={`circleNumberbody ${
                          i?.number <= 4 ? "!bg-[#468ce8] " : "!bg-[#df4be1]"
                        } !rounded-full !h-[20px] !w-[20px] !text-center !text-white `}
                      >
                        {i?.number <= 4 ? "S" : "B"}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              );
            })}
            <Box className="paginationTable">
              <Pagination count={10} />
            </Box>
          </Box>
        )}

        {TabTwo === 3 && (
          <Box>
            <Stack direction="row" className="onegotextbox">
              <Typography variant="body1" color="initial">
                <EmojiEventsIcon /> My Three GO Record
              </Typography>
            </Stack>
            <div className="flex flex-col gap-1">
              {my_history_data?.map((i) => {
                return (
                  <div className="!bg-white !bg-opacity-5 p-5 rounded-lg cursor-pointer">
                    <div className="flex justify-between">
                      <p
                        style={{
                          background:
                            "linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)",
                        }}
                        className="px-[10%] rounded-full"
                      >
                        Bet
                      </p>
                      <p
                        className={`${
                          i?.status === 0
                            ? "!text-red-400"
                            : i?.status === "1"
                            ? "!text-green-400"
                            : "!text-blue-400"
                        }`}
                      >
                        {i?.status === "0"
                          ? "Pending"
                          : i?.status === "1"
                          ? "Win"
                          : "Loss"}
                      </p>
                    </div>
                    <div className="flex justify-between mt-2">
                      <p className="!text-white !text-[12px]">Balance</p>
                      <p className="!text-white !text-[12px]">
                        {rupees} {i?.amount}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="!text-white !text-[12px]">Bet Type</p>
                      <p className={`!text-white !text-[12px]`}>
                        {(i?.color === String(10) && "Green") ||
                          (i?.color === String(30) && "Red") ||
                          (i?.color === String(20) && "Voilet") ||
                          (i?.color === String(40) && "Big") ||
                          (i?.color === String(50) && "Small") ||
                          i?.color}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="!text-white !text-[12px]">Type</p>
                      <p className="!text-white !text-[12px]">
                        {i?.gameid === "1"
                          ? "1 min"
                          : i?.gameid === "2"
                          ? "3 min"
                          : "5 min"}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="!text-white !text-[12px]">Win Amount</p>
                      <p className="!text-white !text-[12px]">
                        {rupees} {i?.win || 0}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="!text-white !text-[12px]">Time</p>
                      <p className="!text-white !text-[12px]">
                        {rupees} {moment(i?.datetime)?.format("DD-MM-YYYY")}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="!text-white !text-[12px]">Order number</p>
                      <p className="!text-white !text-[12px]">
                        {rupees} {Date.now(i?.datetime)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Box className="paginationTable">
              <Pagination count={10} />
            </Box>
          </Box>
        )}
      </Box>
      {apply_bit_dialog_box && (
        <ApplyBetDialogBox
          apply_bit_dialog_box={apply_bit_dialog_box}
          setapply_bit_dialog_box={setapply_bit_dialog_box}
          type={dialog_type}
          gid={gid}
        />
      )}
    </Box>
  );
}

export default WinOneMin;

import { CircularProgress, Tab, Tabs } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { CgDetailsMore } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import howtoplay from "../assets/howtoplay.PNG";
import { endpoint } from "../services/urls";
import AirPlane from "./AirPlane";
import AllBets from "./AllBets";
import AccountMenu from "./MenuItems";
import MyBets from "./MyBets";
import Top from "./Top";
import { gray } from "./color";
import crashmusic from '../assets/crashmusic.mp3'
const PlayGame = () => {
  const dispatch = useDispatch();

  const userId = JSON.parse(localStorage.getItem("aviator_data"))?.id;
  const isMediumScreen = useMediaQuery({ minWidth: 800 });
  const [value, setValue] = React.useState(0);
  const [limit, setlimit] = useState(100);
  const [anchorEl, setAnchorEl] = useState(null);


  const handleClick = (event) => {
    anchorEl === null ? setAnchorEl(event.currentTarget) : setAnchorEl(null);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { isLoading, data } = useQuery(
    ["allresult", limit],
    () => resultFunction({ limit: limit }),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );

  const resultFunction = async (reqbody) => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json", // Add the 'Accept' header
      // Add any other headers you need for CORS here
    };
    try {
      const response = await axios.post(`${endpoint.result}`, reqbody, {
        headers,
      });
      return response;
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
  };

  const { isLoading: walletloding, data: walletdata } = useQuery(
    ["walletamount_aviator"],
    () => walletamount(),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );

  const walletamount = async () => {
    try {
      const response = await axios.get(
        `${endpoint.wallet_data}?userid=${userId}`
      );
      return response;
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
  };

  const result = data?.data?.data || [];
  const walletAmount = walletdata?.data || 0;

  const initialValue = {
    refetch: 1,
  };
  const formik = useFormik({
    initialValues: initialValue,
    onSubmit: () => {
      console.log(formik.values);
    },
  });

  ///////////////////////  for airplane data
  const initialValues = {
    country: "India",
    currency: "INR",
    mob: "",
    pass: "",
    // value for bet1 button
    isStart1: false,
    waitingForNextTime1: false,
    autocashout1: false,

    // value for bet1 button
    isStart2: false,
    waitingForNextTime2: false,
    autocashout2: false,

    // common for all
    isFlying: false,
    setcolorofdigit: false,
    setloder: false,
    closeButtomDot: true,
    isEnablingWinner: false,
    isShadowPath: false,
  };

  const fk = useFormik({
    initialValues: initialValues,
    onSubmit: () => {
      console.log(fk.values);
    },
  });

  const audioRefMusic = useRef(null);
  const audioRefSound = useRef(null);
  const isEnableMusic = useSelector((state) => state.aviator.isEnableMusic);
  const isEnableSound = useSelector((state) => state.aviator.isEnableSound);
  const byTimeEnablingMusic = useSelector(
    (state) => state.aviator.byTimeEnablingMusic
  );
  const byTimeEnablingSound = useSelector(
    (state) => state.aviator.byTimeEnablingSound
  );
  const backgroundMusic_url = useSelector(
    (state) => state.aviator.backgroundMusic_url
  );

  useEffect(() => {
    handlePlayMusic();
  }, [isEnableMusic, byTimeEnablingMusic]);
  useEffect(() => {
    handlePlaySound();
  }, [byTimeEnablingSound, isEnableSound]);

  // function to handle the music and sounds
  const handlePlayMusic = async () => {
    if (audioRefMusic?.current) {
      try {
        if (isEnableMusic && byTimeEnablingMusic) {
          await audioRefMusic?.current?.play();
        } else {
          await audioRefMusic?.current?.pause();
        }
      } catch (error) {
        // Handle any errors during play
        console.error("Error during play:", error);
      }
    }
  };
  const handlePlaySound = async () => {
    try {
      if (byTimeEnablingSound && isEnableSound) {
        console.log("inside if");
        await audioRefSound?.current?.play();
      } else {
        console.log("inside else");

        await audioRefSound?.current?.pause();
      }
    } catch (error) {
      // Handle any errors during play
      console.error("Error during play:", error);
    }
  };
  useEffect(() => {
    localStorage.removeItem("hasCodeExecuted");
  }, []);
  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  return (
    <div className=" h-full">
      <audio ref={audioRefMusic} hidden loop>
        <source src={`${backgroundMusic_url}`} type="audio/mp3" />
      </audio>
      <audio ref={audioRefSound} hidden>
        <source src={crashmusic} type="audio/mp3" />
      </audio>
      {isMediumScreen && <div className={`bg-[#0E0E0E] h-[8%]`}></div>}
      <div className={`${gray} h-[10%] flex justify-between text-white p-1`}>
        <div>
          <img src={howtoplay} className="h-16" />
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col justify-between">
            <p className="text-[10px] bg-[#f6c74f] text-black px-4 py-1 rounded-md">
              Play for money
            </p>
            <p className="">
              {walletloding ? (
                <CircularProgress />
              ) : (
                <span className="text-green-700 font-bold">
                  {Number(walletAmount?.wallet).toFixed(2) || "0000"}
                </span>
              )}

              <sapn className="text-gray-500 text-[10px]">USD</sapn>
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <RxCross2 className="text-lg cursor-pointer" />
            <CgDetailsMore
              className="text-lg cursor-pointer"
              onClick={(e) => handleClick(e)}
            />
          </div>
        </div>
      </div>
      <div className="flex text-white   lg:flex-row-reverse flex-col">
        {/* // right section */}
        <div className={` w-[100%] h-auto lg:w-[75%]  bg-black p-2 rounded-lg`}>
          <div
            className={`no-scrollbar px-1 py-1 flex gap-1 flex-wrap h-[24px] overflow-x-scroll overflow-y-hidden rounded-full`}
          >
            {result?.map((i, index) => {
              return (
                <p
                  className={`${
                    index === 0
                      ? "text-[#e66a81] bg-black "
                      : index % 2 == 0
                      ? "text-purple-500 bg-black"
                      : index % 3 === 0
                      ? "text-[#01F7F7] bg-black"
                      : "text-amber-600 bg-black"
                  } rounded-full px-2 text-[10px] overscroll-auto scroll-smooth`}
                >
                  {i?.result} X
                </p>
              );
            })}
          </div>
          <AirPlane formik={formik} fk={fk} />
        </div>
        {/* // left section */}
        <div
          className={`w-[100%] lg:w-[25%] lg:h-[520px] h-[500px] ${gray} px-2 border-2 border-black rounded-lg`}
        >
          <div className="flex justify-center w-full">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              className="!text-sm !flex !justify-center"
              classes={{ indicator: "custom-tab-indicator" }} // Add this line to apply custom styling
            >
              {["All Bets", "My Bets", "Top"]?.map((i, index) => (
                <Tab
                  label={i}
                  {...a11yProps(index)}
                  className="!text-sm !text-white"
                />
              ))}
            </Tabs>
          </div>
          {(value === 0 && <AllBets formik={formik} fk={fk} />) ||
            (value === 1 && <MyBets />) ||
            (value === 2 && <Top />)}
        </div>
      </div>

      {anchorEl && (
        <AccountMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
      )}
    </div>
  );
};

export default PlayGame;

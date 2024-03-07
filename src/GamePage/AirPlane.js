import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import io from "socket.io-client";
import loderImage from "../assets/loderimage.png";
import air from "../assets/air.png";
import win from "../assets/win.png";
import {
  byTimeIsEnableMusic,
  byTimeIsEnableSound,
  waitingAviatorFun,
} from "../redux/slices/counterSlice";
import {
  animationUpTo_5_sec,
  animationabove_10_sec,
  animationupto_10_sec,
  demomobile,
  demomolap,
} from "./AnimationAirPlan";
import {
  ButtomDottedPoint,
  ButtomDottedPointMoveable,
  LeftDottedPoint,
  LeftDottedPointMoveable,
  RightDottedPoint,
  RightDottedPointMoveable,
  TopDottedPoint,
  TopDottedPointMoveable,
} from "./DottedPoint";
import SpentBetLeft from "./SpentBetLeft";
import SpentBetRight from "./SpentBetRight";
import { domain, endpoint } from "../services/urls";
import { CircularProgress } from "@mui/material";
import aviator_game_waiting from "../assets/images/aviator_game_waiting.avif";
const socket = io(domain);
const AirPlane = ({ formik, fk }) => {
  const dispatch = useDispatch();
  const backgroundImage_url = useSelector(
    (state) => state.aviator.backgroundImage_url
  );
  const waiting_aviator = useSelector((state) => state.aviator.waiting_aviator);
  const isMediumScreen = useMediaQuery({ minWidth: 800 });
  const [bottomLeftCoordinate, setBottomLeftCoordinates] = useState({
    x: 0,
    y: 0,
  });
  const [combineTime, setcombineTime] = useState("0_0");

  let milliseconds = combineTime?.split("_")?.[0].substring(0, 2);
  let seconds = Number(combineTime?.split("_")?.[1]);
  const client = useQueryClient();

  // useEffect(() => {
  //   socket.on("message", (newMessage) => {
  //     console.log(newMessage, "This is new message");
  //     startFly(newMessage);
  //   });

  //   return () => {
  //     socket.off("message");
  //   };
  // }, []);
  // useEffect(() => {
  //   socket.on("seconds", (seconds) => {
  //     setcombineTime(seconds);
  //   });
  //   socket.on("setcolorofdigit", (color_value) => {
  //     fk.setFieldValue("setcolorofdigit", color_value);
  //     console.log(color_value, "This is color Value");
  //   });
  //   socket.on("setloder", (setloder) => {
  //     fk.setFieldValue("setloder", setloder);
  //   });
  //   socket.on("isFlying", (isFlying) => {
  //     fk.setFieldValue("isFlying", isFlying);
  //   });
  //   return () => {
  //     socket.off("seconds");
  //     socket.off("setcolorofdigit");
  //     socket.off("setloder");
  //     socket.off("isFlying");
  //   };
  // }, []);

  useEffect(() => {
    const handleNewMessage = (newMessage) => {
      console.log(newMessage, "This is new message");
      startFly(newMessage);
    };
  
    socket.on("message", handleNewMessage);
  
    return () => {
      socket.off("message", handleNewMessage);
    };
  }, []);  // Include startFly as a dependency if it's defined outside the useEffect.
  
  useEffect(() => {
    const handleSeconds = (seconds) => {
      setcombineTime(seconds);
    };
  
    const handleSetColorOfDigit = (color_value) => {
      fk.setFieldValue("setcolorofdigit", color_value);
      console.log(color_value, "This is color Value");
    };
  
    const handleSetLoader = (setloder) => {
      fk.setFieldValue("setloder", setloder);
    };
  
    const handleIsFlying = (isFlying) => {
      fk.setFieldValue("isFlying", isFlying);
    };
  
    socket.on("seconds", handleSeconds);
    socket.on("setcolorofdigit", handleSetColorOfDigit);
    socket.on("setloder", handleSetLoader);
    socket.on("isFlying", handleIsFlying);
  
    return () => {
      socket.off("seconds", handleSeconds);
      socket.off("setcolorofdigit", handleSetColorOfDigit);
      socket.off("setloder", handleSetLoader);
      socket.off("isFlying", handleIsFlying);
    };
  }, []);
  

  function hii(randomFlyingTime) {
    const mainDiv = document.getElementsByClassName("maindiv")[0];
    const style = document.createElement("style");
    console.log(isMediumScreen, "Hii");
    style.innerHTML = !isMediumScreen ? demomobile : demomolap;
    document.head.appendChild(style);
    if (randomFlyingTime <= 5) {
      animationUpTo_5_sec(mainDiv, randomFlyingTime, dispatch, fk);
      setTimeout(() => {
        dispatch(byTimeIsEnableSound(true));
        fk.setFieldValue("isShadowPath", false);
      }, (randomFlyingTime - 0.3) * 1000);
    } else if (randomFlyingTime > 5 && randomFlyingTime < 10) {
      animationupto_10_sec(mainDiv, randomFlyingTime, dispatch, fk);
      setTimeout(() => {
        dispatch(byTimeIsEnableSound(true));
        fk.setFieldValue("isShadowPath", false);
      }, (randomFlyingTime - 0.3) * 1000);
    } else {
      animationabove_10_sec(mainDiv, randomFlyingTime, dispatch, fk);
      setTimeout(() => {
        dispatch(byTimeIsEnableSound(true));
        fk.setFieldValue("isShadowPath", false);
      }, (5 + ((randomFlyingTime - 5) / 5 - 0.3) * 5) * 1000);
    }
  }

  function startFly(randomFlyingTime) {
    dispatch(byTimeIsEnableMusic(true));
    // fk.setFieldValue("setloder", false);
    // fk.setFieldValue("isFlying", true);
    fk.setFieldValue("closeButtomDot", true);
    fk.setFieldValue("isEnablingWinner", true);
    const mainDiv = document.getElementsByClassName("maindiv")[0];
    hii(randomFlyingTime);

    // Log the coordinates to the console

    const timerInterval = setInterval(() => {
      const airplainimage = document.getElementsByClassName("maindiv")[0];
      const parentDiv = document.getElementsByClassName("parentdiv")[0]; // Assuming "maindiv" is the parent element
      const airplainRect = airplainimage.getBoundingClientRect();
      const parentRect = parentDiv.getBoundingClientRect();
      const newBottomLeftCoordinates = {
        x: airplainRect.x - parentRect.x,
        y: airplainRect.y - parentRect.y,
      };
      setBottomLeftCoordinates(newBottomLeftCoordinates);
    }, 10);

    setTimeout(() => {
      fk.setFieldValue("isEnablingWinner", false);
    }, randomFlyingTime * 1000 - 2000);
    // Clear interval after randomFlyingTime seconds
    setTimeout(() => {
      // fk.setFieldValue("setcolorofdigit", true);
      fk.setFieldValue("isShadowPath", false);
      // fk.setFieldValue("isStart1", false);
      // fk.setFieldValue("isStart2", false);
      // fk.setFieldValue("isFlying", false);
      fk.setFieldValue("waitingForNextTime1", false);
      fk.setFieldValue("waitingForNextTime2", false);
      setResultFuncton();
      formik.setFieldValue("refetch", Number(formik.values.refetch) + 1);
      mainDiv.style.animation = "";
      clearInterval(timerInterval);
    }, (randomFlyingTime - 0.5) * 1000);

    setTimeout(() => {
      dispatch(byTimeIsEnableMusic(false));
    }, randomFlyingTime * 1000 + 3000);
    setTimeout(() => {
      dispatch(byTimeIsEnableSound(false));
    }, randomFlyingTime * 1000 + 6000);

    setTimeout(() => {
      fk.setFieldValue("isShadowPath", true);
    }, 800);

    return () => clearInterval(timerInterval);
  }

  const setResultFuncton = async () => {
    try {
      const response = await axios.get(`${endpoint.aviator_result}`);
      client.refetchQueries("allresult");
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
  };

  setTimeout(() => {
    fk.setFieldValue("closeButtomDot", false);
  }, 10000);
  
  useEffect(() => {
    console.log(fk.values.isFlying, "isflying");
    if (!fk.values.isFlying && waiting_aviator) {
      console.log("function hit if");
    } else if (fk.values.setcolorofdigit) {
      dispatch(waitingAviatorFun(false));
      console.log("function hit else");
    }
  }, [fk.values.isFlying, fk.values.setcolorofdigit]);

  return (
    <>
      <div
        className={`${
          !waiting_aviator && "py-8"
        } moved   parentdiv relative lg:h-[320px] h-[200px] w-[99.8%] overflow-hidden  rounded-lg mt-1 border-[1px] border-white border-opacity-20`}
      >
        {waiting_aviator ? (
          <div className="!h-full w-full relative flex justify-center items-center">
            <img
              className="!h-[100%] absolute w-full object-fill"
              src={aviator_game_waiting}
            />
            <CircularProgress size={"200px"} className="!z-20 !absolute " />
            <p className="absolute !text-4xl flex flex-col items-center !text-[#EDD188] font-bold waiting_for_next_round">
              <span>Waiting</span>
              <span>For Next</span>
              <span>Round</span>
            </p>
          </div>
        ) : (
          <>
            <img
              src={backgroundImage_url}
              className={`${
                backgroundImage_url ===
                "https://res.cloudinary.com/do7kimovl/image/upload/v1709114502/circle_dafpdo.svg"
                  ? "absolute  -bottom-[250%] left-0 rotate_background_image !z-0 bg-gradient-to-l from-[#541850] to-[#341a55] bg-opacity-5 w-[600%] h-[600%]"
                  : "bgimagedynamic !z-0 absolute  top-0 left-0 h-full w-[99.8%]"
              }  object-cover `}
            />
            {fk.values.isShadowPath &&
              (isMediumScreen ? (
                <svg
                  width="100%"
                  height="150%"
                  xmlns="http://www.w3.org/2000/svg"
                  className="z-10 absolute"
                >
                  {bottomLeftCoordinate.x < 190 ? (
                    <line
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="0"
                      stroke="rgba(112,9,25, 0.6)"
                      strokeWidth="2"
                      // x1="10"
                      // y1="262"
                      // x2={`${bottomLeftCoordinate.x-10}`}
                      // y2="262"
                      // stroke="rgba(112,9,25, 0.6)"
                      // strokeWidth="2"
                    />
                  ) : (
                    <>
                      <path
                        d={`
          M-200 262 
          C199 262, 200 300, ${bottomLeftCoordinate.x + 10} ${
                          bottomLeftCoordinate.y + 28
                        }
          L${bottomLeftCoordinate.x + 10} 400 
          L-40 400 
          Z
        `}
                        fill="rgba(112,9,25, 0.6)"
                        // stroke="#BC0319"
                        stroke-width="3"
                        stroke-dasharray="1000 0"
                      />
                    </>
                  )}
                </svg>
              ) : (
                <svg
                  width="100%"
                  height="150%"
                  xmlns="http://www.w3.org/2000/svg"
                  className="z-10 absolute"
                >
                  {bottomLeftCoordinate.x < 100 ? (
                    <line
                      x1="10"
                      y1="145"
                      x2={`${bottomLeftCoordinate.x + 5}`}
                      y2="145"
                      stroke="rgba(112,9,25, 0.6)"
                      strokeWidth="2"
                    />
                  ) : (
                    <>
                      <path
                        d={`
          M-10 185 
          C50 100, 50 ${
            bottomLeftCoordinate.x < 150 ? bottomLeftCoordinate.x + 40 : 190
          }, ${bottomLeftCoordinate.x + 5} ${bottomLeftCoordinate.y}
          L${bottomLeftCoordinate.x} 200 
          L-40 200 
          Z
        `}
                        fill="rgba(112,9,25, 0.6)"
                        // stroke="#BC0319"
                        stroke-width="3"
                        stroke-dasharray="1000 0"
                      />
                    </>
                  )}
                </svg>
              ))}
            <div className="maindiv absolute bottom-[20px] left-[20px]  animate-slidein infinite ">
              {fk.values.isEnablingWinner && (
                <p className="winslider z-20 rounded-full px-4 py-1">
                  {[...Array(3)].map((_, index) => (
                    <img key={index} src={win} className="w-10 h-10 absolute" />
                  ))}
                </p>
              )}

              <div className="relative lg:w-[120px] w-[60px] lg:h-[60px]">
                <img
                  src={air}
                  className="airplain lg:w-[120px] w-[60px] lg:h-[60px]  h-[30px] text-[#BC0319] "
                />
              </div>
            </div>
            {/* fk.values.isFlying */}
            {fk.values.isFlying && (
              <>
                {/* !fk.values.closeButtomDot */}
                {!fk.values.closeButtomDot ? (
                  <>
                    <LeftDottedPointMoveable />
                    <ButtomDottedPointMoveable />
                    <TopDottedPointMoveable />
                    <RightDottedPointMoveable />
                  </>
                ) : (
                  <>
                    <LeftDottedPoint />
                    <ButtomDottedPoint />
                    <TopDottedPoint />
                    <RightDottedPoint />
                  </>
                )}
              </>
            )}
            <div className="absolute w-[100%] bottom-0 left-0"></div>
            {/* fk.values.setloder */}
            {fk.values.setloder ? (
              <div
                className={`
        absolute text-6xl lg:text-7xl   left-[30%] top-[15%] lg:left-[37%] lg:top-[10%] font-bold  text-white
        flex flex-col
        `}
              >
                <div className="flex justify-center flex-col items-center gap-3">
                  <img
                    src={
                      loderImage ||
                      "https://res.cloudinary.com/do7kimovl/image/upload/v1708426809/loderimage_pc4eyd.png"
                    }
                    className="lg:w-[46%] lg:h-[46%] w-[48%] h-[48%] rotate-animation"
                  />
                  {/* <img src="https://res.cloudinary.com/do7kimovl/image/upload/v1708426809/loderimage_pc4eyd.png" className="w-[46%] h-[46%] rotate-animation" /> */}
                  <p className="lg:text-lg text-xs font-thin">
                    WAITING FOR NEXT ROUND
                  </p>
                  <div className="h-[5px] w-[155px] rounded-r-full rounded-l-full relative  bg-[#BC0319] ">
                    <div className="loder-waiting-for-next-round !rounded-full"></div>
                  </div>
                </div>
              </div>
            ) : (
              <p
                className={`
        absolute text-6xl lg:text-7xl   left-[35%] top-[25%] lg:left-[37%] lg:top-[30%] font-bold  text-white
        ${fk.values.setcolorofdigit && "!text-[#BC0319]"}
        flex flex-col
        `}
              >
                {fk.values.setcolorofdigit && (
                  <span className="!text-2xl text-white text-center">
                    FLEW AWAY!
                  </span>
                )}
                <span>{`${seconds + 1}.${milliseconds}x `}</span>
              </p>
            )}
          </>
        )}
        {/* <p className="absolute lg:text-8xl text-4xl left-[37%] top-[40%] font-bold text-purple-500">{`${seconds}.${milliseconds} x `}</p> */}
      </div>
      <div className="flex w-[100%] lg:gap-3 gap-0 flex-col lg:flex-row lg:mt-0 md:mt-[20%] sm:mt-[20%]">
        <SpentBetLeft
          milliseconds={milliseconds}
          seconds={seconds + 1}
          fk={fk}
          startFly={startFly}
          formik={formik}
        />
        <SpentBetRight
          milliseconds={milliseconds}
          seconds={seconds + 1}
          fk={fk}
          startFly={startFly}
        />
      </div>
    </>
  );
};

export default AirPlane;

import { Box, Button, Stack, Typography } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
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
import ApplyBetDialogBox from "../ApplyBetDialogBox";
import Chart from "./Chart";
import GameHistory from "./GameHistory";
import MyHistory from "./MyHistory";
import OneMinCountDown from "./OneMinCountDown";
import ThreeMinCountDown from "./ThreeMinCountDown";
import TwoMinCountDown from "./TwoMinCountDown";

function WinOneMin({ gid }) {
  const [TabTwo, setTabTwo] = useState(1);
  const [apply_bit_dialog_box, setapply_bit_dialog_box] = React.useState(false);
  const [dialog_type, setdialog_type] = React.useState("");

  return (
    <Box className="mainBox">
      {gid === "1" ? (
        <OneMinCountDown />
      ) : gid === "2" ? (
        <TwoMinCountDown />
      ) : (
        <ThreeMinCountDown />
      )}
      <Box
        sx={{ py: 2, px: 2 }}
        className={
          "!bg-white !bg-opacity-5 !my-2 !rounded-lg !flex !flex-col !gap-2"
        }
      >
        <div className="!grid !grid-cols-3 w-full gap-2">
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
        </div>
        {/* pridictcolor */}
        <Box className="!grid grid-cols-5 gap-2 ">
          {[
            { no: 0, img: pr0 },
            { no: 1, img: pr11 },
            { no: 2, img: pr22 },
            { no: 3, img: pr33 },
            { no: 4, img: pr4 },
          ]?.map((i) => {
            return (
              <img
                className="!cursor-pointer"
                src={i?.img}
                onClick={() => {
                  setapply_bit_dialog_box(true);
                  setdialog_type(i.no);
                }}
                alt="button"
              />
            );
          })}
        </Box>
        <Box className="!grid grid-cols-5 gap-2 ">
          {[
            { no: 5, img: pr5 },
            { no: 6, img: pr6 },
            { no: 7, img: pr7 },
            { no: 8, img: pr8 },
            { no: 9, img: pr9 },
          ]?.map((i) => {
            return (
              <img
                className="!cursor-pointer"
                src={i?.img}
                onClick={() => {
                  setapply_bit_dialog_box(true);
                  setdialog_type(i.no);
                }}
                alt="button"
              />
            );
          })}
        </Box>
        <div className="!w-full !grid grid-cols-2 gap-2 !mt-2">
          <Button
            className="!bg-[#5E8CCA] !text-white"
            onClick={() => {
              setapply_bit_dialog_box(true);
              setdialog_type("small");
            }}
          >
            small
          </Button>
          <Button
            className="!bg-[#DFBC6F] !text-white"
            onClick={() => {
              setapply_bit_dialog_box(true);
              setdialog_type("big");
            }}
          >
            Big
          </Button>

          {/* small */}

          {/* small close */}
        </div>
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

        {TabTwo === 1 && <GameHistory gid={gid} />}
        {TabTwo === 2 && <Chart gid={gid} />}
        {TabTwo === 3 && <MyHistory gid={gid} />}
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

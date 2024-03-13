import { Box, Typography } from "@mui/material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { zubgback, zubgbackgrad, zubgmid } from "../../../Shared/color";
import SUPER from "../../../assets/images/SUPER.png";
import go from "../../../assets/images/go.png";
import jackbot from "../../../assets/images/jackbot-Photoroom.png";
import royal from "../../../assets/images/royal.png";
import epicWin from "../../../assets/images/win1/epicWin.jpg";
import GameChanger from "../../../assets/images/win1/gamechanger.png";
import jackpot from "../../../assets/images/win1/jackpot.jpg";
import kind from "../../../assets/images/win1/kind.jpg";
import megawin from "../../../assets/images/win1/megawin.jpg";

const Lottery = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box sx={style.root}>
        <Box sx={style.roottwo} component={NavLink} to={"/win"}>
          <Box sx={{ width: "70%", height: "100%" }}>
            <Box sx={style.titleBox}>
              <Box>
                <Typography variant="body1" color="initial" sx={style.title}>
                  Win Go
                </Typography>
                <Typography variant="body1" color="initial" sx={style.textone}>
                  Guess Number Green/Red/Voilet to win
                </Typography>
              </Box>
              <Box>
                <Box component="img" width={50} src={go}></Box>
              </Box>
            </Box>
            <Box sx={style.btmbox}>
              <Box component="img" sx={style.imgone} src={SUPER}></Box>
            </Box>
          </Box>
          <Box sx={{ width: "30%", height: "100%" }}>
            <Box component="img" sx={style.imgtwo} src={epicWin}></Box>
          </Box>
        </Box>
        <Box sx={style.roottwo} component={NavLink}>
          <Box sx={{ width: "70%", height: "100%" }}>
            <Box sx={style.titleBox}>
              <Box>
                <Typography variant="body1" color="initial" sx={style.title}>
                  K3 Lottery
                </Typography>
                <Typography variant="body1" color="initial" sx={style.textone}>
                  Guess Number Big /Small / Odd/ Even
                </Typography>
              </Box>
              <Box>
                <Box component="img" width={50} src={go}></Box>
              </Box>
            </Box>
            <Box sx={style.btmbox}>
              <Box component="img" sx={style.imgone} src={jackbot}></Box>
            </Box>
          </Box>
          <Box sx={{ width: "30%", height: "100%" }}>
            <Box component="img" sx={style.imgtwo} src={jackpot}></Box>
          </Box>
        </Box>
        <Box sx={style.roottwo} component={NavLink}>
          <Box sx={{ width: "70%", height: "100%" }}>
            <Box sx={style.titleBox}>
              <Box>
                <Typography variant="body1" color="initial" sx={style.title}>
                  5D Lottery
                </Typography>
                <Typography variant="body1" color="initial" sx={style.textone}>
                  Guess Number Big/Small/Odd/Even
                </Typography>
              </Box>
              <Box>
                <Box component="img" width={50} src={go}></Box>
              </Box>
            </Box>
            <Box sx={style.btmbox}>
              <Box component="img" sx={style.imgone} src={GameChanger}></Box>
            </Box>
          </Box>
          <Box sx={{ width: "30%", height: "100%" }}>
            <Box component="img" sx={style.imgtwo} src={megawin}></Box>
          </Box>
        </Box>
        <Box sx={style.roottwo} component={NavLink} to={"/trx"}>
          <Box sx={{ width: "70%", height: "100%" }}>
            <Box sx={style.titleBox}>
              <Box>
                <Typography variant="body1" color="initial" sx={style.title}>
                  Trx Win
                </Typography>
                <Typography variant="body1" color="initial" sx={style.textone}>
                  Guess Number Green/Red/Purple to win
                </Typography>
              </Box>
              <Box>
                <Box component="img" width={50} src={go}></Box>
              </Box>
            </Box>
            <Box sx={style.btmbox}>
              <Box component="img" sx={style.imgone} src={royal}></Box>
            </Box>
          </Box>
          <Box sx={{ width: "30%", height: "100%" }}>
            <Box component="img" sx={style.imgtwo} src={kind}></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Lottery;

const style = {
  root: {
    width: "95%",
    marginLeft: "2.5%",
    background: zubgmid,
    marginTop: "20px",
    padding: "10px",
    borderRadius: "10px",
  },
  roottwo: {
    mb: "10px",
    width: "100%",
    height: "14vh",
    background: zubgback,
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleBox: {
    width: "100%",
    padding: "10px 0px 0px 10px",
    borderBottom: `2px solid ${zubgmid}`,
    height: "55%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    lineHeight: "1.5",
    textAlign: "start",
    color: "white",
    fontSize: "25px",
    fontWeight: "800",
    background: zubgbackgrad,
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  imgtwo: { width: "100%", height: "100%", borderRadius: "0px 10px 10px 0px" },
  imgone: { width: "100%", height: "100%", borderRadius: "0px 0px 0px 10px" },
  textone: { color: "white", fontSize: "9px" },
  texttow: { color: "white", fontSize: "10px", mr: "5px" },
  btmbox: {
    width: "100%",
    height: "45%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
  },
};

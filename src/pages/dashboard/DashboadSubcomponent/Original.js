import { Box, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { zubgback, zubgbackgrad, zubgmid } from "../../../Shared/color";
import go from "../../../assets/images/go.png";
import kind from "../../../assets/images/win1/aviater.jpg";

const Original = () => {
  return (
    <Box>
      <Box sx={style.root}>
        <Box sx={style.roottwo} component={NavLink} to={"/playgame"}>
          <Box sx={{ width: "70%", height: "100%" }}>
            <Box sx={style.titleBox} className={"!px-[5%]"}>
             <Typography variant="body1" color="initial" sx={style.title} className="!text-4xl">
                  Aviator
                </Typography>
              <Box>
                <Box component="img" width={50} src={go}></Box>
              </Box>
            </Box>
            {/* <Box sx={style.btmbox}>
              <Box component="img" sx={style.imgone} src={vibrant}></Box>
            </Box> */}
          </Box>
          <Box sx={{ width: "30%", height: "100%" }}>
            <Box component="img" sx={style.imgtwo} src={kind}></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Original;

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
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    lineHeight: "1.5",
    textAlign: "start",
    color: "white",
    
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

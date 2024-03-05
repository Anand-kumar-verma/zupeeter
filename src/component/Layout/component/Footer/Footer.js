import { Box, Container, Stack, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import RowingIcon from "@mui/icons-material/Rowing";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WalletIcon from "@mui/icons-material/Wallet";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "0px",
        width: "100%",
        backgroundColor: "transparent",
      }}
    >
      <Box sx={style.root}>
        <Stack direction="row" sx={style.stack}>
           <Box  sx={style.nav} onClick={() => navigate("/dashboard")}>
            <HomeIcon sx={style.icon} className="!cursor-pointer" />
            <Typography variant="body1" sx={style.text}>
              Home
            </Typography>
          </Box>
           <Box sx={style.nav} onClick={() => navigate("/activity")}>
            <RowingIcon sx={style.icon} className="!cursor-pointer" />
            <Typography variant="body1" sx={style.text}>
              Activity
            </Typography>
          </Box>
           <Box sx={style.nav} onClick={() => navigate("/promotion")}>
            <EmojiEventsIcon sx={style.icon} className="!cursor-pointer" />
            <Typography variant="body1" sx={style.text}>
              Promotion
            </Typography>
          </Box>
          <Box onClick={() => navigate("/wallet")} sx={style.nav}>
            <WalletIcon sx={style.icon} className="!cursor-pointer" />
            <Typography variant="body1" sx={style.text}>
              Wallet
            </Typography>
          </Box>
          <Box sx={style.nav} onClick={() => navigate("/account")}>
            <ManageAccountsIcon sx={style.icon} className="!cursor-pointer" />
            <Typography variant="body1" sx={style.text}>
              Account
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default Footer;

const style = {
  root: {
    background: "#3A3A3A",
    borderRadius: "10px 10px 0px 0px",
    padding: "10px 20px",
    width: "575px",
    margin: "auto",
  },
  icon: { fontSize: "25px", "&>path": { color: "white !important" } },
  text: { fontSize: "13px", fontWeight: 400, color: "white !important" },
  stack: { alignItems: "center", justifyContent: "space-between" },
  nav: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

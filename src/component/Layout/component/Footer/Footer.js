import { Box, Container, Stack, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import RowingIcon from "@mui/icons-material/Rowing";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WalletIcon from "@mui/icons-material/Wallet";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import home from '../../../../assets/images/home.png'
import puzzle from '../../../../assets/images/puzzle-pieces.png'
import wallet from '../../../../assets/images/wallet.png'
import user from '../../../../assets/images/user-profile.png'
import promotion from '../../../../assets/images/marketing (1).png'
import { useNavigate } from "react-router-dom";
import { zubgmid } from "../../../../Shared/color";

function Footer() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "0px",
        width: "100%",
        backgroundColor: 'transparent',
      }}
    >
      <Box sx={style.root}>
        <Stack direction="row" sx={style.stack}>
          <Box sx={style.nav} onClick={() => navigate("/dashboard")}>
            <Box component='img' src={home} width={40}></Box>
            <Typography variant="body1" sx={style.text}>
              Home
            </Typography>
          </Box>
          <Box sx={style.nav} onClick={() => navigate("/activity")}>
            <Box component='img' src={puzzle} width={40}></Box>
            <Typography variant="body1" sx={style.text}>
              Activity
            </Typography>
          </Box>
          <Box sx={style.nav} onClick={() => navigate("/promotion")}>
            <Box component='img' src={promotion} width={40}></Box>
            <Typography variant="body1" sx={style.text}>
              Promotion
            </Typography>
          </Box>
          <Box onClick={() => navigate("/wallet")} sx={style.nav}>
            <Box component='img' src={wallet} width={40}></Box>
            <Typography variant="body1" sx={style.text}>
              Wallet
            </Typography>
          </Box>
          <Box sx={style.nav} onClick={() => navigate("/account")}>
            <Box component='img' src={user} width={40}></Box>
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
    background: zubgmid,
    borderRadius: "10px 10px 0px 0px",
    padding: "10px 20px",
    maxWidth: "575px",
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

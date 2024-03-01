import { Box, Container, Stack, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import RowingIcon from '@mui/icons-material/Rowing';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WalletIcon from '@mui/icons-material/Wallet';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


function Footer() {
  return (
    <Box sx={{
      position: 'fixed',
      bottom: '0px',
      width: '100%',
      backgroundColor: 'transparent',
    }}>
      <Box sx={style.root}>
        <Stack direction='row' sx={style.stack}>
          <Box sx={style.nav}>
            <HomeIcon sx={style.icon} />
            <Typography variant="body1" sx={style.text}>
              Home
            </Typography>
          </Box>
          <Box sx={style.nav}>
            <RowingIcon sx={style.icon} />
            <Typography variant="body1" sx={style.text}>
              Activity
            </Typography>
          </Box>
          <Box sx={style.nav}>
            <EmojiEventsIcon sx={style.icon} />
            <Typography variant="body1" sx={style.text}>
              Win
            </Typography>
          </Box>
          <Box sx={style.nav}>
            <WalletIcon sx={style.icon} />
            <Typography variant="body1" sx={style.text}>
              Wallet
            </Typography>
          </Box>
          <Box sx={style.nav}>
            <ManageAccountsIcon sx={style.icon} />
            <Typography variant="body1" sx={style.text}>
              Account
            </Typography>
          </Box>
        </Stack>
      </Box>

    </Box >
  );
}

export default Footer;

const style = {
  root: { background: '#3A3A3A', borderRadius: '10px 10px 0px 0px', padding: '10px 20px', width: '575px', margin: 'auto' },
  icon: { fontSize: '25px', '&>path': { color: 'white !important' } },
  text: { fontSize: '13px', fontWeight: 400, color: 'white !important' },
  stack: { alignItems: 'center', justifyContent: 'space-between', },
  nav: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' },
};



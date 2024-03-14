import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { Box, Button, Container, FormControl, Stack, Tab, Tabs, TextField, Typography } from '@mui/material';
import * as React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { zubgback, zubgbackgrad, zubgmid } from '../../../Shared/color';
import Layout from '../../../component/Layout/Layout';
import { rupees } from '../../../services/urls';


function Gamestaticks() {


  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };


  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <Container sx={style.container}>
        <Box sx={style.header}>
          <Box component={NavLink} onClick={() => goBack()}>
            <KeyboardArrowLeftOutlinedIcon />
          </Box>
          <Typography variant="body1" color="initial">Game statistics</Typography>
          <Typography variant="body1" color="initial"> </Typography>
        </Box>
        <Box sx={{ width: '95%', marginLeft: '2.5%', background: zubgmid, borderRadius: '10px', padding: '10px', mt: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Tabs value={value} onChange={handleChange} >
            <Tab value="1" label="Today" sx={{ background: value == 1 && zubgbackgrad, color: 'white !important', borderRadius: '5px' }} />
            <Tab value="2" label="Yesterday" sx={{ background: value == 2 && zubgbackgrad, color: 'white !important', borderRadius: '5px' }} />
            <Tab value="3" label="This week" sx={{ background: value == 3 && zubgbackgrad, color: 'white !important', borderRadius: '5px' }} />
            <Tab value="4" label="This month" sx={{ background: value == 4 && zubgbackgrad, color: 'white !important', borderRadius: '5px' }} />
          </Tabs>
        </Box>
        {value == 1 &&
          <Box>
            <Box sx={{ width: '95%', marginLeft: '2.5%', background: zubgmid, borderRadius: '10px', padding: '10px', mt: '10px', padding: '40px' }}>
              <Typography variant="body1" color="initial" sx={{ textAlign: 'center', color: 'white', fontSize: '26px', fontWeight: '600' }}>{rupees}9658.00</Typography>
            </Box>
            <Box sx={{ width: '95%', marginLeft: '2.5%', background: zubgmid, borderRadius: '10px', padding: '10px', mt: '10px', padding: '10px', }}>
              <Typography variant="body1" color="initial" sx={{
                color: 'white',
                fontSize: '25px',
                fontWeight: '800',
                background: zubgbackgrad,
                '-webkit-background-clip': 'text',
                '-webkit-text-fill-color': 'transparent',
              }}>TRX</Typography>
              <Stack direction='row' sx={{
                alignItems: 'center', justifyContent: 'space-between',
                '&>p': { color: 'white', fontWeight: '500', fontSize: '13px', mt: '10px' },
              }} >
                <Typography variant="body1" color="initial">Total bet</Typography>
                <Typography variant="body1" color="initial">₹904.00</Typography>
              </Stack>
              <Stack direction='row' sx={{
                alignItems: 'center', justifyContent: 'space-between',
                '&>p': { color: 'white', fontWeight: '500', fontSize: '13px', mt: '10px' },
              }} >
                <Typography variant="body1" color="initial">Number of bets</Typography>
                <Typography variant="body1" color="initial">28</Typography>
              </Stack>
              <Stack direction='row' sx={{
                alignItems: 'center', justifyContent: 'space-between',
                '&>p': { color: 'white', fontWeight: '500', fontSize: '13px', mt: '10px' },
              }} >
                <Typography variant="body1" color="initial">Winning amount</Typography>
                <Typography variant="body1" color="initial">₹1,021.70</Typography>
              </Stack>
            </Box>
          </Box>
        }
        {value == 2 &&
          <Box>
            <Box sx={{ width: '95%', marginLeft: '2.5%', background: zubgmid, borderRadius: '10px', padding: '10px', mt: '10px', padding: '40px' }}>
              <Typography variant="body1" color="initial" sx={{ textAlign: 'center', color: 'white', fontSize: '26px', fontWeight: '600' }}>{rupees}589.02</Typography>
            </Box>
            <Box sx={{ width: '95%', marginLeft: '2.5%', background: zubgmid, borderRadius: '10px', padding: '10px', mt: '10px', padding: '10px', }}>
              <Typography variant="body1" color="initial" sx={{
                color: 'white',
                fontSize: '25px',
                fontWeight: '800',
                background: zubgbackgrad,
                '-webkit-background-clip': 'text',
                '-webkit-text-fill-color': 'transparent',
              }}>WinGo</Typography>
              <Stack direction='row' sx={{
                alignItems: 'center', justifyContent: 'space-between',
                '&>p': { color: 'white', fontWeight: '500', fontSize: '13px', mt: '10px' },
              }} >
                <Typography variant="body1" color="initial">Total bet</Typography>
                <Typography variant="body1" color="initial">₹904.00</Typography>
              </Stack>
              <Stack direction='row' sx={{
                alignItems: 'center', justifyContent: 'space-between',
                '&>p': { color: 'white', fontWeight: '500', fontSize: '13px', mt: '10px' },
              }} >
                <Typography variant="body1" color="initial">Number of bets</Typography>
                <Typography variant="body1" color="initial">28</Typography>
              </Stack>
              <Stack direction='row' sx={{
                alignItems: 'center', justifyContent: 'space-between',
                '&>p': { color: 'white', fontWeight: '500', fontSize: '13px', mt: '10px' },
              }} >
                <Typography variant="body1" color="initial">Winning amount</Typography>
                <Typography variant="body1" color="initial">₹1,021.70</Typography>
              </Stack>
            </Box>
          </Box>
        }
        {value == 3 &&
          <Box>
            <Box sx={{ width: '95%', marginLeft: '2.5%', background: zubgmid, borderRadius: '10px', padding: '10px', mt: '10px', padding: '40px' }}>
              <Typography variant="body1" color="initial" sx={{ textAlign: 'center', color: 'white', fontSize: '26px', fontWeight: '600' }}>{rupees}0.00</Typography>
            </Box>
            <Box sx={{ width: '95%', marginLeft: '2.5%', background: zubgmid, borderRadius: '10px', padding: '10px', mt: '10px', padding: '10px', }}>
              <Typography variant="body1" color="initial" sx={{
                color: 'white',
                fontSize: '25px',
                fontWeight: '800',
                background: zubgbackgrad,
                '-webkit-background-clip': 'text',
                '-webkit-text-fill-color': 'transparent',
              }}>TRX</Typography>
              <Stack direction='row' sx={{
                alignItems: 'center', justifyContent: 'space-between',
                '&>p': { color: 'white', fontWeight: '500', fontSize: '13px', mt: '10px' },
              }} >
                <Typography variant="body1" color="initial">Total bet</Typography>
                <Typography variant="body1" color="initial">₹904.00</Typography>
              </Stack>
              <Stack direction='row' sx={{
                alignItems: 'center', justifyContent: 'space-between',
                '&>p': { color: 'white', fontWeight: '500', fontSize: '13px', mt: '10px' },
              }} >
                <Typography variant="body1" color="initial">Number of bets</Typography>
                <Typography variant="body1" color="initial">28</Typography>
              </Stack>
              <Stack direction='row' sx={{
                alignItems: 'center', justifyContent: 'space-between',
                '&>p': { color: 'white', fontWeight: '500', fontSize: '13px', mt: '10px' },
              }} >
                <Typography variant="body1" color="initial">Winning amount</Typography>
                <Typography variant="body1" color="initial">₹1,021.70</Typography>
              </Stack>
            </Box>
          </Box>
        }
        {value == 4 &&
          <Box>
            <Box sx={{ width: '95%', marginLeft: '2.5%', background: zubgmid, borderRadius: '10px', padding: '10px', mt: '10px', padding: '40px' }}>
              <Typography variant="body1" color="initial" sx={{ textAlign: 'center', color: 'white', fontSize: '26px', fontWeight: '600' }}>{rupees}0.00</Typography>
            </Box>
            <Box sx={{ width: '95%', marginLeft: '2.5%', background: zubgmid, borderRadius: '10px', padding: '10px', mt: '10px', padding: '10px', }}>
              <Typography variant="body1" color="initial" sx={{
                color: 'white',
                fontSize: '25px',
                fontWeight: '800',
                background: zubgbackgrad,
                '-webkit-background-clip': 'text',
                '-webkit-text-fill-color': 'transparent',
              }}>TRX</Typography>
              <Stack direction='row' sx={{
                alignItems: 'center', justifyContent: 'space-between',
                '&>p': { color: 'white', fontWeight: '500', fontSize: '13px', mt: '10px' },
              }} >
                <Typography variant="body1" color="initial">Total bet</Typography>
                <Typography variant="body1" color="initial">₹904.00</Typography>
              </Stack>
              <Stack direction='row' sx={{
                alignItems: 'center', justifyContent: 'space-between',
                '&>p': { color: 'white', fontWeight: '500', fontSize: '13px', mt: '10px' },
              }} >
                <Typography variant="body1" color="initial">Number of bets</Typography>
                <Typography variant="body1" color="initial">28</Typography>
              </Stack>
              <Stack direction='row' sx={{
                alignItems: 'center', justifyContent: 'space-between',
                '&>p': { color: 'white', fontWeight: '500', fontSize: '13px', mt: '10px' },
              }} >
                <Typography variant="body1" color="initial">Winning amount</Typography>
                <Typography variant="body1" color="initial">₹1,021.70</Typography>
              </Stack>
            </Box>
          </Box>
        }
      </Container>
    </Layout>
  );
};

export default Gamestaticks;


export const style = {
  container: { background: zubgback, width: '100%', height: '100vh', overflow: 'auto', },
  header: {
    padding: '8px', background: zubgmid, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    '&>p': { color: 'white !important', }, '&>a>svg': { color: 'white', fontSize: '25px', },
  },
  notificationBox: {
    width: '95%', marginLeft: '2.5%', borderRadius: '10px', background: zubgmid, padding: '10px', mt: '10px',
    '&>div>div>p': { color: 'white', fontSize: '14px', marginLeft: '10px', fontWeight: '500', },
    '&>p': { color: 'white', fontSize: '13px', marginLeft: '0px', fontWeight: '500', mt: '10px', },
    '&>div>div>svg': { color: 'white', fontSize: '24px', }, '&>div>svg': { color: 'white', fontSize: '24px', },
  },
  notificationStack: { alignItems: 'center', justifyContent: 'space-between', },
  paytmbtntwo: { borderRadius: '5px', textTransform: 'capitalize', mb: 2, background: zubgbackgrad, color: 'white !important', width: '100%', mt: '20px', border: "1px solid white", padding: '10px', '&:hover': { background: zubgbackgrad, border: "1px solid transparent", } },

};

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Container, Stack, Typography, Button } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Time from '../../assets/images/time.png';
import Layout from '../../component/Layout/Layout';
import logo from '../../assets/images/logo.png'
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LoopIcon from '@mui/icons-material/Loop';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

import TrxWin1Min from './Component/TrxWin1Min';
import TrxWin3Min from './Component/TrxWin3Min';
import TrxWin5Min from './Component/TrxWin5Min';



function Trx() {

  const [Tab, setTab] = useState(1);


  return (
    <Layout>
      <Box sx={styles.root}>
        <Container>
          <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <NavLink to='/dashboard/'>
              <ArrowBackIcon sx={{ color: 'white !important' }} />
            </NavLink>
            <Box component='img' src={logo} sx={{ width: '150px' }}></Box>
            <Stack direction='row' sx={{
              '&>svg:nth-child(1)': { mr: '10px', color: 'white !important' },
              '&>svg>path:nth-child(1)': { mr: 2, color: 'white !important' },
            }}>
              <ContactSupportIcon />
              <MusicNoteIcon />
            </Stack>
          </Box>
          <Box sx={{
            background: 'linear-gradient(153.24deg,#c4933f 5.33%,#fae59f 93.42%)', padding: '20px', borderRadius: '10px', mb: 1,
            '&>div:nth-child(1)>svg>path': { color: 'white !important', marginRight: '10px' },
            '&>div:nth-child(1)>p': { color: 'white !important', fontSize: '14px', marginLeft: '10px' },
            '&>div:nth-child(2)>h6': { color: 'white !important', fontSize: '25px', marginRight: '10px' },
            '&>div:nth-child(2)>svg>path': { color: 'white!important', fontSize: '25px', marginTop: '10px' },
          }}>
            <Stack direction='row' sx={{ alignItems: 'center', mb: 1 }}>
              <AccountBalanceWalletIcon />
              <Typography variant="body1" color="initial">Wallet balance</Typography>
            </Stack>
            <Stack direction='row' sx={{ alignItems: 'center', mb: 1 }}>
              <Typography variant="h6" color="initial">₹3,077.72</Typography>
              <LoopIcon />
            </Stack>
            <Stack direction='row' sx={{
              alignItems: 'center', justifyContent: 'space-between',
              '&>button': { textTransform: 'capitalize !important' },
              '&>button:nth-child(1)': { color: 'white !important' },
            }}>
              <Button variant='contained'>Deposit</Button>
              <Button variant='outlined'>Withdraw</Button>
            </Stack>
          </Box>
          <Stack direction='row' sx={{ background: '#303030 !important', borderRadius: '10px', padding: "5px" }}>
            <VolumeUpIcon sx={{ width: '10%', '&>path': { color: 'white !important' } }} />
            <Typography variant="body1" color="initial" sx={{ width: '90%', fontSize: '13px', color: 'white !important' }}>
              Please Remember The Upi Id Of Your Payment And Fill In The Correct Utr Number And Amount To Submit. When You Need To Continue Recharging,
            </Typography>
          </Stack>
          <Box sx={{ background: '#3A3A3A', mt: '10px' }}>
            <Stack direction='row' >
              <Box component={NavLink} onClick={() => setTab(1)} className={Tab === 1 ? 'activewinNav Winnav' : 'Winnav'}>
                <Box component='img' src={Time}></Box>
                <Typography variant="h3" color="initial">Win Go 1Min</Typography>
              </Box>
              <Box component={NavLink} onClick={() => setTab(2)} className={Tab === 2 ? 'activewinNav Winnav' : ' Winnav'}>
                <Box component='img' src={Time}></Box>
                <Typography variant="h3" color="initial">Win Go 3Min</Typography>
              </Box>
              <Box component={NavLink} onClick={() => setTab(3)} className={Tab === 3 ? 'activewinNav Winnav' : ' Winnav'}>
                <Box component='img' src={Time}></Box>
                <Typography variant="h3" color="initial">Win Go 5Min</Typography>
              </Box>
            </Stack>
          </Box>
          {
            Tab === 1 &&
            <TrxWin1Min />
          }
          {
            Tab === 2 &&
            <TrxWin3Min />
          }
          {
            Tab === 3 &&
            <TrxWin5Min />
          }
        </Container >
      </Box >
    </Layout >
  );
}

export default Trx;

const styles = {
  root: { background: '#202020', pb: 6, },

};











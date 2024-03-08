import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, CircularProgress, Container, Stack, Typography, } from '@mui/material';
import Slide from '@mui/material/Slide';
import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { NavLink, useNavigate } from 'react-router-dom';
import Icon1 from '../../assets/images/icon1.png';
import Icon2 from '../../assets/images/icon2.png';
import Time from '../../assets/images/time.png';
import Layout from '../../component/Layout/Layout';
import { endpoint } from '../../services/urls';
import WinOneMin from './component/WinOneMin/WinOneMin';


function Win() {
  const navigate = useNavigate()
  const login_data = localStorage.getItem("logindata");
  const user_id = JSON.parse(login_data).UserID;
  const [Tab, setTab] = useState(1);
  const { isLoading, data } = useQuery(["walletamount"], () => walletamount(), {
    refetchOnMount: false,
    refetchOnReconnect: true,
  });

  const walletamount = async () => {
    try {
      const response = await axios.get(
        `${endpoint.userwallet}?userid=${user_id}`
      );
      return response;
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
  };

if(isLoading) return  <Layout><CircularProgress/></Layout>
  return (
    <Layout>
      <Box sx={styles.root}>
        <Container>
          <Box sx={{ padding: 2, borderBottom: '1px solid white' }}>
            <ArrowBackIcon sx={{ color: 'white !important' }} onClick={()=>navigate('/dashboard')}/>
            <Stack direction="row" sx={styles.depositWithdrawContainer}>
              <Box component={NavLink}>
                <Box className="serv-item">
                  <Box component="img" src={Icon1} alt="Deposit" sx={styles.depositWithdrawIcon} />
                </Box>
                <Typography variant="body1" color="initial" className='db-header'>Deposit</Typography>
              </Box>
              <Box>
                <Typography variant="body1" color="initial" className='b-val'>₹ {Number(data?.data?.data?.wallet || 0)?.toFixed(2)}</Typography>
                <Typography variant="body1" color="initial" className='b-valp'>Available Balance</Typography>
              </Box>
              <Box component={NavLink}>
                <Box className="serv-item">
                  <Box component="img" src={Icon2} alt="Withdraw" sx={styles.depositWithdrawIcon} />
                </Box>
                <Typography variant="body1" color="initial" className='db-header'>Withdraw</Typography>
              </Box>
            </Stack>
          </Box>
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
            <WinOneMin  gid = "1"/>
          }
          {
            Tab === 2 &&<WinOneMin  gid = "2"/>
          }
          {
            Tab === 3 &&<WinOneMin  gid = "3"/>

          }
        </Container >
      </Box >
    </Layout >
  );
}

export default Win;

const styles = {
  root: { background: '#202020', pb: 6, },
  dashboardTitle: { textAlign: 'center', color: 'white !important', fontSize: '21px', fontWeight: '500' },
  swiperImage: { width: '100%', height: 'auto' },
  depositWithdrawContainer: { alignItems: 'center', justifyContent: 'space-between', mt: 2 },
  depositWithdrawIcon: { width: '30px', height: '30px' },
  referralLinkContainer: { background: '#3A3A3A', padding: '15px 15px', borderRadius: '5px', mt: 4 },
  referralLinkTitle: { color: 'white !important', fontSize: '14px', fontWeight: '500 !important' },
  referralLinkInputContainer: { alignItems: 'center' },
  referralLinkInput: { width: '100%' },
  referralLinkButton: { marginLeft: 2 },
  socialButtonsContainer: { alignItems: 'center', justifyContent: 'space-between', mt: 4 },
  telegramButton: { fontSize: '14px', color: 'white !important', textTransform: 'capitalize', fontWeight: '400' },
  supportButton: { fontSize: '14px', color: 'white !important', textTransform: 'capitalize', fontWeight: '400' },
  socialButtonIcon: { margin: 'auto', background: 'white', borderRadius: '50%', width: '25px', height: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  socialIcon: { fontSize: '20px', '&>path': { color: "#6da7f4 !important" } },
  socialIconinfo: { fontSize: '20px', margin: 'auto', '&>path': { color: "white !important" } },
  socialButtonText: { color: 'white !important', textTransform: 'capitalize', fontWeight: '400', fontSize: '14px' },
  gameImage: { width: '90px', height: '80px', position: 'absolute', top: '-20px', right: '0px' },
  gameTitle: { fontSize: '22px', fontWeight: '600', color: 'white !important', transition: 'all 0.3s' },
  gameDescription: { fontSize: '15px', fontWeight: '400', color: 'white !important', mt: 2, transition: 'all 0.3s' },
  userImage: { width: '50px', height: '50px' },
};











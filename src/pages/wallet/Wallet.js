
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { Box, Container, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import CustomCircularProgress from '../../Shared/CustomCircularProgress';
import { zubgback, zubgbackgrad, zubgmid } from '../../Shared/color';
import withdrow from '../../assets/images/cash-withdrawal.png';
import rechargeIcon from '../../assets/images/deposit.png';
import wdhistory from '../../assets/images/history.png';
import deposite from '../../assets/images/payment.png';
import wallet from '../../assets/images/wallet.png';
import Layout from '../../component/Layout/Layout';
import { useQuery } from 'react-query';
import { MyProfileDataFn } from '../../services/apicalling';


function Wallet() {
  const navigate = useNavigate()
  const { isLoading, data } = useQuery(
    ["myprofile"],
    () => MyProfileDataFn(),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );
const result = data?.data?.data;


  return (
    <Layout>
      <Container className='no-scrollbar' sx={{ background: zubgback, width: '100%', height: '100vh', overflow: 'auto' }}>
        <Box sx={style.header}>
          <Box component={NavLink} onClick={()=>navigate(-1)}>
            <KeyboardArrowLeftOutlinedIcon />
          </Box>
          <Typography variant="body1" color="initial">Wallet</Typography>
          <Box component={NavLink} onClick={()=>navigate(-1)}>

          </Box>
        </Box>

        {/*  */}
        <Box sx={{ pt: 2, pb: 4, width: '100%', background: zubgmid, width: '95%', marginLeft: '2.5%', marginTop: '20px', borderRadius: '10px ', }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} className='walletBox'>
              <Box component='img' src={wallet} width={50} ></Box>
              <Typography variant="h2" color="initial" >₹ {(Number(result?.winning_wallet+result?.wallet)||0)?.toFixed(0)}</Typography>
              <Typography variant="body1" color="initial">Total balance</Typography>
            </Box>
          </Box>
        </Box>
        {/*  */}

        <Box className="wallet-track-box">
          <Stack direction='row' sx={{ width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ width: '50%', }}>
              <Box sx={{ margin: 'auto', background: 'white', width: '100px', height: '100px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ fontSize: '20px', fontWeight: '700', color: 'white !important', background: zubgmid, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', borderRadius: '50%', }}>
                  0%
                </Box>
              </Box>
              <Box sx={{ textAlign: 'center', mt: '15px', '&>p': { color: 'white', fontSize: '12px' } }}>
                <Typography variant="body1" color="initial">₹ 0.00</Typography>
                <Typography variant="body1" color="initial">Main Wallet</Typography>
              </Box>
            </Box>
            <Box sx={{ width: '50%' }}>
              <Box sx={{ margin: 'auto', background: zubgbackgrad, width: '100px', height: '100px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ fontSize: '20px', fontWeight: '700', color: 'white !important', background: zubgmid, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', borderRadius: '50%', }}>
                  100%
                </Box>
              </Box>
              <Box sx={{ textAlign: 'center', mt: '15px', '&>p': { color: 'white', fontSize: '12px' } }}>
                <Typography variant="body1" color="initial">₹ 3,077.72</Typography>
                <Typography variant="body1" color="initial">3rd party wallets</Typography>
              </Box>
            </Box>
          </Stack>
          <Stack direction='row' sx={{ width: '100%', justifyContent: 'space-between', alignItems: 'baseline' }}>

            <Box sx={{
              width: '24%', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center',
              '&>a>p': { fontSize: '12px', color: 'white', textAlign: 'center', }, mt: '30px',
              '&>a>img': { margin: 'auto' }, mt: '30px',
            }} >
              <NavLink to='/wallet/Recharge'>
                <Box component='img' src={rechargeIcon} width={50}></Box>
                <Typography variant="body1" color="initial" mt={1}>Deposit</Typography>
              </NavLink>
            </Box>
            <Box sx={{
              width: '24%', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center',
              '&>a>p': { fontSize: '12px', color: 'white', textAlign: 'center' }, mt: '30px',
              '&>a>img': { margin: 'auto' },
            }} >
              <NavLink to='/Withdrawal'>
                <Box component='img' src={withdrow} width={50}></Box>
                <Typography variant="body1" color="initial" mt={1}>Withdraw</Typography>
              </NavLink>
            </Box>
            <Box sx={{
              width: '24%', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center',
              '&>a>p': { fontSize: '12px', color: 'white', textAlign: 'center' }, mt: '30px',
              '&>a>img': { margin: 'auto' },
            }} >
              <NavLink to='/depositHistory'>
                <Box component='img' src={wdhistory} width={50}></Box>
                <Typography variant="body1" color="initial" mt={1}>Deposit <br />history</Typography>
              </NavLink>
            </Box>
            <Box sx={{
              width: '24%', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center',
              '&>a>p': { fontSize: '12px', color: 'white', textAlign: 'center' },
              '&>a>img': { margin: 'auto' },
            }} >
              <NavLink to='/withdravalHistory'>
                <Box component='img' src={deposite} width={50}></Box>
                <Typography variant="body1" color="initial" mt={1}>Withdrawal history</Typography>
              </NavLink>
            </Box>
          </Stack>
        </Box>
        <Box sx={{
          width: '100%', borderRadius: '10px ', padding: '20px', display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'space-between', mb: '50px',
        }}>
          <Box sx={style.wthui}>
            <Box>
              <Typography variant="body1" color="initial">0.000</Typography>
              <Typography variant="body1" color="initial">BBD</Typography>
            </Box>
          </Box>
          <Box sx={style.wthui}>
            <Box>
              <Typography variant="body1" color="initial">0.000</Typography>
              <Typography variant="body1" color="initial">BBD</Typography>
            </Box>
          </Box>
          <Box sx={style.wthui}>
            <Box>
              <Typography variant="body1" color="initial">0.000</Typography>
              <Typography variant="body1" color="initial">BBD</Typography>
            </Box>
          </Box>
          <Box sx={style.wthui}>
            <Box>
              <Typography variant="body1" color="initial">0.000</Typography>
              <Typography variant="body1" color="initial">BBD</Typography>
            </Box>
          </Box>
          <Box sx={style.wthui}>
            <Box>
              <Typography variant="body1" color="initial">0.000</Typography>
              <Typography variant="body1" color="initial">BBD</Typography>
            </Box>
          </Box>
          <Box sx={style.wthui}>
            <Box>
              <Typography variant="body1" color="initial">0.000</Typography>
              <Typography variant="body1" color="initial">BBD</Typography>
            </Box>
          </Box>
        </Box>
        <CustomCircularProgress isLoading={isLoading}/>
      </Container>
    </Layout>
  )
}

export default Wallet

const style = {
  header: {
    padding: '15px 8px',
    background: zubgmid,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& > p': {
      fontSize: '20px',
      fontWeight: '600',
      textAlign: 'center',
      color: 'white',
    },
    '& > a > svg': {
      color: 'white',
      fontSize: '35px'
    }
  },
  wthui: {
    textAlign: 'center', width: '31%', minHeight: '15vh', background: zubgmid, borderRadius: '10px', mb: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center',
    '&>div>p': { color: 'white' },
  },
};


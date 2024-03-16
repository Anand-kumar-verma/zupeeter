import CachedIcon from '@mui/icons-material/Cached';
import HistoryIcon from '@mui/icons-material/History';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { Box, Button, Container, FormControl, Stack, TextField, Typography } from '@mui/material';
import * as React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { zubgback, zubgbackgrad, zubgmid } from '../../Shared/color';
import cip from '../../assets/cip.png';
import payment from '../../assets/images/payment (1).png';
import balance from '../../assets/images/send.png';
import Layout from '../../component/Layout/Layout';
import playgame from '../../assets/images/playgame.jpg';


function Withdrawl() {

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Layout>
      <Container sx={{ background: zubgback, width: '100%', height: '100vh', overflow: 'auto', mb: 4 }}>
        <Box sx={style.header}>
          <Box component={NavLink} onClick={goBack}>
            <KeyboardArrowLeftOutlinedIcon />
          </Box>
          <Typography variant="body1" color="initial">Withdrawal</Typography>
          <Box component={NavLink} to='/withdravalHistory'>
            <HistoryIcon />
          </Box>
        </Box>
        <Box sx={{ background: zubgmid, borderRadius: '10px', padding: '30px 20px', width: '95%', margin: 'auto', position: 'relative' }}>
          <Box component='img' src={playgame} sx={{ opacity: '0.2', position: 'absolute', top: 0, left: 0, width: "100%", height: '100%', borderRadius: '10px', overflow: 'hidden' }}></Box>
          <Stack direction='row' sx={{ alignItems: 'center', }}>
            <Box component='img' src={balance} width={50}></Box>
            <Typography variant="body1" color="initial" sx={{ fontSize: '16px ', fontWeight: 500, color: 'white', ml: '10px' }}> Balance</Typography>
          </Stack>
          <Stack direction='row' sx={{ alignItems: 'center', mt: '10px' }}>
            <Typography variant="body1" color="initial" sx={{ fontSize: '30px ', fontWeight: '600', color: 'white', mr: '10px', }}> ₹3,069.32
            </Typography>
            <CachedIcon sx={{ color: 'white' }} />
          </Stack>
          <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between', mt: '20px' }}>
            <Box component='img' src={cip} width={50}></Box>
            <Typography variant="body1" color="initial" sx={{ fontSize: '14px ', color: 'white', ml: '10px' }}>**** **** **** ****</Typography>
          </Stack>
        </Box>
        <Box>
          < Box sx={{ padding: '10px', width: '95%', margin: 'auto', mt: '20px', background: zubgmid, borderRadius: '10px', mb: 5 }}>
            <Stack direction='row' sx={{ alignItems: 'center', mb: '20px' }}>
              <Box component='img' src={payment} width={30}></Box>
              <Typography variant="body1" color="initial" sx={{ fontSize: '15px ', color: 'white', ml: '10px' }}>Withdrawal amount</Typography>
            </Stack>
            <Box mt={2} component='form'>
              <FormControl fullWidth sx={{ mt: '10px' }}>
                <Stack direction="row" className="loginlabel">
                  <Typography variant="h3">Enter amount *</Typography>
                </Stack>
                <TextField id="mob" name="mob" type="mobile" placeholder="Enter amount *" className="withdrawalfield" />
              </FormControl>
              <FormControl fullWidth sx={{ mt: '10px' }}>
                <Stack direction="row" className="loginlabel">
                  <Typography variant="h3">Withdrawal type *</Typography>
                </Stack>
                <TextField id="mob" name="mob" type="mobile" placeholder="Enter amount *" className="withdrawalfield" />
              </FormControl>
              <FormControl fullWidth sx={{ mt: '10px' }}>
                <Stack direction="row" className="loginlabel">
                  <Typography variant="h3">Bank name *</Typography>
                </Stack>
                <TextField id="mob" name="mob" type="mobile" placeholder="Enter bank name *" className="withdrawalfield" />
              </FormControl>
              <FormControl fullWidth sx={{ mt: '10px' }}>
                <Stack direction="row" className="loginlabel">
                  <Typography variant="h3">Account holder name *</Typography>
                </Stack>
                <TextField id="mob" name="mob" type="mobile" placeholder="Enter account holder name  *" className="withdrawalfield" />
              </FormControl>
              <FormControl fullWidth sx={{ mt: '10px' }}>
                <Stack direction="row" className="loginlabel">
                  <Typography variant="h3">IFSC code *</Typography>
                </Stack>
                <TextField id="mob" name="mob" type="mobile" placeholder="Enter IFSC code *" className="withdrawalfield" />
              </FormControl>
              <FormControl fullWidth sx={{ mt: '10px' }}>
                <Stack direction="row" className="loginlabel">
                  <Typography variant="h3">Account number *</Typography>
                </Stack>
                <TextField id="mob" name="mob" type="mobile" placeholder="Enter account number *" className="withdrawalfield" />
              </FormControl>
              <FormControl fullWidth sx={{ mt: '10px' }}>
                <Stack direction="row" className="loginlabel">
                  <Typography variant="h3">Transaction password *</Typography>
                </Stack>
                <TextField id="mob" name="mob" type="mobile" placeholder="Enter transaction password *" className="withdrawalfield" />
              </FormControl>
              <Button sx={style.paytmbtntwo}>Withdrawal </Button>
            </Box>
          </Box>
        </Box>
      </Container >
    </Layout >
  )
}

export default Withdrawl;

const style = {
  header: {
    padding: '15px 8px',
    background: zubgback,
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
    textAlign: 'center', width: '32%', minHeight: '15vh', background: zubgmid, borderRadius: '10px', mb: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
    '&>div>p': { color: 'white' },
  },
  paymentlink: {
    width: '32%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: "15vh", background: zubgmid,
    borderRadius: '10px', mb: '10px',
    '&>p': { color: 'white', fontSize: '12px', fontWeight: '500', textAlign: 'center', mt: '5px' },
  },
  paymentBoxOuter: {
    width: '95%', margin: 'auto', my: '10px', display: 'flex', flexWrap: "wrap", alignItems: 'center', justifyContent: 'space-between'
  },
  paytmbtn: { mb: 2, background: zubgback, color: 'white !important', width: '31%', border: "1px solid white", padding: '10px', '&:hover': { background: zubgbackgrad, border: "1px solid transparent", } },
  paytmbtntwo: { borderRadius: '5px', textTransform: 'capitalize', mb: 2, background: zubgbackgrad, color: 'white !important', width: '100%', mt: '20px', border: "1px solid white", padding: '10px', '&:hover': { background: zubgbackgrad, border: "1px solid transparent", } },
  rechargeinstext: { mb: '10px', alignItems: 'center', justifyContent: 'start', '&>p': { marginLeft: '10px', color: 'white !important', fontSize: '14px' }, }
};

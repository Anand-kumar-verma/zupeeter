import { Container, Typography, Box, IconButton, InputAdornment, OutlinedInput, FormControl, Select, Stack, Button, TextField } from '@mui/material'
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import Layout from '../../../component/Layout/Layout';
import { NavLink } from 'react-router-dom';
import { bgcolorgradient, bgcolorlight, darktext, zubgback, zubgbackgrad, zubgmid } from '../../../Shared/color';
import HistoryIcon from '@mui/icons-material/History';
import TotalAssetsBg from '../../../assets/TotalAssetsBg.png';
import balance from '../../../assets/images/send.png';
import cip from '../../../assets/cip.png';
import payNameIcon from '../../../assets/payNameIcon.png';
import payNameIcon1 from '../../../assets/payNameIcon1.png';
import payNameIcon2 from '../../../assets/payNameIcon2.png';
import payNameIcon3 from '../../../assets/payNameIcon3.png';
import quickpay from '../../../assets/images/deposit.png';
import payment from '../../../assets/images/payment (1).png';
import user from '../../../assets/images/user-guide.png';
import dot from '../../../assets/images/circle-arrow.png';
import deposit from '../../../assets/images/history.png';
import CachedIcon from '@mui/icons-material/Cached';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


function WalletRecharge() {


  const [paymet, setPaymet] = React.useState(1);



  return (
    <Layout>
      <Container sx={{ background: zubgback, width: '100%', height: '100vh', overflow: 'auto', mb: 7 }}>
        <Box sx={style.header}>
          <Box component={NavLink} to='/wallet/'>
            <KeyboardArrowLeftOutlinedIcon />
          </Box>
          <Typography variant="body1" color="initial">Deposit</Typography>
          <Box component={NavLink} to='/wallet/RechargeHistory'>
            <HistoryIcon />
          </Box>
        </Box>
        <Box sx={{ background: zubgmid, borderRadius: '10px', padding: '20px', width: '95%', margin: 'auto', mt: 2, }}>
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
        <Box sx={style.paymentBoxOuter}>

          <Box sx={style.paymentlink} component={NavLink} onClick={() => setPaymet(1)}>
            <Box component='img' src={payNameIcon} sx={{ width: '50px' }}></Box>
            <Typography variant="body1" color="initial">Paytm</Typography>
          </Box>
          <Box sx={style.paymentlink} component={NavLink} onClick={() => setPaymet(2)}>
            <Box component='img' src={payNameIcon2} sx={{ width: '50px' }}></Box>
            <Typography variant="body1" color="initial">UPI</Typography>
          </Box>
          <Box sx={style.paymentlink} component={NavLink} onClick={() => setPaymet(3)}>
            <Box component='img' src={payNameIcon1} sx={{ width: '50px' }}></Box>
            <Typography variant="body1" color="initial">USDT 3% Bonus </Typography>
          </Box>
          <Box sx={style.paymentlink} component={NavLink} onClick={() => setPaymet(4)}>
            <Box component='img' src={payNameIcon3} sx={{ width: '50px' }}></Box>
            <Typography variant="body1" color="initial">TRX 2% Bonus </Typography>
          </Box>
        </Box>
        {
          paymet === 1 &&
          <Box>


            < Box sx={{ padding: '10px', width: '95%', margin: 'auto', mt: 2, background: zubgmid, borderRadius: '10px', mb: 2 }}>
              <Stack direction='row' sx={{ alignItems: 'center', mb: '20px' }}>
                <Box component='img' src={quickpay} width={30}></Box>
                <Typography variant="body1" color="initial" sx={{ fontSize: '15px ', color: 'white', ml: '10px' }}> Select channel</Typography>
              </Stack>
              <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', mt: '10px' }}>
                <Box sx={{ width: '48%', background: zubgbackgrad, padding: '15px 20px', borderRadius: '10px', mb: '10px', '&>p': { fontSize: '14px', color: 'white' } }}>
                  <Typography variant="body1" color="initial">DSpay-QR</Typography>
                  <Typography variant="body1" color="initial">Balance:500 - 50K</Typography>
                </Box>
                <Box sx={{ width: '48%', background: zubgback, padding: '15px 20px', borderRadius: '10px', mb: '10px', '&>p': { fontSize: '14px', color: 'white' } }}>
                  <Typography variant="body1" color="initial">iCEPay-APP</Typography>
                  <Typography variant="body1" color="initial">Balance:100 - 50K</Typography>
                </Box>
                <Box sx={{ width: '48%', background: zubgback, padding: '15px 20px', borderRadius: '10px', mb: '10px', '&>p': { fontSize: '14px', color: 'white' } }}>
                  <Typography variant="body1" color="initial">IMpay-APP</Typography>
                  <Typography variant="body1" color="initial">Balance:100 - 50K</Typography>
                </Box>
                <Box sx={{ width: '48%', background: zubgback, padding: '15px 20px', borderRadius: '10px', mb: '10px', '&>p': { fontSize: '14px', color: 'white' } }}>
                  <Typography variant="body1" color="initial">BYpay-QR</Typography>
                  <Typography variant="body1" color="initial">Balance:100 - 50K</Typography>
                </Box>
                <Box sx={{ width: '48%', background: zubgback, padding: '15px 20px', borderRadius: '10px', mb: '10px', '&>p': { fontSize: '14px', color: 'white' } }}>
                  <Typography variant="body1" color="initial">UPIpay-QR</Typography>
                  <Typography variant="body1" color="initial">Balance:100 - 50K</Typography>
                </Box>
                <Box sx={{ width: '48%', background: zubgback, padding: '15px 20px', borderRadius: '10px', mb: '10px', '&>p': { fontSize: '14px', color: 'white' } }}>
                  <Typography variant="body1" color="initial">365pay-QR</Typography>
                  <Typography variant="body1" color="initial">Balance:100 - 50K</Typography>
                </Box>
                <Box sx={{ width: '48%', background: zubgback, padding: '15px 20px', borderRadius: '10px', mb: '10px', '&>p': { fontSize: '14px', color: 'white' } }}>
                  <Typography variant="body1" color="initial">GYpay-APP</Typography>
                  <Typography variant="body1" color="initial">Balance:100 - 50K</Typography>
                </Box>
              </Stack>
            </Box>

            < Box sx={{ padding: '10px', width: '95%', margin: 'auto', mt: 2, background: zubgmid, borderRadius: '10px', mb: 2 }}>
              <Stack direction='row' sx={{ alignItems: 'center', mb: '20px' }}>
                <Box component='img' src={payment} width={30}></Box>
                <Typography variant="body1" color="initial" sx={{ fontSize: '15px ', color: 'white', ml: '10px' }}>Deposit amount</Typography>
              </Stack>
              <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', mt: '10px' }}>
                <Button sx={style.paytmbtn}> ₹ 500</Button>
                <Button sx={style.paytmbtn}> ₹ 1K</Button>
                <Button sx={style.paytmbtn}> ₹ 5K</Button>
                <Button sx={style.paytmbtn}> ₹ 10K</Button>
                <Button sx={style.paytmbtn}> ₹ 15K</Button>
                <Button sx={style.paytmbtn}> ₹ 20K</Button>
              </Stack>
              <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', mt: '10px' }}>
                <OutlinedInput
                  value={'100'} fullWidth
                  className='wallet-textfield'
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        // onClick={handleClickShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        <CloseIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <Button sx={style.paytmbtntwo}>Recharge instructions</Button>
              </Stack>
            </Box>
            < Box sx={{ padding: '10px', width: '95%', margin: 'auto', mt: 2, background: zubgmid, borderRadius: '10px', mb: 2 }}>
              <Stack direction='row' sx={{ alignItems: 'center', mb: '20px' }}>
                <Box component='img' src={user} width={30}></Box>
                <Typography variant="body1" color="initial" sx={{ fontSize: '15px ', color: 'white', ml: '10px' }}> Recharge instructions</Typography>
              </Stack>
              <Box sx={{ border: '1px solid white', padding: 2, borderRadius: '10px' }}>
                <Stack direction='row' sx={style.rechargeinstext}>
                  <Box component='img' src={dot} width={15}></Box>
                  <Typography variant="body1" color="initial">If the transfer time is up, please fill out the deposit form again.</Typography>
                </Stack>
                <Stack direction='row' sx={style.rechargeinstext}>
                  <Box component='img' src={dot} width={15}></Box>
                  <Typography variant="body1" color="initial">The transfer amount must match the order you created, otherwise the money cannot be credited successfully.</Typography>
                </Stack>
                <Stack direction='row' sx={style.rechargeinstext}>
                  <Box component='img' src={dot} width={15}></Box>
                  <Typography variant="body1" color="initial">If you transfer the wrong amount, our company will not be responsible for the lost amount!</Typography>
                </Stack>
                <Stack direction='row' sx={style.rechargeinstext}>
                  <Box component='img' src={dot} width={15}></Box>
                  <Typography variant="body1" color="initial">Note: do not cancel the deposit order after the money has been transferred.</Typography>
                </Stack>
              </Box>
            </Box>
            < Box sx={{ padding: '10px', width: '95%', margin: 'auto', mt: 2, background: zubgmid, borderRadius: '10px', mb: 2 }}>
              <Stack direction='row' sx={{ alignItems: 'center', mb: '20px' }}>
                <Box component='img' src={deposit} width={30}></Box>
                <Typography variant="body1" color="initial" sx={{ fontSize: '15px ', color: 'white', ml: '10px' }}>Deposit history</Typography>
              </Stack>
              <Box sx={{ mb: 2, padding: '15px', borderRadius: '10px', border: '1px solid white', background: zubgback, }}>
                <Stack direction='row' sx={{ paddingBottom: '10px', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid white' }}>
                  <Box>
                    <Button sx={{ background: zubgmid, color: 'white', textTransform: 'capitalize' }}>Deposit</Button>
                  </Box>
                  <Box>
                    <Button sx={{ color: 'green', textTransform: 'capitalize' }}>Complete</Button>
                    <IconButton>
                      <ArrowForwardIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Box>
                </Stack>.
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Balance</Typography>
                  <Typography variant="body1" color="initial">₹9,000.00</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Type</Typography>
                  <Typography variant="body1" color="initial">iCEPay-APP</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Time</Typography>
                  <Typography variant="body1" color="initial">2023-12-27 22:49:51</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Order number</Typography>
                  <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                    <Typography variant="body1" color="initial">P2023122717195059659284</Typography>
                    <IconButton>
                      <ContentCopyIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Stack>
                </Stack>
              </Box>
              <Box sx={{ mb: 2, padding: '15px', borderRadius: '10px', border: '1px solid white', background: zubgback, }}>
                <Stack direction='row' sx={{ paddingBottom: '10px', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid white' }}>
                  <Box>
                    <Button sx={{ background: zubgmid, color: 'white', textTransform: 'capitalize' }}>Deposit</Button>
                  </Box>
                  <Box>
                    <Button sx={{ color: 'red', textTransform: 'capitalize' }}>Failed</Button>
                    <IconButton>
                      <ArrowForwardIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Box>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Balance</Typography>
                  <Typography variant="body1" color="initial">₹9,000.00</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Type</Typography>
                  <Typography variant="body1" color="initial">iCEPay-APP</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Time</Typography>
                  <Typography variant="body1" color="initial">2023-12-27 22:49:51</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Order number</Typography>
                  <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                    <Typography variant="body1" color="initial">P2023122717195059659284</Typography>
                    <IconButton>
                      <ContentCopyIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Stack>
                </Stack>
              </Box>
              <Box sx={{ mb: 2, padding: '15px', borderRadius: '10px', border: '1px solid white', background: zubgback, }}>
                <Stack direction='row' sx={{ paddingBottom: '10px', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid white' }}>
                  <Box>
                    <Button sx={{ background: zubgmid, color: 'white', textTransform: 'capitalize' }}>Deposit</Button>
                  </Box>
                  <Box>
                    <Button sx={{ color: 'green', textTransform: 'capitalize' }}>Complete</Button>
                    <IconButton>
                      <ArrowForwardIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Box>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Balance</Typography>
                  <Typography variant="body1" color="initial">₹9,000.00</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Type</Typography>
                  <Typography variant="body1" color="initial">iCEPay-APP</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Time</Typography>
                  <Typography variant="body1" color="initial">2023-12-27 22:49:51</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Order number</Typography>
                  <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                    <Typography variant="body1" color="initial">P2023122717195059659284</Typography>
                    <IconButton>
                      <ContentCopyIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Stack>
                </Stack>
              </Box>
              <Button sx={style.paytmbtntwo}>All history</Button>
            </Box>
          </Box>
        }
        {
          paymet === 2 &&

          <Box>


            < Box sx={{ padding: '10px', width: '95%', margin: 'auto', mt: 2, background: zubgmid, borderRadius: '10px', mb: 2 }}>
              <Stack direction='row' sx={{ alignItems: 'center', mb: '20px' }}>
                <Box component='img' src={quickpay} width={30}></Box>
                <Typography variant="body1" color="initial" sx={{ fontSize: '15px ', color: 'white', ml: '10px' }}> Select channel</Typography>
              </Stack>
              <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', mt: '10px' }}>
                <Box sx={{ width: '48%', background: zubgbackgrad, padding: '15px 20px', borderRadius: '10px', mb: '10px', '&>p': { fontSize: '14px', color: 'white' } }}>
                  <Typography variant="body1" color="initial">IMpay-QR</Typography>
                  <Typography variant="body1" color="initial">Balance:100 - 50K</Typography>
                </Box>
                <Box sx={{ width: '48%', background: zubgback, padding: '15px 20px', borderRadius: '10px', mb: '10px', '&>p': { fontSize: '14px', color: 'white' } }}>
                  <Typography variant="body1" color="initial">TYpay-QR</Typography>
                  <Typography variant="body1" color="initial">Balance:500 - 50K</Typography>
                </Box>
                <Box sx={{ width: '48%', background: zubgback, padding: '15px 20px', borderRadius: '10px', mb: '10px', '&>p': { fontSize: '14px', color: 'white' } }}>
                  <Typography variant="body1" color="initial">HeyPay-APP</Typography>
                  <Typography variant="body1" color="initial">Balance:100 - 50K</Typography>
                </Box>
                <Box sx={{ width: '48%', background: zubgback, padding: '15px 20px', borderRadius: '10px', mb: '10px', '&>p': { fontSize: '14px', color: 'white' } }}>
                  <Typography variant="body1" color="initial">UPIpay-APP</Typography>
                  <Typography variant="body1" color="initial">Balance:100 - 50K</Typography>
                </Box>
                <Box sx={{ width: '48%', background: zubgback, padding: '15px 20px', borderRadius: '10px', mb: '10px', '&>p': { fontSize: '14px', color: 'white' } }}>
                  <Typography variant="body1" color="initial">BYpay-APP</Typography>
                  <Typography variant="body1" color="initial">Balance:100 - 50K</Typography>
                </Box>
                <Box sx={{ width: '48%', background: zubgback, padding: '15px 20px', borderRadius: '10px', mb: '10px', '&>p': { fontSize: '14px', color: 'white' } }}>
                  <Typography variant="body1" color="initial">OKpay-QR</Typography>
                  <Typography variant="body1" color="initial">Balance:500 - 50K</Typography>
                </Box>
                <Box sx={{ width: '48%', background: zubgback, padding: '15px 20px', borderRadius: '10px', mb: '10px', '&>p': { fontSize: '14px', color: 'white' } }}>
                  <Typography variant="body1" color="initial">MGpay-QR</Typography>
                  <Typography variant="body1" color="initial">Balance:500 - 100K</Typography>
                </Box>
              </Stack>
            </Box>

            < Box sx={{ padding: '10px', width: '95%', margin: 'auto', mt: 2, background: zubgmid, borderRadius: '10px', mb: 2 }}>
              <Stack direction='row' sx={{ alignItems: 'center', mb: '20px' }}>
                <Box component='img' src={payment} width={30}></Box>
                <Typography variant="body1" color="initial" sx={{ fontSize: '15px ', color: 'white', ml: '10px' }}>Deposit amount</Typography>
              </Stack>
              <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', mt: '10px' }}>
                <Button sx={style.paytmbtn}> ₹ 500</Button>
                <Button sx={style.paytmbtn}> ₹ 1K</Button>
                <Button sx={style.paytmbtn}> ₹ 5K</Button>
                <Button sx={style.paytmbtn}> ₹ 10K</Button>
                <Button sx={style.paytmbtn}> ₹ 15K</Button>
                <Button sx={style.paytmbtn}> ₹ 20K</Button>
              </Stack>
              <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', mt: '10px' }}>
                <OutlinedInput
                  value={'100'} fullWidth
                  className='wallet-textfield'
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        // onClick={handleClickShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        <CloseIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <Button sx={style.paytmbtntwo}>Recharge instructions</Button>
              </Stack>
            </Box>
            < Box sx={{ padding: '10px', width: '95%', margin: 'auto', mt: 2, background: zubgmid, borderRadius: '10px', mb: 2 }}>
              <Stack direction='row' sx={{ alignItems: 'center', mb: '20px' }}>
                <Box component='img' src={user} width={30}></Box>
                <Typography variant="body1" color="initial" sx={{ fontSize: '15px ', color: 'white', ml: '10px' }}> Recharge instructions</Typography>
              </Stack>
              <Box sx={{ border: '1px solid white', padding: 2, borderRadius: '10px' }}>
                <Stack direction='row' sx={style.rechargeinstext}>
                  <Box component='img' src={dot} width={15}></Box>
                  <Typography variant="body1" color="initial">If the transfer time is up, please fill out the deposit form again.</Typography>
                </Stack>
                <Stack direction='row' sx={style.rechargeinstext}>
                  <Box component='img' src={dot} width={15}></Box>
                  <Typography variant="body1" color="initial">The transfer amount must match the order you created, otherwise the money cannot be credited successfully.</Typography>
                </Stack>
                <Stack direction='row' sx={style.rechargeinstext}>
                  <Box component='img' src={dot} width={15}></Box>
                  <Typography variant="body1" color="initial">If you transfer the wrong amount, our company will not be responsible for the lost amount!</Typography>
                </Stack>
                <Stack direction='row' sx={style.rechargeinstext}>
                  <Box component='img' src={dot} width={15}></Box>
                  <Typography variant="body1" color="initial">Note: do not cancel the deposit order after the money has been transferred.</Typography>
                </Stack>
              </Box>
            </Box>
            < Box sx={{ padding: '10px', width: '95%', margin: 'auto', mt: 2, background: zubgmid, borderRadius: '10px', mb: 2 }}>
              <Stack direction='row' sx={{ alignItems: 'center', mb: '20px' }}>
                <Box component='img' src={deposit} width={30}></Box>
                <Typography variant="body1" color="initial" sx={{ fontSize: '15px ', color: 'white', ml: '10px' }}>Deposit history</Typography>
              </Stack>
              <Box sx={{ mb: 2, padding: '15px', borderRadius: '10px', border: '1px solid white', background: zubgback, }}>
                <Stack direction='row' sx={{ paddingBottom: '10px', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid white' }}>
                  <Box>
                    <Button sx={{ background: zubgmid, color: 'white', textTransform: 'capitalize' }}>Deposit</Button>
                  </Box>
                  <Box>
                    <Button sx={{ color: 'green', textTransform: 'capitalize' }}>Complete</Button>
                    <IconButton>
                      <ArrowForwardIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Box>
                </Stack>.
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Balance</Typography>
                  <Typography variant="body1" color="initial">₹9,000.00</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Type</Typography>
                  <Typography variant="body1" color="initial">iCEPay-APP</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Time</Typography>
                  <Typography variant="body1" color="initial">2023-12-27 22:49:51</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Order number</Typography>
                  <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                    <Typography variant="body1" color="initial">P2023122717195059659284</Typography>
                    <IconButton>
                      <ContentCopyIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Stack>
                </Stack>
              </Box>
              <Box sx={{ mb: 2, padding: '15px', borderRadius: '10px', border: '1px solid white', background: zubgback, }}>
                <Stack direction='row' sx={{ paddingBottom: '10px', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid white' }}>
                  <Box>
                    <Button sx={{ background: zubgmid, color: 'white', textTransform: 'capitalize' }}>Deposit</Button>
                  </Box>
                  <Box>
                    <Button sx={{ color: 'red', textTransform: 'capitalize' }}>Failed</Button>
                    <IconButton>
                      <ArrowForwardIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Box>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Balance</Typography>
                  <Typography variant="body1" color="initial">₹9,000.00</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Type</Typography>
                  <Typography variant="body1" color="initial">iCEPay-APP</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Time</Typography>
                  <Typography variant="body1" color="initial">2023-12-27 22:49:51</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Order number</Typography>
                  <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                    <Typography variant="body1" color="initial">P2023122717195059659284</Typography>
                    <IconButton>
                      <ContentCopyIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Stack>
                </Stack>
              </Box>
              <Box sx={{ mb: 2, padding: '15px', borderRadius: '10px', border: '1px solid white', background: zubgback, }}>
                <Stack direction='row' sx={{ paddingBottom: '10px', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid white' }}>
                  <Box>
                    <Button sx={{ background: zubgmid, color: 'white', textTransform: 'capitalize' }}>Deposit</Button>
                  </Box>
                  <Box>
                    <Button sx={{ color: 'green', textTransform: 'capitalize' }}>Complete</Button>
                    <IconButton>
                      <ArrowForwardIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Box>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Balance</Typography>
                  <Typography variant="body1" color="initial">₹9,000.00</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Type</Typography>
                  <Typography variant="body1" color="initial">iCEPay-APP</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Time</Typography>
                  <Typography variant="body1" color="initial">2023-12-27 22:49:51</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Order number</Typography>
                  <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                    <Typography variant="body1" color="initial">P2023122717195059659284</Typography>
                    <IconButton>
                      <ContentCopyIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Stack>
                </Stack>
              </Box>
              <Button sx={style.paytmbtntwo}>All history</Button>
            </Box>
          </Box>

        }

        {
          paymet === 3 &&

          <Box>


            < Box sx={{ padding: '10px', width: '95%', margin: 'auto', mt: 2, background: zubgmid, borderRadius: '10px', mb: 2 }}>
              <Stack direction='row' sx={{ alignItems: 'center', mb: '20px' }}>
                <Box component='img' src={quickpay} width={30}></Box>
                <Typography variant="body1" color="initial" sx={{ fontSize: '15px ', color: 'white', ml: '10px' }}> Select channel</Typography>
              </Stack>
              <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', mt: '10px' }}>
                <Box sx={{ width: '48%', background: zubgbackgrad, padding: '15px 20px', borderRadius: '10px', mb: '10px', '&>p': { fontSize: '14px', color: 'white' } }}>
                  <Typography variant="body1" color="initial">DSpay-QR</Typography>
                  <Typography variant="body1" color="initial">Balance:500 - 50K</Typography>
                </Box>
                <Box sx={{ width: '48%', background: zubgback, padding: '15px 20px', borderRadius: '10px', mb: '10px', '&>p': { fontSize: '14px', color: 'white' } }}>
                  <Typography variant="body1" color="initial">iCEPay-APP</Typography>
                  <Typography variant="body1" color="initial">Balance:100 - 50K</Typography>
                </Box>
                <Box sx={{ width: '48%', background: zubgback, padding: '15px 20px', borderRadius: '10px', mb: '10px', '&>p': { fontSize: '14px', color: 'white' } }}>
                  <Typography variant="body1" color="initial">IMpay-APP</Typography>
                  <Typography variant="body1" color="initial">Balance:100 - 50K</Typography>
                </Box>
                <Box sx={{ width: '48%', background: zubgback, padding: '15px 20px', borderRadius: '10px', mb: '10px', '&>p': { fontSize: '14px', color: 'white' } }}>
                  <Typography variant="body1" color="initial">BYpay-QR</Typography>
                  <Typography variant="body1" color="initial">Balance:100 - 50K</Typography>
                </Box>
                <Box sx={{ width: '48%', background: zubgback, padding: '15px 20px', borderRadius: '10px', mb: '10px', '&>p': { fontSize: '14px', color: 'white' } }}>
                  <Typography variant="body1" color="initial">UPIpay-QR</Typography>
                  <Typography variant="body1" color="initial">Balance:100 - 50K</Typography>
                </Box>
                <Box sx={{ width: '48%', background: zubgback, padding: '15px 20px', borderRadius: '10px', mb: '10px', '&>p': { fontSize: '14px', color: 'white' } }}>
                  <Typography variant="body1" color="initial">365pay-QR</Typography>
                  <Typography variant="body1" color="initial">Balance:100 - 50K</Typography>
                </Box>
                <Box sx={{ width: '48%', background: zubgback, padding: '15px 20px', borderRadius: '10px', mb: '10px', '&>p': { fontSize: '14px', color: 'white' } }}>
                  <Typography variant="body1" color="initial">GYpay-APP</Typography>
                  <Typography variant="body1" color="initial">Balance:100 - 50K</Typography>
                </Box>
              </Stack>
            </Box>

            < Box sx={{ padding: '10px', width: '95%', margin: 'auto', mt: 2, background: zubgmid, borderRadius: '10px', mb: 2 }}>
              <Stack direction='row' sx={{ alignItems: 'center', mb: '20px' }}>
                <Box component='img' src={payment} width={30}></Box>
                <Typography variant="body1" color="initial" sx={{ fontSize: '15px ', color: 'white', ml: '10px' }}>Deposit amount</Typography>
              </Stack>
              <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', mt: '10px' }}>
                <Button sx={style.paytmbtn}> ₹ 500</Button>
                <Button sx={style.paytmbtn}> ₹ 1K</Button>
                <Button sx={style.paytmbtn}> ₹ 5K</Button>
                <Button sx={style.paytmbtn}> ₹ 10K</Button>
                <Button sx={style.paytmbtn}> ₹ 15K</Button>
                <Button sx={style.paytmbtn}> ₹ 20K</Button>
              </Stack>
              <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', mt: '10px' }}>
                <OutlinedInput
                  value={'100'} fullWidth
                  className='wallet-textfield'
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        // onClick={handleClickShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        <CloseIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <Button sx={style.paytmbtntwo}>Recharge instructions</Button>
              </Stack>
            </Box>
            < Box sx={{ padding: '10px', width: '95%', margin: 'auto', mt: 2, background: zubgmid, borderRadius: '10px', mb: 2 }}>
              <Stack direction='row' sx={{ alignItems: 'center', mb: '20px' }}>
                <Box component='img' src={user} width={30}></Box>
                <Typography variant="body1" color="initial" sx={{ fontSize: '15px ', color: 'white', ml: '10px' }}> Recharge instructions</Typography>
              </Stack>
              <Box sx={{ border: '1px solid white', padding: 2, borderRadius: '10px' }}>
                <Stack direction='row' sx={style.rechargeinstext}>
                  <Box component='img' src={dot} width={15}></Box>
                  <Typography variant="body1" color="initial">If the transfer time is up, please fill out the deposit form again.</Typography>
                </Stack>
                <Stack direction='row' sx={style.rechargeinstext}>
                  <Box component='img' src={dot} width={15}></Box>
                  <Typography variant="body1" color="initial">The transfer amount must match the order you created, otherwise the money cannot be credited successfully.</Typography>
                </Stack>
                <Stack direction='row' sx={style.rechargeinstext}>
                  <Box component='img' src={dot} width={15}></Box>
                  <Typography variant="body1" color="initial">If you transfer the wrong amount, our company will not be responsible for the lost amount!</Typography>
                </Stack>
                <Stack direction='row' sx={style.rechargeinstext}>
                  <Box component='img' src={dot} width={15}></Box>
                  <Typography variant="body1" color="initial">Note: do not cancel the deposit order after the money has been transferred.</Typography>
                </Stack>
              </Box>
            </Box>
            < Box sx={{ padding: '10px', width: '95%', margin: 'auto', mt: 2, background: zubgmid, borderRadius: '10px', mb: 2 }}>
              <Stack direction='row' sx={{ alignItems: 'center', mb: '20px' }}>
                <Box component='img' src={deposit} width={30}></Box>
                <Typography variant="body1" color="initial" sx={{ fontSize: '15px ', color: 'white', ml: '10px' }}>Deposit history</Typography>
              </Stack>
              <Box sx={{ mb: 2, padding: '15px', borderRadius: '10px', border: '1px solid white', background: zubgback, }}>
                <Stack direction='row' sx={{ paddingBottom: '10px', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid white' }}>
                  <Box>
                    <Button sx={{ background: zubgmid, color: 'white', textTransform: 'capitalize' }}>Deposit</Button>
                  </Box>
                  <Box>
                    <Button sx={{ color: 'green', textTransform: 'capitalize' }}>Complete</Button>
                    <IconButton>
                      <ArrowForwardIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Box>
                </Stack>.
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Balance</Typography>
                  <Typography variant="body1" color="initial">₹9,000.00</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Type</Typography>
                  <Typography variant="body1" color="initial">iCEPay-APP</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Time</Typography>
                  <Typography variant="body1" color="initial">2023-12-27 22:49:51</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Order number</Typography>
                  <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                    <Typography variant="body1" color="initial">P2023122717195059659284</Typography>
                    <IconButton>
                      <ContentCopyIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Stack>
                </Stack>
              </Box>
              <Box sx={{ mb: 2, padding: '15px', borderRadius: '10px', border: '1px solid white', background: zubgback, }}>
                <Stack direction='row' sx={{ paddingBottom: '10px', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid white' }}>
                  <Box>
                    <Button sx={{ background: zubgmid, color: 'white', textTransform: 'capitalize' }}>Deposit</Button>
                  </Box>
                  <Box>
                    <Button sx={{ color: 'red', textTransform: 'capitalize' }}>Failed</Button>
                    <IconButton>
                      <ArrowForwardIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Box>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Balance</Typography>
                  <Typography variant="body1" color="initial">₹9,000.00</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Type</Typography>
                  <Typography variant="body1" color="initial">iCEPay-APP</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Time</Typography>
                  <Typography variant="body1" color="initial">2023-12-27 22:49:51</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Order number</Typography>
                  <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                    <Typography variant="body1" color="initial">P2023122717195059659284</Typography>
                    <IconButton>
                      <ContentCopyIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Stack>
                </Stack>
              </Box>
              <Box sx={{ mb: 2, padding: '15px', borderRadius: '10px', border: '1px solid white', background: zubgback, }}>
                <Stack direction='row' sx={{ paddingBottom: '10px', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid white' }}>
                  <Box>
                    <Button sx={{ background: zubgmid, color: 'white', textTransform: 'capitalize' }}>Deposit</Button>
                  </Box>
                  <Box>
                    <Button sx={{ color: 'green', textTransform: 'capitalize' }}>Complete</Button>
                    <IconButton>
                      <ArrowForwardIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Box>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Balance</Typography>
                  <Typography variant="body1" color="initial">₹9,000.00</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Type</Typography>
                  <Typography variant="body1" color="initial">iCEPay-APP</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Time</Typography>
                  <Typography variant="body1" color="initial">2023-12-27 22:49:51</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Order number</Typography>
                  <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                    <Typography variant="body1" color="initial">P2023122717195059659284</Typography>
                    <IconButton>
                      <ContentCopyIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Stack>
                </Stack>
              </Box>
              <Button sx={style.paytmbtntwo}>All history</Button>
            </Box>
          </Box>

        }
        {
          paymet === 4 &&
          <Box>


            < Box sx={{ padding: '10px', width: '95%', margin: 'auto', mt: 2, background: zubgmid, borderRadius: '10px', mb: 2 }}>
              <Stack direction='row' sx={{ alignItems: 'center', mb: '20px' }}>
                <Box component='img' src={quickpay} width={30}></Box>
                <Typography variant="body1" color="initial" sx={{ fontSize: '15px ', color: 'white', ml: '10px' }}> Select channel</Typography>
              </Stack>
              <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', mt: '10px' }}>
                <Box sx={{ width: '48%', background: zubgbackgrad, padding: '15px 20px', borderRadius: '10px', mb: '10px', '&>p': { fontSize: '14px', color: 'white' } }}>
                  <Typography variant="body1" color="initial">DSpay-QR</Typography>
                  <Typography variant="body1" color="initial">Balance:500 - 50K</Typography>
                </Box>
                <Box sx={{ width: '48%', background: zubgback, padding: '15px 20px', borderRadius: '10px', mb: '10px', '&>p': { fontSize: '14px', color: 'white' } }}>
                  <Typography variant="body1" color="initial">iCEPay-APP</Typography>
                  <Typography variant="body1" color="initial">Balance:100 - 50K</Typography>
                </Box>
                <Box sx={{ width: '48%', background: zubgback, padding: '15px 20px', borderRadius: '10px', mb: '10px', '&>p': { fontSize: '14px', color: 'white' } }}>
                  <Typography variant="body1" color="initial">IMpay-APP</Typography>
                  <Typography variant="body1" color="initial">Balance:100 - 50K</Typography>
                </Box>
                <Box sx={{ width: '48%', background: zubgback, padding: '15px 20px', borderRadius: '10px', mb: '10px', '&>p': { fontSize: '14px', color: 'white' } }}>
                  <Typography variant="body1" color="initial">BYpay-QR</Typography>
                  <Typography variant="body1" color="initial">Balance:100 - 50K</Typography>
                </Box>
                <Box sx={{ width: '48%', background: zubgback, padding: '15px 20px', borderRadius: '10px', mb: '10px', '&>p': { fontSize: '14px', color: 'white' } }}>
                  <Typography variant="body1" color="initial">UPIpay-QR</Typography>
                  <Typography variant="body1" color="initial">Balance:100 - 50K</Typography>
                </Box>
                <Box sx={{ width: '48%', background: zubgback, padding: '15px 20px', borderRadius: '10px', mb: '10px', '&>p': { fontSize: '14px', color: 'white' } }}>
                  <Typography variant="body1" color="initial">365pay-QR</Typography>
                  <Typography variant="body1" color="initial">Balance:100 - 50K</Typography>
                </Box>
                <Box sx={{ width: '48%', background: zubgback, padding: '15px 20px', borderRadius: '10px', mb: '10px', '&>p': { fontSize: '14px', color: 'white' } }}>
                  <Typography variant="body1" color="initial">GYpay-APP</Typography>
                  <Typography variant="body1" color="initial">Balance:100 - 50K</Typography>
                </Box>
              </Stack>
            </Box>

            < Box sx={{ padding: '10px', width: '95%', margin: 'auto', mt: 2, background: zubgmid, borderRadius: '10px', mb: 2 }}>
              <Stack direction='row' sx={{ alignItems: 'center', mb: '20px' }}>
                <Box component='img' src={payment} width={30}></Box>
                <Typography variant="body1" color="initial" sx={{ fontSize: '15px ', color: 'white', ml: '10px' }}>Deposit amount</Typography>
              </Stack>
              <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', mt: '10px' }}>
                <Button sx={style.paytmbtn}> ₹ 500</Button>
                <Button sx={style.paytmbtn}> ₹ 1K</Button>
                <Button sx={style.paytmbtn}> ₹ 5K</Button>
                <Button sx={style.paytmbtn}> ₹ 10K</Button>
                <Button sx={style.paytmbtn}> ₹ 15K</Button>
                <Button sx={style.paytmbtn}> ₹ 20K</Button>
              </Stack>
              <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', mt: '10px' }}>
                <OutlinedInput
                  value={'100'} fullWidth
                  className='wallet-textfield'
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        // onClick={handleClickShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        <CloseIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <Button sx={style.paytmbtntwo}>Recharge instructions</Button>
              </Stack>
            </Box>
            < Box sx={{ padding: '10px', width: '95%', margin: 'auto', mt: 2, background: zubgmid, borderRadius: '10px', mb: 2 }}>
              <Stack direction='row' sx={{ alignItems: 'center', mb: '20px' }}>
                <Box component='img' src={user} width={30}></Box>
                <Typography variant="body1" color="initial" sx={{ fontSize: '15px ', color: 'white', ml: '10px' }}> Recharge instructions</Typography>
              </Stack>
              <Box sx={{ border: '1px solid white', padding: 2, borderRadius: '10px' }}>
                <Stack direction='row' sx={style.rechargeinstext}>
                  <Box component='img' src={dot} width={15}></Box>
                  <Typography variant="body1" color="initial">If the transfer time is up, please fill out the deposit form again.</Typography>
                </Stack>
                <Stack direction='row' sx={style.rechargeinstext}>
                  <Box component='img' src={dot} width={15}></Box>
                  <Typography variant="body1" color="initial">The transfer amount must match the order you created, otherwise the money cannot be credited successfully.</Typography>
                </Stack>
                <Stack direction='row' sx={style.rechargeinstext}>
                  <Box component='img' src={dot} width={15}></Box>
                  <Typography variant="body1" color="initial">If you transfer the wrong amount, our company will not be responsible for the lost amount!</Typography>
                </Stack>
                <Stack direction='row' sx={style.rechargeinstext}>
                  <Box component='img' src={dot} width={15}></Box>
                  <Typography variant="body1" color="initial">Note: do not cancel the deposit order after the money has been transferred.</Typography>
                </Stack>
              </Box>
            </Box>
            < Box sx={{ padding: '10px', width: '95%', margin: 'auto', mt: 2, background: zubgmid, borderRadius: '10px', mb: 2 }}>
              <Stack direction='row' sx={{ alignItems: 'center', mb: '20px' }}>
                <Box component='img' src={deposit} width={30}></Box>
                <Typography variant="body1" color="initial" sx={{ fontSize: '15px ', color: 'white', ml: '10px' }}>Deposit history</Typography>
              </Stack>
              <Box sx={{ mb: 2, padding: '15px', borderRadius: '10px', border: '1px solid white', background: zubgback, }}>
                <Stack direction='row' sx={{ paddingBottom: '10px', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid white' }}>
                  <Box>
                    <Button sx={{ background: zubgmid, color: 'white', textTransform: 'capitalize' }}>Deposit</Button>
                  </Box>
                  <Box>
                    <Button sx={{ color: 'green', textTransform: 'capitalize' }}>Complete</Button>
                    <IconButton>
                      <ArrowForwardIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Box>
                </Stack>.
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Balance</Typography>
                  <Typography variant="body1" color="initial">₹9,000.00</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Type</Typography>
                  <Typography variant="body1" color="initial">iCEPay-APP</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Time</Typography>
                  <Typography variant="body1" color="initial">2023-12-27 22:49:51</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Order number</Typography>
                  <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                    <Typography variant="body1" color="initial">P2023122717195059659284</Typography>
                    <IconButton>
                      <ContentCopyIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Stack>
                </Stack>
              </Box>
              <Box sx={{ mb: 2, padding: '15px', borderRadius: '10px', border: '1px solid white', background: zubgback, }}>
                <Stack direction='row' sx={{ paddingBottom: '10px', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid white' }}>
                  <Box>
                    <Button sx={{ background: zubgmid, color: 'white', textTransform: 'capitalize' }}>Deposit</Button>
                  </Box>
                  <Box>
                    <Button sx={{ color: 'red', textTransform: 'capitalize' }}>Failed</Button>
                    <IconButton>
                      <ArrowForwardIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Box>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Balance</Typography>
                  <Typography variant="body1" color="initial">₹9,000.00</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Type</Typography>
                  <Typography variant="body1" color="initial">iCEPay-APP</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Time</Typography>
                  <Typography variant="body1" color="initial">2023-12-27 22:49:51</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Order number</Typography>
                  <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                    <Typography variant="body1" color="initial">P2023122717195059659284</Typography>
                    <IconButton>
                      <ContentCopyIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Stack>
                </Stack>
              </Box>
              <Box sx={{ mb: 2, padding: '15px', borderRadius: '10px', border: '1px solid white', background: zubgback, }}>
                <Stack direction='row' sx={{ paddingBottom: '10px', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid white' }}>
                  <Box>
                    <Button sx={{ background: zubgmid, color: 'white', textTransform: 'capitalize' }}>Deposit</Button>
                  </Box>
                  <Box>
                    <Button sx={{ color: 'green', textTransform: 'capitalize' }}>Complete</Button>
                    <IconButton>
                      <ArrowForwardIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Box>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Balance</Typography>
                  <Typography variant="body1" color="initial">₹9,000.00</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Type</Typography>
                  <Typography variant="body1" color="initial">iCEPay-APP</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Time</Typography>
                  <Typography variant="body1" color="initial">2023-12-27 22:49:51</Typography>
                </Stack>
                <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                  <Typography variant="body1" color="initial">Order number</Typography>
                  <Stack direction='row' sx={{ mb: '10px', alignItems: 'center', justifyContent: 'space-between', '&>p': { color: 'white' } }}>
                    <Typography variant="body1" color="initial">P2023122717195059659284</Typography>
                    <IconButton>
                      <ContentCopyIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Stack>
                </Stack>
              </Box>
              <Button sx={style.paytmbtntwo}>All history</Button>
            </Box>
          </Box>

        }
      </Container >
    </Layout >
  )
}

export default WalletRecharge

const style = {
  header: {
    padding: '8px', background: zubgback, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    position: 'sticky', top: 0,
    '&>p': { color: 'white !important', ml: '-30px' }, '&>a>svg': { color: 'white', fontSize: '25px' }
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
  paytmbtntwo: { borderRadius: '30px', textTransform: 'capitalize', mb: 2, background: zubgbackgrad, color: 'white !important', width: '100%', mt: '20px', border: "1px solid white", padding: '10px', '&:hover': { background: zubgbackgrad, border: "1px solid transparent", } },
  rechargeinstext: { mb: '10px', alignItems: 'center', justifyContent: 'start', '&>p': { marginLeft: '10px', color: 'white !important', fontSize: '14px' }, }
};

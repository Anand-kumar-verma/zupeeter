
import { Container, Typography, Box, IconButton, InputAdornment, OutlinedInput, FormControl, Select, Stack } from '@mui/material'
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import Layout from '../../component/Layout/Layout';
import { NavLink } from 'react-router-dom';
import wallet from '../../assets/images/wallet.png'
import rechargeIcon from '../../assets/images/deposit.png'
import withdrow from '../../assets/images/cash-withdrawal.png'
import wdhistory from '../../assets/images/history.png'
import deposite from '../../assets/images/payment.png'
import Lottery from '../../assets/Lottery.png'
import { bgcolorgradient, zubgback, zubgbackgrad, zubgmid } from '../../Shared/color';


function Wallet() {

  return (
    <Layout>
      <Container sx={{ background: zubgback, width: '100%', height: '100vh', overflow: 'auto' }}>
        <Box sx={style.header}>
          <Box component={NavLink} to='/promotion/'>
            <KeyboardArrowLeftOutlinedIcon />
          </Box>
          <Typography variant="body1" color="initial">Wallet</Typography>
          <Box component={NavLink} to='/promotion/'>

          </Box>
        </Box>

        {/*  */}
        <Box sx={{ pt: 2, pb: 4, width: '100%', background: zubgmid, }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} className='walletBox'>
              <Box component='img' src={wallet} width={50} ></Box>
              <Typography variant="h2" color="initial" >₹3,077.72</Typography>
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
              '&>a>img': { margin: 'auto' }, mt: '30px',
            }} >
              <NavLink to='/wallet/Recharge'>
                <Box component='img' src={withdrow} width={50}></Box>
                <Typography variant="body1" color="initial" mt={1}>Withdraw</Typography>
              </NavLink>
            </Box>
            <Box sx={{
              width: '24%', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center',
              '&>a>p': { fontSize: '12px', color: 'white', textAlign: 'center' }, mt: '30px',
              '&>a>img': { margin: 'auto' }, mt: '30px',
            }} >
              <NavLink to='/wallet/Recharge'>
                <Box component='img' src={wdhistory} width={50}></Box>
                <Typography variant="body1" color="initial" mt={1}>Deposit <br />history</Typography>
              </NavLink>
            </Box>
            <Box sx={{
              width: '24%', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center',
              '&>a>p': { fontSize: '12px', color: 'white', textAlign: 'center' },
              '&>a>img': { margin: 'auto' }, mt: '30px',
            }} >
              <NavLink to='/wallet/Recharge'>
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
      </Container >
    </Layout >
  )
}

export default Wallet

const style = {
  header: {
    padding: '8px', background: zubgback, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    position: 'sticky', top: 0,
    '&>p': { color: 'white !important', ml: '-30px' }, '&>a>svg': { color: 'white', fontSize: '25px' },
  },
  wthui: {
    textAlign: 'center', width: '32%', minHeight: '15vh', background: zubgmid, borderRadius: '10px', mb: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
    '&>div>p': { color: 'white' },
  },
};


// import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
// import {
//   Box,
//   CircularProgress,
//   Container,
//   Typography
// } from "@mui/material";
// import axios from "axios";
// import React, { useState } from "react";
// import toast from "react-hot-toast";
// import { useQuery } from "react-query";
// import { useNavigate } from "react-router-dom";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import Icon1 from "../../assets/images/icon1.png";
// import Icon2 from "../../assets/images/icon2.png";
// import Layout from "../../component/Layout/Layout";
// import { endpoint, rupees } from "../../services/urls";
// function Wallet() {
//   const navigate = useNavigate();
//   const login_data = localStorage.getItem("logindata");
//   const user_id = JSON.parse(login_data).UserID;
//   const [select_type_of_history, setselect_type_of_history] = useState(1);

//   const { isLoading, data } = useQuery(
//     ["withdrawallet"],
//     () => withdowaWalletFn(),
//     {
//       refetchOnMount: false,
//       refetchOnReconnect: true,
//     }
//   );

//   const withdowaWalletFn = async () => {
//     try {
//       const response = await axios.get(`${endpoint.profiledata}?id=${user_id}`);
//       return response;
//     } catch (e) {
//       toast(e?.message);
//       console.log(e);
//     }
//   };

//   const wallet_data = data?.data || {};
//   if (isLoading)
//     return (
//       <Layout>
//         <CircularProgress />
//       </Layout>
//     );
//   return (
//     <Layout>
//       <Box sx={styles.root}>
//         <Container>
//           <div className="h-screen">
//             <div
//               style={{
//                 background: "linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)",
//               }}
//               className="grid place-items-center rounded-b-[50px]"
//             >
//               <span className="py-[8%]">Wallet</span>
//             </div>
//             <div className="bg-white !bg-opacity-10 rounded-lg p-5 mt-3 flex flex-col w-full items-center">
//               <img
//                 className="w-10 h-10"
//                 src="https://zupeeter.com/application/libraries/user_assets/gouser.svg"
//               />
//               <p className="text-xl !text-white font-bold">Member</p>
//               <div className="flex justify-between w-full mt-3">
//                 <Box>
//                   <Box className="serv-item cursor-pointer">
//                     <Box
//                       component="img"
//                       src={Icon1}
//                       alt="Deposit"
//                       sx={styles.depositWithdrawIcon}
//                       onClick={() => navigate("/view_fund_request")}
//                     />
//                   </Box>
//                   <Typography
//                     variant="body1"
//                     color="initial"
//                     className="db-header"
//                   >
//                     Deposit
//                   </Typography>
//                 </Box>
//                 <div className="">
//                   <p className="text-4xl font-bold">
//                     {rupees}{" "}
//                     {Number(wallet_data?.withdrawal?.withdrawal || 0)?.toFixed(
//                       2
//                     )}
//                   </p>
//                   <p className="!text-white">Withdrawal Wallet</p>
//                 </div>
//                 <Box>
//                   <Box className="serv-item">
//                     <Box
//                       onClick={() => navigate("/view_width_request")}
//                       component="img"
//                       src={Icon2}
//                       alt="Withdraw"
//                       sx={styles.depositWithdrawIcon}
//                       className="!cursor-pointer"
//                     />
//                   </Box>
//                   <Typography
//                     variant="body1"
//                     color="initial"
//                     className="db-header"
//                   >
//                     Withdraw
//                   </Typography>
//                 </Box>
//               </div>
//             </div>
//             <div className="w-full grid grid-cols-2 mt-3">
//               <div
//                 onClick={() => setselect_type_of_history(1)}
//                 style={{
//                   background: `${
//                     select_type_of_history === 1
//                       ? "linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)"
//                       : ""
//                   }`,
//                 }}
//                 className="cursor-pointer  place-items-center flex w-full justify-center items-center flex-col rounded-lg py-2"
//               >
//                 <AccountBalanceWalletIcon className="!w-[40px] !h-[40px]" />
//                 <p className="text-sm">Deposit History</p>
//               </div>
//               <div
//                 onClick={() => setselect_type_of_history(2)}
//                 style={{
//                   background: `${
//                     select_type_of_history === 2
//                       ? "linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)"
//                       : ""
//                   }`,
//                 }}
//                 className="cursor-pointer place-items-center flex w-full justify-center items-center flex-col rounded-lg py-2"
//               >
//                 <AccountBalanceWalletIcon className="!w-[40px] !h-[40px]" />
//                 <p className="text-sm">Withdrawal History</p>
//               </div>
//             </div>
//           </div>
//         </Container>
//       </Box>
//     </Layout>
//   );
// }

// export default Wallet;

// const styles = {
//   root: { background: "#202020", pb: 6 },
//   depositWithdrawIcon: { width: "30px", height: "30px" },
// };

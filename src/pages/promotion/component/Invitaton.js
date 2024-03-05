import { Container, Typography, Box, Stack, } from '@mui/material'
import * as React from 'react';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';

import { NavLink } from 'react-router-dom';
import posterbg from '../.././../assets/images/posterbg.png'
import posterlogo from '../.././../assets/images/posterlogo.png'
import tmsbg from '../.././../assets/images/tms.png'
import car from '../.././../assets/images/car.png'
import bank from '../.././../assets/images/bank.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';





function Invitaton() {

  return (
    <Container sx={{ background: '#292929', width: '100%', }}>
      <Box sx={style.header}>
        <Box component={NavLink} to='/promotion/'>
          <KeyboardArrowLeftOutlinedIcon />
        </Box>
        <Typography variant="body1" color="initial">Invite</Typography>
        <Typography variant="body1" color="initial"> </Typography>
      </Box>
      <Box my={3}>
        <Typography variant="body1" color="initial" sx={{ color: 'white', textAlign: 'center', }}>Please swipe left - right to choose your favorite poster</Typography>
      </Box>

      <Swiper pagination={{ dynamicBullets: false, }} modules={[Pagination]} className="mySwiper"
        slidesPerView={1.2}
        spaceBetween={5}
        centeredSlides={true}
      >
        <SwiperSlide>
          <Box sx={{ backgroundImage: `url(${posterbg})`, width: '100%', padding: '30px 15px', backgroundSize: 'contain', backgroundSize: '100% 100%' }}>
            <Box component='img' src={posterlogo} sx={{ width: '100px !important' }}></Box>
            <Box sx={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              '&>p': { fontSize: '12px', color: 'white', fontWeight: '500' }
            }}>
              <Typography variant="body1" color="initial">Welcome to <br /> BDG Game</Typography>

              <Box sx={{
                backgroundImage: `url(${tmsbg})`, padding: '10px', backgroundSize: '100% 100%', textAlign: 'center',
                '&>p': { color: '#ff3737', fontWeight: '600', fontSize: '12px', }
              }}>
                <Typography variant="body1" color="initial"> Fair <br /> and justice</Typography>
              </Box>
              <Box sx={{
                backgroundImage: `url(${tmsbg})`, padding: '10px', backgroundSize: '100% 100%', textAlign: 'center',
                '&>p': { color: '#ff3737', fontWeight: '600', fontSize: '12px', }
              }}>
                <Typography variant="body1" color="initial"> Open and <br /> transparent</Typography>
              </Box>
            </Box>
            <Box sx={{ textAlign: 'center', mt: 2, '&>p': { fontSize: '30px', color: 'white', fontWeight: '600' } }}>
              <Typography variant="body1" color="initial">Full Odds  <br />Bonus  Rate</Typography>
            </Box>
            <Stack direction='row' sx={{
              alignItems: 'center', justifyContent: 'center',
              '&>div': { marginRight: '20px', marginTop: '20px', border: '1px solid white', borderRadius: '10PX', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', },
              '&>div>img': { width: '50px', height: '50px' },
              '&>div>p': { fontSize: '14px', color: 'white' },
            }}>
              <Box>
                <Box component='img' src={bank}></Box>
                <Typography variant="body1" color="initial"> Financial security</Typography>
              </Box>
              <Box>
                <Box component='img' src={car}></Box>
                <Typography variant="body1" color="initial"> Quick withdrawal</Typography>
              </Box>
            </Stack>
            <Box sx={{ my: 2, textAlign: 'center', '&>h6': { color: 'white' } }}>
              <Typography variant="h6" color="initial">Permanent<br /> commission up to 85%</Typography>
            </Box>
            <Box SX={{ marginTop: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <Box sx={{ background: 'red', width: '100px', height: '100px', margin: 'auto' }}></Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ backgroundImage: `url(${posterbg})`, width: '100%', padding: '30px 15px', backgroundSize: 'contain', backgroundSize: '100% 100%' }}>
            <Box component='img' src={posterlogo} sx={{ width: '100px !important' }}></Box>
            <Box sx={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              '&>p': { fontSize: '12px', color: 'white', fontWeight: '500' }
            }}>
              <Typography variant="body1" color="initial">Welcome to <br /> BDG Game</Typography>

              <Box sx={{
                backgroundImage: `url(${tmsbg})`, padding: '10px', backgroundSize: '100% 100%', textAlign: 'center',
                '&>p': { color: '#ff3737', fontWeight: '600', fontSize: '12px', }
              }}>
                <Typography variant="body1" color="initial"> Fair <br /> and justice</Typography>
              </Box>
              <Box sx={{
                backgroundImage: `url(${tmsbg})`, padding: '10px', backgroundSize: '100% 100%', textAlign: 'center',
                '&>p': { color: '#ff3737', fontWeight: '600', fontSize: '12px', }
              }}>
                <Typography variant="body1" color="initial"> Open and <br /> transparent</Typography>
              </Box>
            </Box>
            <Box sx={{ textAlign: 'center', mt: 2, '&>p': { fontSize: '30px', color: 'white', fontWeight: '600' } }}>
              <Typography variant="body1" color="initial">Full Odds  <br />Bonus  Rate</Typography>
            </Box>
            <Stack direction='row' sx={{
              alignItems: 'center', justifyContent: 'center',
              '&>div': { marginRight: '20px', marginTop: '20px', border: '1px solid white', borderRadius: '10PX', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', },
              '&>div>img': { width: '50px', height: '50px' },
              '&>div>p': { fontSize: '14px', color: 'white' },
            }}>
              <Box>
                <Box component='img' src={bank}></Box>
                <Typography variant="body1" color="initial"> Financial security</Typography>
              </Box>
              <Box>
                <Box component='img' src={car}></Box>
                <Typography variant="body1" color="initial"> Quick withdrawal</Typography>
              </Box>
            </Stack>
            <Box sx={{ my: 2, textAlign: 'center', '&>h6': { color: 'white' } }}>
              <Typography variant="h6" color="initial">Permanent<br /> commission up to 85%</Typography>
            </Box>
            <Box SX={{ marginTop: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <Box sx={{ background: 'red', width: '100px', height: '100px', margin: 'auto' }}></Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ backgroundImage: `url(${posterbg})`, width: '100%', padding: '30px 15px', backgroundSize: 'contain', backgroundSize: '100% 100%' }}>
            <Box component='img' src={posterlogo} sx={{ width: '100px !important' }}></Box>
            <Box sx={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              '&>p': { fontSize: '12px', color: 'white', fontWeight: '500' }
            }}>
              <Typography variant="body1" color="initial">Welcome to <br /> BDG Game</Typography>

              <Box sx={{
                backgroundImage: `url(${tmsbg})`, padding: '10px', backgroundSize: '100% 100%', textAlign: 'center',
                '&>p': { color: '#ff3737', fontWeight: '600', fontSize: '12px', }
              }}>
                <Typography variant="body1" color="initial"> Fair <br /> and justice</Typography>
              </Box>
              <Box sx={{
                backgroundImage: `url(${tmsbg})`, padding: '10px', backgroundSize: '100% 100%', textAlign: 'center',
                '&>p': { color: '#ff3737', fontWeight: '600', fontSize: '12px', }
              }}>
                <Typography variant="body1" color="initial"> Open and <br /> transparent</Typography>
              </Box>
            </Box>
            <Box sx={{ textAlign: 'center', mt: 2, '&>p': { fontSize: '30px', color: 'white', fontWeight: '600' } }}>
              <Typography variant="body1" color="initial">Full Odds  <br />Bonus  Rate</Typography>
            </Box>
            <Stack direction='row' sx={{
              alignItems: 'center', justifyContent: 'center',
              '&>div': { marginRight: '20px', marginTop: '20px', border: '1px solid white', borderRadius: '10PX', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', },
              '&>div>img': { width: '50px', height: '50px' },
              '&>div>p': { fontSize: '14px', color: 'white' },
            }}>
              <Box>
                <Box component='img' src={bank}></Box>
                <Typography variant="body1" color="initial"> Financial security</Typography>
              </Box>
              <Box>
                <Box component='img' src={car}></Box>
                <Typography variant="body1" color="initial"> Quick withdrawal</Typography>
              </Box>
            </Stack>
            <Box sx={{ my: 2, textAlign: 'center', '&>h6': { color: 'white' } }}>
              <Typography variant="h6" color="initial">Permanent<br /> commission up to 85%</Typography>
            </Box>
            <Box SX={{ marginTop: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <Box sx={{ background: 'red', width: '100px', height: '100px', margin: 'auto' }}></Box>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>


      <Stack direction='row' sx={{
        alignItems: 'center', justifyContent: 'space-between', padding: 2,
        '&>p:nth-child(1)': { color: 'white', fontSize: '14px', fontWeight: 500 },
        '&>p:nth-child(2)': { color: 'white', fontSize: '14px', fontWeight: 500 },
        '&>p:nth-child(2)>span': { color: '#FFB857', fontSize: '14px', fontWeight: 500 },
      }}>
        <Typography variant="body1" color="initial">Invite friends</Typography>
        <Typography variant="body1" color="initial">Income  <span> 10 billion </span> Commission</Typography>
      </Stack>
      <Box sx={style.invitebutton}>
        <NavLink to="/promotion/PromotionShare">
          <Typography >INVITATION LINK</Typography>
        </NavLink>
      </Box>
      <Box sx={style.invitebuttontwo}>
        <NavLink to="/promotion/PromotionShare">
          <Typography >Copy invitation link</Typography>
        </NavLink>
      </Box>
    </Container >
  )
}

export default Invitaton

const style = {
  header: {
    padding: '8px', background: '#3F3F3F', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    '&>p': { color: 'white' }, '&>a>svg': { color: 'white', fontSize: '25px' }
  },
  invitebutton: {
    width: '100%', background: '#292929', paddingTop: '40px', mt: '-10px',
    '&>a>p': { width: '80%', marginLeft: '10%', borderRadius: '20px', textAlign: 'center', padding: '10px', background: 'linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)', color: '#8f5206', fontSize: '17px', fontWeight: 600 }
  },
  invitebuttontwo: {
    width: '100%', background: 'transparent', paddingTop: '40px', mt: '-10px', pb: 5,
    '&>a>p': { width: '80%', marginLeft: '10%', borderRadius: '20px', textAlign: 'center', padding: '10px', background: 'transparent', color: '#8f5206', fontSize: '17px', fontWeight: 600, border: '1px solid #FFB765', }
  },
};



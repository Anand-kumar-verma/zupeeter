import React from 'react';
import {
  Container, Typography, Box, Stack, TextField, Button
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import TelegramIcon from '@mui/icons-material/Telegram';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import one from '../../assets/images/1.png';
import two from '../../assets/images/2.png';
import three from '../../assets/images/3.png';
import Icon1 from '../../assets/images/icon1.png';
import Icon2 from '../../assets/images/icon2.png';
import wingo from '../../assets/images/wingo.webp';
import ludo from '../../assets/images/ludo.webp';
import ludotwo from '../../assets/images/lodu2.webp'
import ludothree from '../../assets/images/lodu3.webp'
import ludofour from '../../assets/images/lodu4.webp'
import ludofive from '../../assets/images/lodu5.webp'
import ludosix from '../../assets/images/lodu6.webp'
import { NavLink } from 'react-router-dom';
import Layout from '../../component/Layout/Layout';

function Dashboard() {
  return (
    <Layout>
      <Box sx={styles.root}>
        <Container>
          <Typography variant="body1" sx={styles.dashboardTitle}>Dashboard</Typography>
          <Box>
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false }} pagination={{ clickable: true }} navigation={false} modules={[Autoplay, Pagination, Navigation]} className="mySwiper">
              <SwiperSlide>
                <Box component="img" src={one} alt="Slide 1" sx={styles.swiperImage} />
              </SwiperSlide>
              <SwiperSlide>
                <Box component="img" src={two} alt="Slide 2" sx={styles.swiperImage} />
              </SwiperSlide>
              <SwiperSlide>
                <Box component="img" src={three} alt="Slide 3" sx={styles.swiperImage} />
              </SwiperSlide>
            </Swiper>
          </Box>
          <Stack direction="row" sx={styles.depositWithdrawContainer}>
            <Box component={NavLink}>
              <Box className="serv-item">
                <Box component="img" src={Icon1} alt="Deposit" sx={styles.depositWithdrawIcon} />
              </Box>
              <Typography variant="body1" color="initial" className='db-header'>Deposit</Typography>
            </Box>
            <Box>
              <Typography variant="body1" color="initial" className='b-val'>₹ 359.36</Typography>
              <Typography variant="body1" color="initial" className='b-valp'>Available Balance</Typography>
            </Box>
            <Box component={NavLink}>
              <Box className="serv-item">
                <Box component="img" src={Icon2} alt="Withdraw" sx={styles.depositWithdrawIcon} />
              </Box>
              <Typography variant="body1" color="initial" className='db-header'>Withdraw</Typography>
            </Box>
          </Stack>
          <Box sx={styles.referralLinkContainer}>
            <Typography variant='body1' sx={styles.referralLinkTitle}>Referral Link</Typography>
            <Stack direction='row' sx={styles.referralLinkInputContainer}>
              <TextField className='dbinput' fullWidth value='https://zupeeter.com/auth/registration/WlcxMjM0NTY3' sx={styles.referralLinkInput} />
              <Button variant='contained' className='whitebtn' sx={styles.referralLinkButton}>Copy</Button>
            </Stack>
            <Stack direction='row' sx={styles.socialButtonsContainer}>
              <Button className='telegrambtn' sx={styles.telegramButton}>
                <Stack>
                  <Box sx={styles.socialButtonIcon}>
                    <TelegramIcon sx={styles.socialIcon} />
                  </Box>
                  <Box sx={styles.socialButtonText}>telegram</Box>
                </Stack>
              </Button>
              <Button className='supportbtn' sx={styles.supportButton}>
                <Stack>
                  <HelpOutlineIcon sx={styles.socialIconinfo} />
                  <Box sx={styles.socialButtonText}>telegram</Box>
                </Stack>
              </Button>
            </Stack>
          </Box>
          <Box sx={{ mt: 5 }} >
            <Box component={NavLink}>
              <Box className="wingoc1" >
                <Box sx={styles.gameImage}>
                  <Box component='img' src={wingo} alt="Wingo" />
                </Box>
                <Box>
                  <Typography variant="h5" sx={styles.gameTitle}>Win Go 1 Min</Typography>
                  <Typography variant="body1" sx={styles.gameDescription}>Guess number/Green/Purple/Red to win</Typography>
                </Box>
              </Box>
              <Box sx={{ background: 'white' }}>
                <Box class="slider-item">
                  <Box class="idiv">
                    <Box sx={styles.userImage}>
                      <Box component='img' src="https://zupeeter.com/application/libraries/user_assets/gouser.svg" class="d-inline w-40" alt="user" />
                    </Box>
                    <Typography variant="body1" color="initial">Imtiyaz Ahmad</Typography>
                    <Typography variant="body1" color="initial">Winning Amount ₹ 10</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ mt: 5 }} >
            <Box component={NavLink}>
              <Box className="wingoc1" >
                <Box sx={styles.gameImage}>
                  <Box component='img' src={wingo} alt="Wingo" />
                </Box>
                <Box>
                  <Typography variant="h5" sx={styles.gameTitle}>Win Go 3 Min</Typography>
                  <Typography variant="body1" sx={styles.gameDescription}>Guess number/Green/Purple/Red to win</Typography>
                </Box>
              </Box>
              <Box sx={{ background: 'white' }}>
                <Box class="slider-item">
                  <Box class="idiv">
                    <Box sx={styles.userImage}>
                      <Box component='img' src="https://zupeeter.com/application/libraries/user_assets/gouser.svg" class="d-inline w-40" alt="user" />
                    </Box>
                    <Typography variant="body1" color="initial">Imtiyaz Ahmad</Typography>
                    <Typography variant="body1" color="initial">Winning Amount ₹ 10</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ mt: 5, mb: 2 }} >
            <Box component={NavLink}>
              <Box className="wingoc1" >
                <Box sx={styles.gameImage}>
                  <Box component='img' src={wingo} alt="Wingo" />
                </Box>
                <Box>
                  <Typography variant="h5" sx={styles.gameTitle}>Win Go 5 Min</Typography>
                  <Typography variant="body1" sx={styles.gameDescription}>Guess number/Green/Purple/Red to win</Typography>
                </Box>
              </Box>
              <Box sx={{ background: 'white' }}>
                <Box class="slider-item">
                  <Box class="idiv">
                    <Box sx={styles.userImage}>
                      <Box component='img' src="https://zupeeter.com/application/libraries/user_assets/gouser.svg" class="d-inline w-40" alt="user" />
                    </Box>
                    <Typography variant="body1" color="initial">Imtiyaz Ahmad</Typography>
                    <Typography variant="body1" color="initial">Winning Amount ₹ 10</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ padding: 1 }}>
            <Box className="coming-text"> Coming Soon</Box>
          </Box>
          <Box className="bgcardbox">
            <Box className="bgcardboxda">
              <Box sx={{ width: '100%', height: "130px", position: 'absolute', top: '-20px', }}>
                <Box sx={{ width: '60%', height: '90px', marginLeft: '20%' }}>
                  <Box component='img' src={ludo}></Box>
                </Box>
                <Typography variant="body1" color="initial" sx={{ textAlign: 'center', mt: '10px', fontSize: '15px', fontWeight: '500' }}>Ludo Supreme</Typography>
              </Box>
            </Box>
            <Box className="bgcardboxda">
              <Box sx={{ width: '100%', height: "130px", position: 'absolute', top: '-20px', }}>
                <Box sx={{ width: '60%', height: '90px', marginLeft: '20%' }}>
                  <Box component='img' src={ludotwo}></Box>
                </Box>
                <Typography variant="body1" color="initial" sx={{ textAlign: 'center', mt: '10px', fontSize: '15px', fontWeight: '500' }}>Ludo Ninja
                </Typography>
              </Box>
            </Box>
            <Box className="bgcardboxda">
              <Box sx={{ width: '100%', height: "130px", position: 'absolute', top: '-20px', }}>
                <Box sx={{ width: '60%', height: '90px', marginLeft: '20%' }}>
                  <Box component='img' src={ludothree}></Box>
                </Box>
                <Typography variant="body1" color="initial" sx={{ textAlign: 'center', mt: '10px', fontSize: '15px', fontWeight: '500' }}>Ludo Turbo
                </Typography>
              </Box>
            </Box>
            <Box className="bgcardboxda">
              <Box sx={{ width: '100%', height: "130px", position: 'absolute', top: '-20px', }}>
                <Box sx={{ width: '60%', height: '90px', marginLeft: '20%' }}>
                  <Box component='img' src={ludosix}></Box>
                </Box>
                <Typography variant="body1" color="initial" sx={{ textAlign: 'center', mt: '10px', fontSize: '15px', fontWeight: '500' }}>Snakes & Ladders Plus
                </Typography>
              </Box>
            </Box>
            <Box className="bgcardboxda">
              <Box sx={{ width: '100%', height: "130px", position: 'absolute', top: '-20px', }}>
                <Box sx={{ width: '60%', height: '90px', marginLeft: '20%' }}>
                  <Box component='img' src={ludofive}></Box>
                </Box>
                <Typography variant="body1" color="initial" sx={{ textAlign: 'center', mt: '10px', fontSize: '15px', fontWeight: '500' }}>Trump Cards Mania
                </Typography>
              </Box>
            </Box>
            <Box className="bgcardboxda">
              <Box sx={{ width: '100%', height: "130px", position: 'absolute', top: '-20px', }}>
                <Box sx={{ width: '60%', height: '90px', marginLeft: '20%' }}>
                  <Box component='img' src={ludofour}></Box>
                </Box>
                <Typography variant="body1" color="initial" sx={{ textAlign: 'center', mt: '10px', fontSize: '15px', fontWeight: '500' }}>Ludo Supreme League</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}

export default Dashboard;

const styles = {
  root: { background: '#202020', pb: 6 },
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




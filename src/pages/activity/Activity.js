import React from 'react';
import { Container, Typography, Box, TextField } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ludo from '../../assets/images/ludo.webp';
import ludotwo from '../../assets/images/lodu2.webp'
import ludothree from '../../assets/images/lodu3.webp'
import ludofour from '../../assets/images/lodu4.webp'
import ludofive from '../../assets/images/lodu5.webp'
import ludosix from '../../assets/images/lodu6.webp'
import Layout from '../../component/Layout/Layout';

function Activity() {
  return (
    <Layout>
      <Box sx={styles.root}>
        <Container>
          <Box sx={{ padding: 2, borderBottom: '1px solid white' }}>
            <ArrowBackIcon sx={{ color: 'white !important' }} />
            <TextField fullWidth placeholder='Search here' id="fullWidth" className='searchInput' />
          </Box>
          <Box >
            <Box className="coming-text"> Coming Soon</Box>
          </Box>
          <Box className="bgcardbox">
            <Box className="bgcardboxda">
              <Box sx={{ width: '100%', height: "130px", position: 'absolute', top: '-20px', }}>
                <Box sx={{ width: '60%', height: '90px', marginLeft: '20%' }}>
                  <Box component='img' src={ludo}></Box>
                </Box>
                <Typography variant="body1" color="initial" sx={{ textAlign: 'center', mt: '20px', fontSize: '15px', fontWeight: '500' }}>Ludo Supreme</Typography>
              </Box>
            </Box>
            <Box className="bgcardboxda">
              <Box sx={{ width: '100%', height: "130px", position: 'absolute', top: '-20px', }}>
                <Box sx={{ width: '60%', height: '90px', marginLeft: '20%' }}>
                  <Box component='img' src={ludotwo}></Box>
                </Box>
                <Typography variant="body1" color="initial" sx={{ textAlign: 'center', mt: '20px', fontSize: '15px', fontWeight: '500' }}>Ludo Ninja
                </Typography>
              </Box>
            </Box>
            <Box className="bgcardboxda">
              <Box sx={{ width: '100%', height: "130px", position: 'absolute', top: '-20px', }}>
                <Box sx={{ width: '60%', height: '90px', marginLeft: '20%' }}>
                  <Box component='img' src={ludothree}></Box>
                </Box>
                <Typography variant="body1" color="initial" sx={{ textAlign: 'center', mt: '20px', fontSize: '15px', fontWeight: '500' }}>Ludo Turbo
                </Typography>
              </Box>
            </Box>
            <Box className="bgcardboxda">
              <Box sx={{ width: '100%', height: "130px", position: 'absolute', top: '-20px', }}>
                <Box sx={{ width: '60%', height: '90px', marginLeft: '20%' }}>
                  <Box component='img' src={ludosix}></Box>
                </Box>
                <Typography variant="body1" color="initial" sx={{ textAlign: 'center', mt: '20px', fontSize: '15px', fontWeight: '500' }}>Snakes & Ladders Plus
                </Typography>
              </Box>
            </Box>
            <Box className="bgcardboxda">
              <Box sx={{ width: '100%', height: "130px", position: 'absolute', top: '-20px', }}>
                <Box sx={{ width: '60%', height: '90px', marginLeft: '20%' }}>
                  <Box component='img' src={ludofive}></Box>
                </Box>
                <Typography variant="body1" color="initial" sx={{ textAlign: 'center', mt: '20px', fontSize: '15px', fontWeight: '500' }}>Trump Cards Mania
                </Typography>
              </Box>
            </Box>
            <Box className="bgcardboxda">
              <Box sx={{ width: '100%', height: "130px", position: 'absolute', top: '-20px', }}>
                <Box sx={{ width: '60%', height: '90px', marginLeft: '20%' }}>
                  <Box component='img' src={ludofour}></Box>
                </Box>
                <Typography variant="body1" color="initial" sx={{ textAlign: 'center', mt: '20px', fontSize: '15px', fontWeight: '500' }}>Ludo Supreme League</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}

export default Activity;

const styles = {
  root: { background: '#202020', pb: 6, height: '100vh' },
  dashboardTitle: { textAlign: 'center', color: 'white !important', fontSize: '21px', fontWeight: '500' },
};




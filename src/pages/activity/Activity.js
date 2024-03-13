import { Box, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { zubgback } from '../../Shared/color';
import ludotwo from '../../assets/images/lodu2.webp';
import ludothree from '../../assets/images/lodu3.webp';
import ludofour from '../../assets/images/lodu4.webp';
import ludofive from '../../assets/images/lodu5.webp';
import ludosix from '../../assets/images/lodu6.webp';
import ludo from '../../assets/images/ludo.webp';
import Layout from '../../component/Layout/Layout';


function Activity() {

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Layout>
      <Container sx={{ background: zubgback, width: '100%', height: '100vh', overflow: 'auto', mb: 7 }}>
        <Box sx={style.header}>
          <Box >
          </Box>
          <Typography variant="body1" color="initial" sx={{ mt: 2, fontSize: '16px', fontWeight: '600' }}>Activity</Typography>
          <Box >
          </Box>
        </Box>
        <Box className="bgcardbox">
          <Box className="bgcardboxda">
            <Box sx={{ width: '100%', height: "160px", }}>
              <Box sx={{ width: '60%', height: '50%', marginLeft: '20%', marginTop: '10%' }}>
                <Box component='img' src={ludo} sx={{ width: '100%', height: '100%' }}></Box>
              </Box>
              <Typography variant="body1" color="initial" sx={{ textAlign: 'center', mt: '10px', fontSize: '15px', fontWeight: '500', color: 'white' }}>Ludo Supreme</Typography>
            </Box>
          </Box>
          <Box className="bgcardboxda">
            <Box sx={{ width: '100%', height: "160px", }}>
              <Box sx={{ width: '60%', height: '50%', marginLeft: '20%', marginTop: '10%' }}>
                <Box component='img' src={ludotwo} sx={{ width: '100%', height: '100%' }}></Box>
              </Box>
              <Typography variant="body1" color="initial" sx={{ textAlign: 'center', mt: '10px', fontSize: '15px', fontWeight: '500', color: 'white' }}>Ludo Ninja
              </Typography>
            </Box>
          </Box>
          <Box className="bgcardboxda">
            <Box sx={{ width: '100%', height: "160px", }}>
              <Box sx={{ width: '60%', height: '50%', marginLeft: '20%', marginTop: '10%' }}>
                <Box component='img' src={ludothree} sx={{ width: '100%', height: '100%' }}></Box>
              </Box>
              <Typography variant="body1" color="initial" sx={{ textAlign: 'center', mt: '10px', fontSize: '15px', fontWeight: '500', color: 'white' }}>Ludo Turbo
              </Typography>
            </Box>
          </Box>
          <Box className="bgcardboxda">
            <Box sx={{ width: '100%', height: "160px", }}>
              <Box sx={{ width: '60%', height: '50%', marginLeft: '20%', marginTop: '10%' }}>
                <Box component='img' src={ludofour} sx={{ width: '100%', height: '100%' }}></Box>
              </Box>
              <Typography variant="body1" color="initial" sx={{ textAlign: 'center', mt: '10px', fontSize: '15px', fontWeight: '500', color: 'white' }}>Snakes & Ladders Plus
              </Typography>
            </Box>
          </Box>
          <Box className="bgcardboxda">
            <Box sx={{ width: '100%', height: "160px", }}>
              <Box sx={{ width: '60%', height: '50%', marginLeft: '20%', marginTop: '10%' }}>
                <Box component='img' src={ludofive} sx={{ width: '100%', height: '100%' }}></Box>
              </Box>
              <Typography variant="body1" color="initial" sx={{ textAlign: 'center', mt: '10px', fontSize: '15px', fontWeight: '500', color: 'white' }}>Trump Cards Mania
              </Typography>
            </Box>
          </Box>
          <Box className="bgcardboxda">
            <Box sx={{ width: '100%', height: "160px", }}>
              <Box sx={{ width: '60%', height: '50%', marginLeft: '20%', marginTop: '10%' }}>
                <Box component='img' src={ludosix} sx={{ width: '100%', height: '100%' }}></Box>
              </Box>
              <Typography variant="body1" color="initial" sx={{ textAlign: 'center', mt: '10px', fontSize: '15px', fontWeight: '500', color: 'white' }}>Ludo Supreme League</Typography>
            </Box>
          </Box>
        </Box>
      </Container >
    </Layout >
  )
}

export default Activity

const style = {
  header: {
    padding: '8px', background: zubgback, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    '&>p': { color: 'white !important', ml: '-30px' }, '&>a>svg': { color: 'white', fontSize: '25px' }
  },
  dashboardTitle: { textAlign: 'center', color: 'white !important', fontSize: '21px', fontWeight: '500' },
};










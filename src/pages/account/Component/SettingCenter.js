import * as React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, Container, Stack, Typography } from '@mui/material';
import profile from '../../../assets/images/profile.jpg';
import synchronize from '../../../assets/images/synchronize.png';
import mail from '../../../assets/images/letter.png';
import updated from '../../../assets/images/updated.png';
import Layout from '../../../component/Layout/Layout';
import { zubgback, zubgbackgrad, zubgmid } from '../../../Shared/color';

function SettingCenter() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Layout>
      <Container sx={style.container}>
        <Box sx={style.header}>
          <Box component={NavLink} onClick={() => goBack()}>
            <KeyboardArrowLeftOutlinedIcon />
          </Box>
          <Typography variant="body1" color="initial">Settings</Typography>
          <Typography variant="body1" color="initial"> </Typography>
        </Box>
        <Box sx={style.sectionBox}>
          <Stack direction={'row'} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Box component='img' src={profile} sx={style.profileImage}></Box>
            <Typography variant="body1" color="initial" sx={style.textWithIcon}>
              Change Profile <NavigateNextIcon sx={{ color: 'white', marginLeft: '10PX' }} />
            </Typography>
          </Stack>
          <Stack direction={'row'} sx={{ alignItems: 'center', justifyContent: 'space-between', mt: '30px' }}>
            <Typography variant="body1" color="initial" sx={style.textWithIcon}>
              Nickname
            </Typography>
            <Typography variant="body1" color="initial" sx={style.textWithIcon}>
              Brijeshkumar <NavigateNextIcon sx={{ color: 'white', marginLeft: '10PX' }} />
            </Typography>
          </Stack>
          <Stack direction={'row'} sx={{ alignItems: 'center', justifyContent: 'space-between', mt: '30px' }}>
            <Typography variant="body1" color="initial" sx={style.textWithIcon}>
              UID
            </Typography>
            <Typography variant="body1" color="initial" sx={style.textWithIcon}>
              1559682 <CopyAllIcon sx={{ color: 'white', marginLeft: '10PX' }} />
            </Typography>
          </Stack>
        </Box>
        <Box sx={style.securityBox}>
          <Typography variant="body1" color="initial" sx={style.securityTitle}>
            Security information
          </Typography>
          <Stack direction={'row'} sx={style.securityItem} component={NavLink} to='/SettingCenter/LoginPassword'>
            <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
              <Box component='img' src={synchronize} sx={{ width: '35px', height: '35px', mr: '10px' }}></Box>
              <Typography variant="body1" color="initial" sx={style.textWithIcon}>
                Login password
              </Typography>
            </Stack>
            <Typography variant="body1" color="initial" sx={style.textWithIcon}>
              Edit <NavigateNextIcon sx={{ color: 'white', marginLeft: '10PX' }} />
            </Typography>
          </Stack>
          <Stack direction={'row'} sx={style.securityItem} component={NavLink} to='/SettingCenter/mail'>
            <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
              <Box component='img' src={mail} sx={{ width: '35px', height: '35px', mr: '10px' }}></Box>
              <Typography variant="body1" color="initial" sx={style.textWithIcon}>
                Bind mailbox
              </Typography>
            </Stack>
            <Typography variant="body1" color="initial" sx={style.textWithIcon}>
              To Bind <NavigateNextIcon sx={{ color: 'white', marginLeft: '10PX' }} />
            </Typography>
          </Stack>
          <Stack direction={'row'} sx={style.securityItem}>
            <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
              <Box component='img' src={updated} sx={{ width: '35px', height: '35px', mr: '10px' }}></Box>
              <Typography variant="body1" color="initial" sx={style.textWithIcon}>
                Updated version
              </Typography>
            </Stack>
            <Typography variant="body1" color="initial" sx={style.textWithIcon}>
              1.0.9 <NavigateNextIcon sx={{ color: 'white', marginLeft: '10PX' }} />
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Layout>
  );
}

export default SettingCenter;


export const style = {
  container: {
    background: zubgback,
    width: '100%',
    height: '100vh',
    overflow: 'auto',
  },
  header: {
    padding: '8px',
    background: zubgmid,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '&>p': { color: 'white !important', },
    '&>a>svg': { color: 'white', fontSize: '25px', },
  },
  profileImage: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    border: '1px solid white',
    padding: '2px',
  },
  textWithIcon: {
    color: 'white',
    fontSize: '14px',
    fontWeight: '500',
  },
  sectionBox: {
    padding: '20px 10px',
    width: '95%',
    marginLeft: '2.5%',
    borderRadius: '10px',
    background: zubgmid,
    mt: '10px',
  },
  securityBox: {
    padding: '10px 10px',
    width: '95%',
    marginLeft: '2.5%',
    borderRadius: '10px',
    background: zubgmid,
    mt: '10px',
  },
  securityTitle: {
    color: 'white',
    fontSize: '18px',
    fontWeight: '600',
  },
  securityItem: {
    alignItems: 'center',
    justifyContent: 'space-between',
    mt: '15px',
    background: zubgback,
    padding: '10px',
    borderRadius: '10px',
  },
};

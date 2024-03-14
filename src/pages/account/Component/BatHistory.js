import { Container, Typography, Box, IconButton, InputAdornment, OutlinedInput, FormControl, Select, Stack, Button } from '@mui/material'
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import Layout from '../../../component/Layout/Layout';
import { NavLink } from 'react-router-dom';
import { zubgback, zubgbackgrad, zubgmid } from '../../../Shared/color';
import Lottery from '../../../assets/images/lottery.png'
import colorpr from '../../../assets/images/colorpr (2).png'
import { useNavigate } from 'react-router-dom';



function BatHistorys() {

  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }
  return (
    <Layout>
      <Container sx={{ background: zubgback, width: '100%', height: '100vh', overflow: 'auto' }}>
        <Box sx={style.header}>
          <Box component={NavLink} onClick={() => goBack()}>
            <KeyboardArrowLeftOutlinedIcon />
          </Box>
          <Typography variant="body1" color="initial">Bet history</Typography>
          <Typography variant="body1" color="initial"> </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', mt: '20px', background: zubgbackgrad, width: '95%', marginLeft: '2.5%', borderRadius: '10px' }}>
          <Box component={NavLink} sx={{ width: '24%', borderRadius: '10px', padding: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column' }}>
            <Box component='img' src={Lottery} sx={{ width: '50px', height: '55px' }}></Box>
            <Typography variant="body1" color="initial" sx={{ color: 'white', fontSize: '15px', fontWeight: '500' }}>Lottery</Typography>
          </Box>
          <Box component={NavLink} sx={{ width: '24%', borderRadius: '10px', padding: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column' }}>
            <Box component='img' src={colorpr} sx={{ width: '80px', height: '55px' }}></Box>
            <Typography variant="body1" color="initial" sx={{ color: 'white', fontSize: '15px', fontWeight: '500', textAlign: "center" }}>Color Pridiction </Typography>
          </Box>
          <Box component={NavLink} sx={{ width: '24%', borderRadius: '10px', padding: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column' }}>
            <Box component='img' src={Lottery} sx={{ width: '50px', height: '55px' }}></Box>
            <Typography variant="body1" color="initial" sx={{ color: 'white', fontSize: '15px', fontWeight: '500' }}>Lottery</Typography>
          </Box>
          <Box component={NavLink} sx={{ width: '24%', borderRadius: '10px', padding: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column' }}>
            <Box component='img' src={colorpr} sx={{ width: '80px', height: '55px' }}></Box>
            <Typography variant="body1" color="initial" sx={{ color: 'white', fontSize: '15px', fontWeight: '500', textAlign: "center" }}>Color Pridiction </Typography>
          </Box>
        </Box>
        <Box sx={{ padding: 2, width: '100%' }}>
          <Box component='form'>
            <FormControl variant="outlined" fullWidth>
              <Stack direction='row'>
                <OutlinedInput className='search'
                  placeholder='Search ' fullWidth
                />
                <Button sx={{ width: '70px', height: '55px', borderRadius: '10px', background: zubgmid, color: 'white', marginLeft: '20px' }}>
                  <SearchIcon />
                </Button>
              </Stack>
            </FormControl>
          </Box>
          <Stack sx={{ padding: '20px 0px', justifyContent: 'space-between' }} direction='row'>
            <FormControl variant="outlined" sx={{ width: '48%' }} className='Select'>
              <Select multiple sx={{ '&>div': { background: zubgmid, color: 'white' } }} ></Select>
            </FormControl>
            <FormControl variant="outlined" sx={{ width: '48%' }} className='Select'>
              <Select multiple sx={{ '&>div': { background: zubgmid, color: 'white' } }}></Select>
            </FormControl>
          </Stack>
        </Box>
      </Container >
    </Layout >
  )
}

export default BatHistorys

const style = {
  header: {
    padding: '8px', background: zubgmid, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    '&>p': { color: 'white !important' }, '&>a>svg': { color: 'white', fontSize: '25px' }
  },
};

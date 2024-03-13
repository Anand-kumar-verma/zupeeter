import { Container, Typography, Box, IconButton, InputAdornment, OutlinedInput, FormControl, Select, Stack } from '@mui/material'
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import Layout from '../../../component/Layout/Layout';
import { NavLink } from 'react-router-dom';
import { zubgback, zubgmid } from '../../../Shared/color';


function MyCommission() {


  return (
    <Layout>
      <Container sx={{ background: zubgback, width: '100%', height: '100vh', overflow: 'auto' }}>
        <Box sx={style.header}>
          <Box component={NavLink} to='/promotion/'>
            <KeyboardArrowLeftOutlinedIcon />
          </Box>
          <Typography variant="body1" color="initial">Commission detail</Typography>
          <Typography variant="body1" color="initial"> </Typography>
        </Box>
        <Box sx={{ padding: 2 }}>
          <Box component='form'>
            <Stack sx={{ padding: 2, justifyContent: 'space-between' }} direction='row'>
              <FormControl variant="outlined" sx={{ width: '48%' }} className='Select'>
                <Select multiple sx={{ '&>div': { background: zubgmid, color: 'white' } }}></Select>
              </FormControl>
              <FormControl variant="outlined" sx={{ width: '48%' }} className='Select'>
                <Select multiple sx={{ '&>div': { background: zubgmid, color: 'white' } }}></Select>
              </FormControl>
            </Stack>
          </Box>
        </Box>
      </Container >
    </Layout >
  )
}

export default MyCommission

const style = {
  header: {
    padding: '8px', background: zubgmid, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    '&>p': { color: 'white !important' }, '&>a>svg': { color: 'white', fontSize: '25px' }
  },
};

import { Container, Typography, Box, IconButton, InputAdornment, OutlinedInput, FormControl, Select, Stack } from '@mui/material'
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import Layout from '../../../component/Layout/Layout';
import { NavLink } from 'react-router-dom';


function TeamReports() {

  return (
    <Layout>
      <Container sx={{ background: '#292929', width: '100%' }}>
        <Box sx={style.header}>
          <Box component={NavLink} to='/promotion/'>
            <KeyboardArrowLeftOutlinedIcon />
          </Box>
          <Typography variant="body1" color="initial">Subordinate data</Typography>
          <Typography variant="body1" color="initial"> </Typography>
        </Box>
        <Box sx={{ padding: 2 }}>
          <Box component='form'>
            <FormControl variant="outlined" fullWidth>
              <OutlinedInput className='search'
                placeholder='Search subordinate UID'
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton edge="end" sx={{ width: '70px', height: '35px', borderRadius: '10px', background: '#D9AC4F' }}>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <Stack sx={{ padding: 2, justifyContent: 'space-between' }} direction='row'>
            <FormControl variant="outlined" sx={{ width: '48%' }} className='Select'>
              <Select multiple  ></Select>
            </FormControl>
            <FormControl variant="outlined" sx={{ width: '48%' }} className='Select'>
              <Select multiple ></Select>
            </FormControl>
          </Stack>
        </Box>
        <Box sx={{ padding: 2, }}>
          <Box sx={{
            backgroundColor: '#d9ac4f', borderRadius: '10px', padding: '30px 20px',
            '&>div': { mb: 2 },
            '&>div>div:nth-child(1)': { borderRight: '1px solid black', width: '50%', textAlign: 'center', },
            '&>div>div:nth-child(2)': { width: '50%', textAlign: 'center' },
            '&>div>div>p': { color: '#8f5206', fontSize: '14px', fontWeight: 500 },
          }}>
            <Stack direction='row'>
              <Box>
                <Typography variant="body1" color="initial">0</Typography>
                <Typography variant="body1" color="initial">Deposit number</Typography>
              </Box>
              <Box>
                <Typography variant="body1" color="initial">0</Typography>
                <Typography variant="body1" color="initial">Deposit amount</Typography>
              </Box>
            </Stack>
            <Stack direction='row'>
              <Box>
                <Typography variant="body1" color="initial">0</Typography>
                <Typography variant="body1" color="initial">Number of bettors</Typography>
              </Box>
              <Box>
                <Typography variant="body1" color="initial">0</Typography>
                <Typography variant="body1" color="initial">Total bet</Typography>
              </Box>
            </Stack>
            <Stack direction='row'>
              <Box>
                <Typography variant="body1" color="initial">0</Typography>
                <Typography variant="body1" color="initial">Number of people making first deposit</Typography>
              </Box>
              <Box>
                <Typography variant="body1" color="initial">0</Typography>
                <Typography variant="body1" color="initial">First deposit amount</Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Container >
    </Layout >
  )
}

export default TeamReports

const style = {
  header: {
    padding: '8px', background: '#3F3F3F', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    '&>p': { color: 'white' }, '&>a>svg': { color: 'white', fontSize: '25px' }
  },
};

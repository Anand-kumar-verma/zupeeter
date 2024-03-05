import { Container, Typography, Box, } from '@mui/material'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import empty from '../../../assets/images/empty.png'
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import Layout from '../../../component/Layout/Layout';
import { NavLink } from 'react-router-dom';
import Customer from '../../../assets/images/customerBg.png'


function Subordinate() {


  const [value, setValue] = React.useState(0);
  console.log(value)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Layout>
      <Container sx={{ background: '#292929', width: '100%' }}>
        <Box sx={style.header}>
          <Box component={NavLink} to='/promotion/'>
            <KeyboardArrowLeftOutlinedIcon />
          </Box>
          <Typography variant="body1" color="initial">Agent line customer service</Typography>
          <Typography variant="body1" color="initial"> </Typography>
        </Box>
        <Box sx={{ background: '#D9AC4F' }}>
          <Box component='img' src={Customer} sx={{ width: '60%', marginLeft: '20%' }}></Box>
        </Box>
      </Container >
    </Layout>
  )
}

export default Subordinate

const style = {
  header: {
    padding: '8px', background: '#3F3F3F', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    '&>p': { color: 'white' }, '&>a>svg': { color: 'white', fontSize: '25px' }
  },
};








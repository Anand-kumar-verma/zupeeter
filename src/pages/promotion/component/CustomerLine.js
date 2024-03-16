import { Container, Typography, Box, } from '@mui/material'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import empty from '../../../assets/images/empty.png'
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import Layout from '../../../component/Layout/Layout';
import { NavLink } from 'react-router-dom';
import Customer from '../../../assets/images/customerBg.png'
import { zubgback, zubgbackgrad, zubgmid } from '../../../Shared/color';


function Subordinate() {


  const [value, setValue] = React.useState(0);
  console.log(value)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Layout>
      <Container sx={{ background: zubgback, width: '100%', height: '100vh', overflow: 'auto' }}>
        <Box sx={style.header}>
          <Box component={NavLink} to='/promotion/'>
            <KeyboardArrowLeftOutlinedIcon />
          </Box>
          <Typography variant="body1" color="initial">Agent line customer service</Typography>
          <Typography variant="body1" color="initial"> </Typography>
        </Box>
        <Box sx={{ background: zubgbackgrad }}>
          <Box component='img' src={Customer} sx={{ width: '60%', marginLeft: '20%' }}></Box>
        </Box>
      </Container >
    </Layout>
  )
}

export default Subordinate

const style = {
  header: {
    padding: '15px 8px',
    background: zubgmid,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& > p': {
      fontSize: '20px',
      fontWeight: '600',
      textAlign: 'center',
      color: 'white',
    },
    '& > a > svg': {
      color: 'white',
      fontSize: '35px'
    }
  },
};








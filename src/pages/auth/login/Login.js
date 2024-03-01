import React, { useState } from 'react';
import { Container, Box, Typography, FormControl, InputLabel, Select, MenuItem, Stack, TextField, FormControlLabel, Checkbox, Button, OutlinedInput, IconButton, InputAdornment, OutlinedInputs } from '@mui/material';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import previous from '../../../assets/images/previous.png';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function Login() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [Nav, setNav] = useState(1);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container sx={style.root}>
      <Box className="header" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box component={NavLink} to="javascript:history.back();" sx={style.col}>
          <Box component="img" src={previous} alt="back" sx={style.img} />
        </Box>
        <Box sx={style.col}>
          <Box component="img" src={logo} alt="logo" sx={style.logo} />
        </Box>
        <Box sx={style.col}>
          <FormControl sx={style.formControl}>
            <InputLabel id="demo-simple-select-label">Select Lan...</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Select Lan..."
              onChange={handleChange}
              sx={style.select}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box className="register_header" sx={style.registerHeader}>
          <Typography variant="h3" color="initial">Log in</Typography>
          <Typography variant="h6" color="initial">Please log in with your phone number or email</Typography>
          <Typography variant="h6" color="initial">If you forget your password, please contact customer service</Typography>
        </Box>
      </Box>
      <Box sx={{ background: '#EFEFEF' }}>
        <Stack direction='row' >
          <Box component={NavLink} onClick={() => setNav(1)} className={Nav === 1 ? 'activeNav nav' : 'nav'}>
            <PhoneIphoneIcon sx={{ fontSize: '40px' }} />
            <Typography variant="h3" color="initial">LOGIN WITH PHONE</Typography>
          </Box>
          <Box component={NavLink} onClick={() => setNav(2)} className={Nav === 2 ? 'activeNav nav' : ' nav'}>
            <EmailIcon sx={{ fontSize: '40px' }} />
            <Typography variant="h3" color="initial">LOGIN WITH EMAIL</Typography>
          </Box>
        </Stack>
      </Box>
      {Nav === 1 &&
        <Box component='form' sx={{ background: '#EFEFEF', width: '100%', padding: 3, transition: '0.3s' }}>
          <Box mt={2}>
            <FormControl fullWidth>
              <Stack direction='row' className='loginlabel'>
                <PhoneIphoneIcon sx={{ fontSize: '30px', mr: 1 }} />
                <Typography variant='h3'>Phone number</Typography>
              </Stack>
              <TextField id="fullWidth" placeholder='Enter phone number' className='loginfields' />
            </FormControl>
          </Box>
          <Box mt={3}>
            <FormControl fullWidth>
              <Stack direction='row' className='loginlabel'>
                <LockIcon sx={{ fontSize: '30px', mr: 1 }} />
                <Typography variant='h3'>Password</Typography>
              </Stack>
              <OutlinedInput
                placeholder='Enter password' className='loginfieldspass'
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <Box mt={1}>
            <FormControl fullWidth>
              <FormControlLabel required control={<Checkbox />} label="remember password" />
            </FormControl>
          </Box>
          <Stack className='loginbtnbox' mt={2}>
            <Box>
              <Button component={NavLink} to='/dashboard' className='btnLogin' >Let's go</Button>
            </Box>
            <Box mt={2}>
              <Button component={NavLink} to='/register' className='btnregister' mt={2}>Register</Button>
            </Box>
          </Stack>
        </Box>
      }
      {Nav === 2 &&
        < Box component='form' sx={{ background: '#EFEFEF', width: '100%', padding: 3, transition: '0.3s' }}>
          <Box mt={2}>
            <FormControl fullWidth>
              <Stack direction='row' className='loginlabel'>
                <EmailIcon sx={{ fontSize: '30px', mr: 1 }} />
                <Typography variant='h3'>Email</Typography>
              </Stack>
              <TextField id="fullWidth" placeholder='Enter email' className='loginfields' />
            </FormControl>
          </Box>
          <Box mt={3}>
            <FormControl fullWidth>
              <Stack direction='row' className='loginlabel'>
                <LockIcon sx={{ fontSize: '30px', mr: 1 }} />
                <Typography variant='h3'>Password</Typography>
              </Stack>
              <OutlinedInput
                placeholder='Enter password' className='loginfieldspass'
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <Box mt={1}>
            <FormControl fullWidth>
              <FormControlLabel required control={<Checkbox />} label="remember password" />
            </FormControl>
          </Box>
          <Stack className='loginbtnbox' mt={2}>
            <Box>
              <Button component={NavLink} to='/dashboard' className='btnLogin' >Let's go</Button>
            </Box>
            <Box mt={2}>
              <Button component={NavLink} to='/register' className='btnregister' mt={2}>Register</Button>
            </Box>
          </Stack>
        </Box>
      }
    </Container>
  );
}

export default Login;

const style = {
  root: {},
  col: { width: '33%' },
  img: { width: '50px', height: '50px', padding: '10px' },
  logo: { width: '160px', padding: '5px' },
  formControl: { float: 'right', marginRight: '5px', marginTop: '5px' },
  select: { '& > .MuiSelect-select': { width: '50px', padding: '14px 38px' } },
  registerHeader: { marginTop: '20px' },
};

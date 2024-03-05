import { Container, Typography, Box, Stack } from '@mui/material'
import filter from '../../assets/images/filter.png'
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import promotionbg from '../../assets/images/promotionbg.png'
import copycode from '../../assets/images/copy_code.png'
import team_port from '../../assets/images/team_port.png'
import commission from '../../assets/images/commission-.png'
import invite_reg from '../../assets/images/invite_reg.png'
import server from '../../assets/images/server.png'
import rebateRatio from '../../assets/images/rebateRatio.png'
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import download from '../../assets/images/download.png'
import Layout from '../../component/Layout/Layout';
import { NavLink } from 'react-router-dom';

   
function Promotion() {
  return (
    <Layout>
      <Container>
        <Box sx={style.header}>
          <Typography variant="body1" color="initial"> </Typography>
          <Typography variant="body1" color="initial" className='!text-white'>Agency</Typography>
          <Box component={NavLink} to='/promotion/Subordinate/'>
            <Box component='img' src={filter} ></Box>
          </Box>
        </Box>
        <Box sx={style.commitionboxOuter}>
          <Box component='img' src={promotionbg}></Box>
          <Box sx={style.commitionbox}>
            <Typography variant="body1" color="initial" className='!text-white'>0</Typography>
            <Typography variant="body1" color="initial" className='!text-white'>Yesterday's total commission</Typography>
            <Typography variant="body1" color="initial" className='!text-white'>Upgrade the level to increase commission income</Typography>
          </Box>
          <Box sx={style.subcordinateBox}>
            <Stack direction='row' sx={{ width: '100%', }}>
              <Box sx={style.subordinatesleft}>
                <EmojiPeopleOutlinedIcon />
                <Typography variant="body1" color="initial" className='!text-white'> Direct subordinates</Typography>

              </Box>
              <Box sx={style.subordinatesRight}>
                <Groups2OutlinedIcon />
                <Typography variant="body1" color="initial" className='!text-white'>Team subordinates</Typography>
              </Box>
            </Stack>
            <Box sx={style.boxStyles}>
              <Box sx={style.innerBoxStyles}>
                <Box sx={style.subcordinatelist}>
                  <Typography variant="body1" color="initial" className='!text-white'>0</Typography>
                  <Typography variant="body1" color="initial" className='!text-white'> number of register</Typography>
                </Box>
                <Box sx={style.subcordinatelist}>
                  <Typography variant="body1" color="initial" className='!text-white'>0</Typography>
                  <Typography variant="body1" color="initial" className='!text-white'>  Deposit number</Typography>
                </Box>
                <Box sx={style.subcordinatelist}>
                  <Typography variant="body1" color="initial" className='!text-white'>0</Typography>
                  <Typography variant="body1" color="initial" className='!text-white'> Deposit amount</Typography>
                </Box>
                <Box sx={style.subcordinatelist}>
                  <Typography variant="body1" color="initial" className='!text-white'>0</Typography>
                  <Typography variant="body1" color="initial" className='!text-white'>  Number of people making first deposit</Typography>
                </Box>
              </Box>
              <Box sx={style.innerBoxStylestwo}>
                <Box sx={style.subcordinatelist}>
                  <Typography variant="body1" color="initial">0</Typography>
                  <Typography variant="body1" color="initial"> number of register</Typography>
                </Box>
                <Box sx={style.subcordinatelist}>
                  <Typography variant="body1" color="initial">0</Typography>
                  <Typography variant="body1" color="initial">  Deposit number</Typography>
                </Box>
                <Box sx={style.subcordinatelist}>
                  <Typography variant="body1" color="initial">0</Typography>
                  <Typography variant="body1" color="initial"> Deposit amount</Typography>
                </Box>
                <Box sx={style.subcordinatelist}>
                  <Typography variant="body1" color="initial">0</Typography>
                  <Typography variant="body1" color="initial">  Number of people making first deposit</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={style.invitebutton}>
            <NavLink to="/promotion/PromotionShare">
              <Typography sx={{}}>INVITATION LINK</Typography>
            </NavLink>
            <Box sx={style.invitbox}>
              <Stack direction='row'>
                <Box component='img' src={copycode}></Box>
                <Typography variant="body1" color="initial">Copy invitation code</Typography>
              </Stack>
              <Stack direction='row'>
                <Typography variant="body1" color="initial">rTbxj1559682</Typography>
                <ArrowForwardIosOutlinedIcon />
              </Stack>
            </Box>
            <NavLink to='/promotion/TeamReport'>
              <Box sx={style.invitbox}>
                <Stack direction='row'>
                  <Box component='img' src={team_port}></Box>
                  <Typography variant="body1" color="initial">Subordinate data</Typography>
                </Stack>
                <Stack direction='row'>
                  <ArrowForwardIosOutlinedIcon />
                </Stack>
              </Box>
            </NavLink>
            <NavLink to='/promotion/MyCommission'>
              <Box sx={style.invitbox}>
                <Stack direction='row'>
                  <Box component='img' src={commission}></Box>
                  <Typography variant="body1" color="initial">Commission detail</Typography>
                </Stack>
                <Stack direction='row'>
                  <ArrowForwardIosOutlinedIcon />
                </Stack>
              </Box>
            </NavLink>
            <NavLink to='/promotion/PromotionRule'>
              <Box sx={style.invitbox}>
                <Stack direction='row'>
                  <Box component='img' src={invite_reg}></Box>
                  <Typography variant="body1" color="initial">Invitation rules</Typography>
                </Stack>
                <Stack direction='row'>
                  <ArrowForwardIosOutlinedIcon />
                </Stack>
              </Box>
            </NavLink>
            <NavLink to='/promotion/customerLine/'>
              <Box sx={style.invitbox}>
                <Stack direction='row'>
                  <Box component='img' src={server}></Box>
                  <Typography variant="body1" color="initial">Agent line customer service</Typography>
                </Stack>
                <Stack direction='row'>
                  <ArrowForwardIosOutlinedIcon />
                </Stack>
              </Box>
            </NavLink>
            <NavLink to='/promotion/RebateRatio/'>
              <Box sx={style.invitbox}>
                <Stack direction='row'>
                  <Box component='img' src={rebateRatio}></Box>
                  <Typography variant="body1" color="initial">Rebate ratio</Typography>
                </Stack>
                <Stack direction='row'>
                  <ArrowForwardIosOutlinedIcon />
                </Stack>
              </Box>
            </NavLink>
            <Box sx={style.promotionBoxOuter}>
              <Box sx={style.promotionBox}>
                <Stack direction='row'>
                  <Box component='img' src={download}></Box>
                  <Typography variant="body1" color="initial">promotion data</Typography>
                </Stack>
              </Box>
              <Stack direction='row'>
                <Box>
                  <Typography variant="body1" color="initial">0</Typography>
                  <Typography variant="body1" color="initial">This Week</Typography>
                </Box>
                <Box>
                  <Typography variant="body1" color="initial">0</Typography>
                  <Typography variant="body1" color="initial">Total commission</Typography>
                </Box>
              </Stack>
              <Stack direction='row'>
                <Box>
                  <Typography variant="body1" color="initial">0</Typography>
                  <Typography variant="body1" color="initial">direct subordinate</Typography>
                </Box>
                <Box>
                  <Typography variant="body1" color="initial">0</Typography>
                  <Typography variant="body1" color="initial">Total number of subordinates in the team</Typography>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container >
    </Layout>
  )
}

export default Promotion

const style = {
  header: {
    padding: '8px', background: '#3F3F3F', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    '&>p': { color: 'white' }, '&>a>img': { width: '30px' }
  },
  commitionboxOuter: { width: '100%', height: '40vh', background: '#c4933f', '&>img': { width: '100%', height: '100%' }, position: 'relative' },
  commitionbox: { left: '15%', width: '70%', textAlign: 'center', position: 'absolute', top: 0, py: 2, '&>p:nth-child(1)': { color: '#8f5206', fontSize: '25px', fontWeight: '500' }, '&>p:nth-child(2)': { color: '#ffdaac', fontSize: '13px', fontWeight: '400', padding: '5px 0px', background: '#8f5206', borderRadius: '20px' }, '&>p:nth-child(3)': { color: '#8f5206', fontSize: '13px', fontWeight: '400', marginTop: '5px' } },
  subordinatesleft: { width: '50%', textAlign: 'center', py: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fae59f', borderTopLeftRadius: '10px', borderRight: '2px solid black', '&>svg': { color: '#8f5206', fontSize: '25px', marginRight: '10px' }, '&>p': { color: '#8f5206', fontSize: '14px', fontWeight: '500' } },
  subordinatesRight: { width: '50%', textAlign: 'center', py: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fae59f', borderTopRightRadius: '10px', '&>svg': { color: '#8f5206', fontSize: '25px', marginRight: '10px' }, '&>p': { color: '#8f5206', fontSize: '14px', fontWeight: '500' } },
  boxStyles: { background: '#404040', padding: '15px', display: 'flex' },
  innerBoxStyles: { width: '50%', borderRight: '1px solid black', borderBottomLeftRadius: '10px', padding: '0px 20px' },
  innerBoxStylestwo: { width: '50%', padding: '0px 20px' },
  subcordinatelist: { textAlign: 'center', '&>p': { color: '#a6a9ae', fontSize: '13px', }, mb: 1 },
  subcordinateBox: { position: 'absolute', width: '549px', left: '13px', top: '45%' },
  buttonStyles: { width: '8.8rem', height: '100%', color: '#8f5206', fontSize: '.4rem', fontWeight: 700, letterSpacing: '.01333rem', border: 'none', borderRadius: '99rem', background: 'linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)', '&:hover': { background: 'linear-gradient(180deg, #C4933F 0%, #FAE59F 100%)', }, },
  invitebutton: {
    width: '100%', background: '#292929', paddingTop: '140px', mt: '-10px',
    '&>a>p': { background: 'red', width: '80%', marginLeft: '10%', borderRadius: '20px', textAlign: 'center', padding: '10px', background: 'linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)', color: '#8f5206', fontSize: '17px', fontWeight: 600 }
  },
  invitbox: {
    width: '90%', background: '#3F3F3F', padding: '10px', mt: '20px', borderRadius: '10px', marginLeft: '5%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    '&>div>img': { width: '35px', marginRight: '10px' },
    '&>div>p': { fontSize: "14px", color: 'white' },
    '&>div': { alignItems: 'center' },
    '&>div:nth-child(2)>p': { color: '#8f5206', marginRight: '20px' },
    '&>div:nth-child(2)>svg': { color: 'gray', fontSize: "14px", marginRight: '10px' }
  },
  promotionBox: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    '&>div:nth-child(1)': { alignItems: 'center' },
    '&>div:nth-child(1)>img': { width: '35px', marginRight: '10px' },
    '&>div:nth-child(1)>p': { fontSize: '17px', fontWeight: 500, color: '#d9ac4f' },
  },
  promotionBoxOuter: {
    width: '90%', background: '#3F3F3F', padding: '10px', mt: '20px', borderRadius: '5px', marginLeft: '5%', paddingBottom: '70px',
    '&>div:nth-child(2)>div:nth-child(1)': { my: '10px', borderRight: '1px solid black', width: '50%', textAlign: "center" },
    '&>div:nth-child(2)>div:nth-child(2)': { my: '10px', width: '50%', textAlign: "center" },
    '&>div:nth-child(2)>div>p:nth-child(1)': { color: 'white' },
    '&>div:nth-child(2)>div>p:nth-child(2)': { color: 'gray', fontSize: '13px', fontWeight: 500 },
    '&>div:nth-child(3)>div:nth-child(1)': { my: '10px', borderRight: '1px solid black', width: '50%', textAlign: "center" },
    '&>div:nth-child(3)>div:nth-child(2)': { my: '10px', width: '50%', textAlign: "center" },
    '&>div:nth-child(3)>div>p:nth-child(1)': { color: 'white' },
    '&>div:nth-child(3)>div>p:nth-child(2)': { color: 'gray', fontSize: '13px', fontWeight: 500 },
  },

};
import { Box, Button, Container, Typography, Stack } from '@mui/material'
import trxbg from '../../../assets/images/trxbg.png'
import pr0 from "../../../assets/images/num4.png";
import pr11 from "../../../assets/images/num5.png";
import pr22 from "../../../assets/images/num6.png";
import pr33 from "../../../assets/images/numF.png";
import pr4 from "../../../assets/images/prize7.png";
import pr5 from "../../../assets/images/5.png";
import pr6 from "../../../assets/images/6.png";
import pr7 from "../../../assets/images/7.png";
import pr8 from "../../../assets/images/8.png";
import pr9 from "../../../assets/images/9.png";
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import SearchIcon from '@mui/icons-material/Search';

function TrxWin1Min() {
  return (
    <Container sx={{ mt: 2, mb: 5, padding: 1 }}>
      <Box sx={{ background: `url(${trxbg})`, backgroundSize: '100% 100%', padding: '10px' }}>
        <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Stack direction='row' sx={{ display: 'flex', alignItems: 'center', '&>p:nth-child(1)': { border: '1px solid #b07b20 ', padding: '0px 5px', borderRadius: '5px' } }}>
            <Typography variant="body1" color="initial">Period</Typography>
            <Button startIcon={<HelpCenterIcon />} className='trxwinbtn'>
              How to play</Button>
          </Stack>
          <Button startIcon={<SearchIcon />} className='trxwinbtntwo'>
            Public Chain Query</Button>
        </Stack>
        <Box className='trx-timer-box'>
          <Typography variant="body1" color="initial">20240305131021</Typography>
          <Typography variant="body1" color="initial">Draw time</Typography>
          <Stack direction="row">
            <Box className="timerBoxone">0</Box>
            <Box className="timerBox">0</Box>
            <Box>:</Box>
            <Box className="timerBox">0</Box>
            <Box className="timerBoxfour">0</Box>
          </Stack>
        </Box>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: '20px', '&>img': { width: '15%' } }}>
          <Box component="img" src={pr0}></Box>
          <Box component="img" src={pr11}></Box>
          <Box component="img" src={pr22}></Box>
          <Box component="img" src={pr33}></Box>
          <Box component="img" src={pr4}></Box>
        </Stack>
      </Box>

      <Box className="trx-play-box">
        <Box className='trx-rbg-button-box'>
          <Button>Green</Button>
          <Button>violet</Button>
          <Button>Red</Button>
        </Box>
      </Box>
      <Box className="pridictcolor">
        {[
          { no: 0, img: pr0 },
          { no: 1, img: pr11 },
          { no: 2, img: pr22 },
          { no: 3, img: pr33 },
          { no: 4, img: pr4 },
        ]?.map((i) => {
          return (
            <Box
              className="!cursor-pointer"
              component="img"
              src={i?.img}
            ></Box>
          );
        })}
      </Box>
      <Box className="pridictcolor">
        {[
          { no: 5, img: pr5 },
          { no: 6, img: pr6 },
          { no: 7, img: pr7 },
          { no: 8, img: pr8 },
          { no: 9, img: pr9 },
        ]?.map((i) => {
          return (
            <Box
              className="!cursor-pointer"
              component="img"
              src={i?.img}
            ></Box>
          );
        })}
      </Box>
      <Box>
        <Box className="trx-bet-size">
          <Button variant='outlined'>Random</Button>
          <Typography variant="body1" color="initial">x1</Typography>
          <Typography variant="body1" color="initial">x5</Typography>
          <Typography variant="body1" color="initial">x10</Typography>
          <Typography variant="body1" color="initial">x20</Typography>
          <Typography variant="body1" color="initial">x50</Typography>
          <Typography variant="body1" color="initial">x100</Typography>
        </Box>
        <Box className="trx-bet-size-confirm-btn-box">
          <Button>Big</Button>
          <Button>Small</Button>
        </Box>
      </Box>
    </Container >
  )
}

export default TrxWin1Min

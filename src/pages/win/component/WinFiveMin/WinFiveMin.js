import { useState } from 'react';
import { Typography, Box, Stack, Button, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SummarizeIcon from '@mui/icons-material/Summarize';
import Pagination from '@mui/material/Pagination';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import pr0 from '../../../../assets/images/0.png'
import pr11 from '../../../../assets/images/11.png'
import pr22 from '../../../../assets/images/22.png'
import pr33 from '../../../../assets/images/33.png'
import pr4 from '../../../../assets/images/4.png'
import pr5 from '../../../../assets/images/5.png'
import pr6 from '../../../../assets/images/6.png'
import pr7 from '../../../../assets/images/7.png'
import pr8 from '../../../../assets/images/8.png'
import pr9 from '../../../../assets/images/9.png'
import ArticleIcon from '@mui/icons-material/Article';
import Policy from '../policy/Policy';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function WinFiveMin() {

  const [TabTwo, setTabTwo] = useState(1);
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const [poicy, setpoicy] = React.useState(false);
  const handleClickOpenpoicy = () => {
    setpoicy(true);
  };
  const handleClosepolicy = () => {
    setpoicy(false);
  };


  return (
    <Box className="mainBox">
      <Box className="countdownbg">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
          <Box sx={{ padding: 1, width: '48%' }} className="win-banner">
            <Box onClick={() => handleClickOpenpoicy()} >
              <ArticleIcon />
              <Typography variant="body1" color="initial">How to play</Typography>
            </Box>
            <Dialog open={poicy} TransitionComponent={Transition} onClose={handleClosepolicy} className='dialogsmall'>
              <Box>
                <Stack className='dialog-header-policy'>
                  <Box>
                    <Typography variant="body1" color="initial">Policy</Typography>
                  </Box>
                  <IconButton onClick={handleClosepolicy}>
                    <CloseIcon />
                  </IconButton>
                </Stack>
              </Box>
              <Policy />
            </Dialog>
            <Typography variant="body1" color="initial">Win Go 1Min</Typography>
            <Stack direction='row' alignItems='center' justifyContent='space-between'>
              <Box component='img' src={pr0}></Box>
              <Box component='img' src={pr11}></Box>
              <Box component='img' src={pr22}></Box>
              <Box component='img' src={pr33}></Box>
              <Box component='img' src={pr4}></Box>
            </Stack>
          </Box>
          <Box>
            <Typography variant="h3" color="initial" className='winTextone'>Time remaining</Typography>
            <Stack direction='row'>
              <Box className="timerBoxone">0</Box>
              <Box className="timerBox">0</Box>
              <Box>:</Box>
              <Box className="timerBox">0</Box>
              <Box className="timerBoxfour">0</Box>
            </Stack>
            <Typography variant="h3" color="initial" className='winTextone'>202403011253</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ py: 2 }}>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Button className='greembtn'>Join Green</Button>
          <Button className='greemviolet'>Join Violet</Button>
          <Button className='greemred'>Join Red</Button>
        </Stack>
        <Box className="pridictcolor">
          <Box component='img' src={pr0}></Box>
          <Box component='img' src={pr11}></Box>
          <Box component='img' src={pr22}></Box>
          <Box component='img' src={pr33}></Box>
          <Box component='img' src={pr4}></Box>
        </Box>
        <Box className="pridictcolor">
          <Box component='img' src={pr5}></Box>
          <Box component='img' src={pr6}></Box>
          <Box component='img' src={pr7}></Box>
          <Box component='img' src={pr8}></Box>
          <Box component='img' src={pr9}></Box>
        </Box>
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <Button className='btnsm' onClick={handleClickOpen}>small</Button>
          <Button className='btmbig'>Big</Button>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            className='dialogsmall'
          >
            <Box>
              <Stack className='dialog-header'>
                <Box>
                  <Typography variant="body1" color="initial">small</Typography>
                </Box>
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Stack>
            </Box>
            <Box className="dialogsmallbat">
              <Typography variant="body1" color="initial">Contract Money</Typography>
              <Box className="addbtnbox">
                <Button>1</Button>
                <Button>10</Button>
                <Button>100</Button>
                <Button>1000</Button>
              </Box>
              <Typography variant="body1" color="initial">small</Typography>
            </Box>
          </Dialog>
        </Stack>
      </Box>
      <Box className="tableBox">
        <Box sx={{ background: '#3A3A3A', }}>
          <Stack direction='row' >
            <Box component={NavLink} onClick={() => setTabTwo(1)} className={TabTwo === 1 ? 'activewinNav Winnav' : 'Winnav'}>
              <Typography variant="h3" color="initial">Game History</Typography>
            </Box>
            <Box component={NavLink} onClick={() => setTabTwo(2)} className={TabTwo === 2 ? 'activewinNav Winnav' : ' Winnav'}>
              <Typography variant="h3" color="initial">Chart</Typography>
            </Box>
            <Box component={NavLink} onClick={() => setTabTwo(3)} className={TabTwo === 3 ? 'activewinNav Winnav' : ' Winnav'}>
              <Typography variant="h3" color="initial">My History</Typography>
            </Box>
          </Stack>
        </Box>
        {TabTwo === 1 &&
          <Box>
            <Stack direction='row' className='onegotextbox'>
              <Typography variant="body1" color="initial"><EmojiEventsIcon /> ONE GO Record</Typography>
            </Stack>
            <TableContainer component={Paper}>
              <Table sx={{ maxWidth: 575, background: '#3A3A3A', color: 'white' }} className="wintable" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Period</TableCell>
                    <TableCell >Number</TableCell>
                    <TableCell >Big Small</TableCell>
                    <TableCell >Result</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell >202403011253</TableCell>
                    <TableCell className="numgreen" >1</TableCell>
                    <TableCell >Big</TableCell>
                    <TableCell >
                      <Box className="Wincircle"></Box>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell >202403011253</TableCell>
                    <TableCell className="numred">6</TableCell>
                    <TableCell >small</TableCell>
                    <TableCell > <Box className="WincircleTwo"></Box></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell >202403011253</TableCell>
                    <TableCell className="numviogreen">5</TableCell>
                    <TableCell >Big</TableCell>
                    <TableCell >
                      <Box className="Wincircle"></Box>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell >202403011253</TableCell>
                    <TableCell className="numviored">6</TableCell>
                    <TableCell >Big</TableCell>
                    <TableCell > <Box className="WincircleTwo"></Box></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell >202403011253</TableCell>
                    <TableCell className="numviored">6</TableCell>
                    <TableCell >small</TableCell>
                    <TableCell > <Box className="WincircleTwo"></Box></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Box className="paginationTable">
                <Pagination count={10} />
              </Box>
            </TableContainer>
          </Box>
        }

        {
          TabTwo === 2 &&
          <Box className="chartTable">
            <Stack direction='row' className='onegotextbox'>
              <Typography variant="body1" color="initial"><SummarizeIcon /> Statistic(last 100 Periods)</Typography>
            </Stack>
            <Box className="charttableheadingBox">
              <Stack direction='row'>
                <Box className='charttableheading'>
                  <Typography variant="body1" color="initial" >Winning numbers</Typography>
                </Box>
                <Box className="winningNumberBox">
                  <Typography variant="body1" color="initial" className='circleNumber'>1</Typography>
                  <Typography variant="body1" color="initial" className='circleNumber'>2</Typography>
                  <Typography variant="body1" color="initial" className='circleNumber'>3</Typography>
                  <Typography variant="body1" color="initial" className='circleNumber'>4</Typography>
                  <Typography variant="body1" color="initial" className='circleNumber'>5</Typography>
                  <Typography variant="body1" color="initial" className='circleNumber'>6</Typography>
                  <Typography variant="body1" color="initial" className='circleNumber'>7</Typography>
                  <Typography variant="body1" color="initial" className='circleNumber'>8</Typography>
                  <Typography variant="body1" color="initial" className='circleNumber'>9</Typography>
                </Box>
              </Stack>
              <Stack direction='row'>
                <Box className='charttableheadingtwo'>
                  <Typography variant="body1" color="initial" >Missing</Typography>
                </Box>
                <Box className="winningNumberBox">
                  <Typography variant="body1" color="initial" className='circleNumbermissing'>1</Typography>
                  <Typography variant="body1" color="initial" className='circleNumbermissing'>2</Typography>
                  <Typography variant="body1" color="initial" className='circleNumbermissing'>3</Typography>
                  <Typography variant="body1" color="initial" className='circleNumbermissing'>4</Typography>
                  <Typography variant="body1" color="initial" className='circleNumbermissing'>5</Typography>
                  <Typography variant="body1" color="initial" className='circleNumbermissing'>6</Typography>
                  <Typography variant="body1" color="initial" className='circleNumbermissing'>7</Typography>
                  <Typography variant="body1" color="initial" className='circleNumbermissing'>8</Typography>
                  <Typography variant="body1" color="initial" className='circleNumbermissing'>9</Typography>
                </Box>
              </Stack>
            </Box>
            <Box className="charttableheadingBox">
              <Stack direction='row'>
                <Box className='charttableheading'>
                  <Typography variant="body1" color="initial" >202403011624</Typography>
                </Box>
                <Box className="winningNumberBox">
                  <Typography variant="body1" color="initial" className='circleNumberbody'>1</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>2</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>3</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>4</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>5</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>6</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>7</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>8</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>9</Typography>
                </Box>
              </Stack>
            </Box>
            <Box className="charttableheadingBox">
              <Stack direction='row'>
                <Box className='charttableheading'>
                  <Typography variant="body1" color="initial" >202403011624</Typography>
                </Box>
                <Box className="winningNumberBox">
                  <Typography variant="body1" color="initial" className='circleNumberbody'>1</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>2</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>3</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>4</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>5</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>6</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>7</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>8</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>9</Typography>
                </Box>
              </Stack>
            </Box>
            <Box className="charttableheadingBox">
              <Stack direction='row'>
                <Box className='charttableheading'>
                  <Typography variant="body1" color="initial" >202403011624</Typography>
                </Box>
                <Box className="winningNumberBox">
                  <Typography variant="body1" color="initial" className='circleNumberbody'>1</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>2</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>3</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>4</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>5</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>6</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>7</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>8</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>9</Typography>
                </Box>
              </Stack>
            </Box>
            <Box className="charttableheadingBox">
              <Stack direction='row'>
                <Box className='charttableheading'>
                  <Typography variant="body1" color="initial" >202403011624</Typography>
                </Box>
                <Box className="winningNumberBox">
                  <Typography variant="body1" color="initial" className='circleNumberbody'>1</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>2</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>3</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>4</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>5</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>6</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>7</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>8</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>9</Typography>
                </Box>
              </Stack>
            </Box>
            <Box className="charttableheadingBox">
              <Stack direction='row'>
                <Box className='charttableheading'>
                  <Typography variant="body1" color="initial" >202403011624</Typography>
                </Box>
                <Box className="winningNumberBox">
                  <Typography variant="body1" color="initial" className='circleNumberbody'>1</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>2</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>3</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>4</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>5</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>6</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>7</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>8</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>9</Typography>
                </Box>
              </Stack>
            </Box>
            <Box className="charttableheadingBox">
              <Stack direction='row'>
                <Box className='charttableheading'>
                  <Typography variant="body1" color="initial" >202403011624</Typography>
                </Box>
                <Box className="winningNumberBox">
                  <Typography variant="body1" color="initial" className='circleNumberbody'>1</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>2</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>3</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>4</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>5</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>6</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>7</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>8</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>9</Typography>
                </Box>
              </Stack>
            </Box>
            <Box className="charttableheadingBox">
              <Stack direction='row'>
                <Box className='charttableheading'>
                  <Typography variant="body1" color="initial" >202403011624</Typography>
                </Box>
                <Box className="winningNumberBox">
                  <Typography variant="body1" color="initial" className='circleNumberbody'>1</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>2</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>3</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>4</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>5</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>6</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>7</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>8</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>9</Typography>
                </Box>
              </Stack>
            </Box>
            <Box className="charttableheadingBox">
              <Stack direction='row'>
                <Box className='charttableheading'>
                  <Typography variant="body1" color="initial" >202403011624</Typography>
                </Box>
                <Box className="winningNumberBox">
                  <Typography variant="body1" color="initial" className='circleNumberbody'>1</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>2</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>3</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>4</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>5</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>6</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>7</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>8</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>9</Typography>
                </Box>
              </Stack>
            </Box>
            <Box className="charttableheadingBox">
              <Stack direction='row'>
                <Box className='charttableheading'>
                  <Typography variant="body1" color="initial" >202403011624</Typography>
                </Box>
                <Box className="winningNumberBox">
                  <Typography variant="body1" color="initial" className='circleNumberbody'>1</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>2</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>3</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>4</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>5</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>6</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>7</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>8</Typography>
                  <Typography variant="body1" color="initial" className='circleNumberbody'>9</Typography>
                </Box>
              </Stack>
            </Box>

            <Box className="paginationTable">
              <Pagination count={10} />
            </Box>
          </Box>
        }
        {
          TabTwo === 3 &&
          <Box>
            <Stack direction='row' className='onegotextbox'>
              <Typography variant="body1" color="initial"><EmojiEventsIcon /> My Three GO Record</Typography>
            </Stack>
            <Accordion className='AccordionBox' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className='ExpandMoreIcon' />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Box className="AccordiontableBox">
                  <Typography variant="body1" color="initial">202402291808</Typography>
                  <Typography variant="body1" color="initial">	Loss</Typography>
                  <Typography variant="body1" color="initial">	0.97</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Typography variant="body1" color="initial" className='text-success'>Period Detail</Typography>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Period</Typography><Typography variant="body1" color="initial">202402291757</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Contract Money</Typography><Typography variant="body1" color="initial">
                      1.00</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Contract Count</Typography>
                    <Typography variant="body1" color="initial">0</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Delivery</Typography>
                    <Typography variant="body1" color="initial">0.97</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Fee</Typography>
                    <Typography variant="body1" color="initial">
                      0.030000000000000027</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Open Price</Typography>
                    <Typography variant="body1" color="initial">
                      202402291757</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Result</Typography>
                    <Typography variant="body1" color="initial" className="resulttext">
                      8 Violet Small</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Select</Typography>
                    <Typography variant="body1" color="initial">
                      0</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Status</Typography>
                    <Typography variant="body1" color="initial">
                      Loss</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Amount</Typography>
                    <Typography variant="body1" color="initial">0</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Create Time</Typography>
                    <Typography variant="body1" color="initial">
                      2024-02-29 17:56:42</Typography>
                  </Stack>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion className='AccordionBox' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className='ExpandMoreIcon' />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Box className="AccordiontableBox">
                  <Typography variant="body1" color="initial">202402291808</Typography>
                  <Typography variant="body1" color="initial">	Loss</Typography>
                  <Typography variant="body1" color="initial">	0.97</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Typography variant="body1" color="initial" className='text-success'>Period Detail</Typography>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Period</Typography><Typography variant="body1" color="initial">202402291757</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Contract Money</Typography><Typography variant="body1" color="initial">
                      1.00</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Contract Count</Typography>
                    <Typography variant="body1" color="initial">0</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Delivery</Typography>
                    <Typography variant="body1" color="initial">0.97</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Fee</Typography>
                    <Typography variant="body1" color="initial">
                      0.030000000000000027</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Open Price</Typography>
                    <Typography variant="body1" color="initial">
                      202402291757</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Result</Typography>
                    <Typography variant="body1" color="initial" className="resulttext">
                      8 Violet Small</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Select</Typography>
                    <Typography variant="body1" color="initial">
                      0</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Status</Typography>
                    <Typography variant="body1" color="initial">
                      Loss</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Amount</Typography>
                    <Typography variant="body1" color="initial">0</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Create Time</Typography>
                    <Typography variant="body1" color="initial">
                      2024-02-29 17:56:42</Typography>
                  </Stack>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion className='AccordionBox' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className='ExpandMoreIcon' />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Box className="AccordiontableBox">
                  <Typography variant="body1" color="initial">202402291808</Typography>
                  <Typography variant="body1" color="initial">	Loss</Typography>
                  <Typography variant="body1" color="initial">	0.97</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Typography variant="body1" color="initial" className='text-success'>Period Detail</Typography>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Period</Typography><Typography variant="body1" color="initial">202402291757</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Contract Money</Typography><Typography variant="body1" color="initial">
                      1.00</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Contract Count</Typography>
                    <Typography variant="body1" color="initial">0</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Delivery</Typography>
                    <Typography variant="body1" color="initial">0.97</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Fee</Typography>
                    <Typography variant="body1" color="initial">
                      0.030000000000000027</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Open Price</Typography>
                    <Typography variant="body1" color="initial">
                      202402291757</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Result</Typography>
                    <Typography variant="body1" color="initial" className="resulttext">
                      8 Violet Small</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Select</Typography>
                    <Typography variant="body1" color="initial">
                      0</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Status</Typography>
                    <Typography variant="body1" color="initial">
                      Loss</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Amount</Typography>
                    <Typography variant="body1" color="initial">0</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Create Time</Typography>
                    <Typography variant="body1" color="initial">
                      2024-02-29 17:56:42</Typography>
                  </Stack>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion className='AccordionBox' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className='ExpandMoreIcon' />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Box className="AccordiontableBox">
                  <Typography variant="body1" color="initial">202402291808</Typography>
                  <Typography variant="body1" color="initial">	Loss</Typography>
                  <Typography variant="body1" color="initial">	0.97</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Typography variant="body1" color="initial" className='text-success'>Period Detail</Typography>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Period</Typography><Typography variant="body1" color="initial">202402291757</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Contract Money</Typography><Typography variant="body1" color="initial">
                      1.00</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Contract Count</Typography>
                    <Typography variant="body1" color="initial">0</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Delivery</Typography>
                    <Typography variant="body1" color="initial">0.97</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Fee</Typography>
                    <Typography variant="body1" color="initial">
                      0.030000000000000027</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Open Price</Typography>
                    <Typography variant="body1" color="initial">
                      202402291757</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Result</Typography>
                    <Typography variant="body1" color="initial" className="resulttext">
                      8 Violet Small</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Select</Typography>
                    <Typography variant="body1" color="initial">
                      0</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Status</Typography>
                    <Typography variant="body1" color="initial">
                      Loss</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Amount</Typography>
                    <Typography variant="body1" color="initial">0</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Create Time</Typography>
                    <Typography variant="body1" color="initial">
                      2024-02-29 17:56:42</Typography>
                  </Stack>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion className='AccordionBox' expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className='ExpandMoreIcon' />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Box className="AccordiontableBox">
                  <Typography variant="body1" color="initial">202402291808</Typography>
                  <Typography variant="body1" color="initial">	Loss</Typography>
                  <Typography variant="body1" color="initial">	0.97</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Typography variant="body1" color="initial" className='text-success'>Period Detail</Typography>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Period</Typography><Typography variant="body1" color="initial">202402291757</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Contract Money</Typography><Typography variant="body1" color="initial">
                      1.00</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Contract Count</Typography>
                    <Typography variant="body1" color="initial">0</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Delivery</Typography>
                    <Typography variant="body1" color="initial">0.97</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Fee</Typography>
                    <Typography variant="body1" color="initial">
                      0.030000000000000027</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Open Price</Typography>
                    <Typography variant="body1" color="initial">
                      202402291757</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Result</Typography>
                    <Typography variant="body1" color="initial" className="resulttext">
                      8 Violet Small</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Select</Typography>
                    <Typography variant="body1" color="initial">
                      0</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Status</Typography>
                    <Typography variant="body1" color="initial">
                      Loss</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Amount</Typography>
                    <Typography variant="body1" color="initial">0</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Create Time</Typography>
                    <Typography variant="body1" color="initial">
                      2024-02-29 17:56:42</Typography>
                  </Stack>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion className='AccordionBox' expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className='ExpandMoreIcon' />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Box className="AccordiontableBox">
                  <Typography variant="body1" color="initial">202402291808</Typography>
                  <Typography variant="body1" color="initial">	Loss</Typography>
                  <Typography variant="body1" color="initial">	0.97</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Typography variant="body1" color="initial" className='text-success'>Period Detail</Typography>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Period</Typography><Typography variant="body1" color="initial">202402291757</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Contract Money</Typography><Typography variant="body1" color="initial">
                      1.00</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Contract Count</Typography>
                    <Typography variant="body1" color="initial">0</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Delivery</Typography>
                    <Typography variant="body1" color="initial">0.97</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Fee</Typography>
                    <Typography variant="body1" color="initial">
                      0.030000000000000027</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Open Price</Typography>
                    <Typography variant="body1" color="initial">
                      202402291757</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Result</Typography>
                    <Typography variant="body1" color="initial" className="resulttext">
                      8 Violet Small</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Select</Typography>
                    <Typography variant="body1" color="initial">
                      0</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Status</Typography>
                    <Typography variant="body1" color="initial">
                      Loss</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Amount</Typography>
                    <Typography variant="body1" color="initial">0</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Create Time</Typography>
                    <Typography variant="body1" color="initial">
                      2024-02-29 17:56:42</Typography>
                  </Stack>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion className='AccordionBox' expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className='ExpandMoreIcon' />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Box className="AccordiontableBox">
                  <Typography variant="body1" color="initial">202402291808</Typography>
                  <Typography variant="body1" color="initial">	Loss</Typography>
                  <Typography variant="body1" color="initial">	0.97</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Typography variant="body1" color="initial" className='text-success'>Period Detail</Typography>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Period</Typography><Typography variant="body1" color="initial">202402291757</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Contract Money</Typography><Typography variant="body1" color="initial">
                      1.00</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Contract Count</Typography>
                    <Typography variant="body1" color="initial">0</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Delivery</Typography>
                    <Typography variant="body1" color="initial">0.97</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Fee</Typography>
                    <Typography variant="body1" color="initial">
                      0.030000000000000027</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Open Price</Typography>
                    <Typography variant="body1" color="initial">
                      202402291757</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Result</Typography>
                    <Typography variant="body1" color="initial" className="resulttext">
                      8 Violet Small</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Select</Typography>
                    <Typography variant="body1" color="initial">
                      0</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Status</Typography>
                    <Typography variant="body1" color="initial">
                      Loss</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Amount</Typography>
                    <Typography variant="body1" color="initial">0</Typography>
                  </Stack>
                  <Stack direction='row' alignItems='center' justifyContent='space-between' my={1} className='accordian-data'>
                    <Typography variant="body1" color="initial">Create Time</Typography>
                    <Typography variant="body1" color="initial">
                      2024-02-29 17:56:42</Typography>
                  </Stack>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Box className="paginationTable">
              <Pagination count={10} />
            </Box>
          </Box>
        }
      </Box>
    </Box>
  )
}

export default WinFiveMin


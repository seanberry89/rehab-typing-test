import React from 'react';
import { Box, Divider, Paper, Stack, styled, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { flexCenter } from '../../theme/CustomTheme';

import RehabLogo from '../../assets/images/rehab-therapy-logo.png';


const StartLink = styled(Link) `

  text-decoration: none;
  margin-top: 25px;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
  };

`;

const StyledPaper = styled(Paper) `

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #2F7ABF;
  color: #fff;
  height: 50px;
  width: 125px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 15px;

`;

const StyledLogo = styled(Box)`

  width: 100px;
  height: 125px;
  object-fit: cover;
  padding-top: 25px;

`;

const StyledIcon = styled(IconButton)`

  cursor: default;
  background-color: #fff;

  &:hover {
    background-color: #fff;
  }

`;


const Home = () => {

  return (
    <Box sx={{ height: "100vh" }}>
      <Stack sx={{ height: "100%", width: "100%" }} direction={{ xs: "column", md: "row" }} justifyContent="center" alignItems="center">
        <Stack sx={{ width: { xs: "100%", md: "50%" }, height: "75%", pb: 2 }} direction="column" justifyContent="center" alignItems="center">
          <StyledLogo component="img" src={RehabLogo} />
          <Typography fontSize={{ xs: "30px", md: "40px" }} color="#3C4551" fontWeight={700}>Rehab Typing Test</Typography>
          <StartLink to="/select"><StyledPaper elevation={10}>Let's Start</StyledPaper></StartLink>
        </Stack>
        <Stack sx={{ width: { xs: "100%", md: "50%" }, height: "100%", backgroundColor: theme => theme.palette.primary.main, px: 8 }} divider={<Divider color="#fff" orientation="horizontal" flexItem />} direction="column" justifyContent="center" alignItems="center">
            <Box sx={{ ...flexCenter, flexDirection: "column", height: "33%" }}><StyledIcon><Box component="img" src="https://cdn-icons-png.flaticon.com/512/850/850960.png" height={{ xs: "32px", md: "50px" }} width={{ xs: "32px", md: "50px" }} /></StyledIcon><Typography sx={{ mt: { xs: 0.5, md: 2 }, color: "#fff" }} fontSize={{ xs: 14, md: 18 }}>calculates words-per-minute</Typography></Box>
            <Box sx={{ ...flexCenter, flexDirection: "column", height: "33%" }}><StyledIcon><Box component="img" src="https://cdn-icons-png.flaticon.com/128/8010/8010221.png" height={{ xs: "32px", md: "50px" }} width={{ xs: "32px", md: "50px" }} /></StyledIcon><Typography sx={{ mt: { xs: 0.5, md: 2 }, color: "#fff" }} fontSize={{ xs: 14, md: 18 }}>measures typing accuracy</Typography></Box>
            <Box sx={{ ...flexCenter, flexDirection: "column", height: "33%" }}><StyledIcon><Box component="img" src="https://cdn-icons-png.flaticon.com/512/5726/5726470.png" height={{ xs: "32px", md: "50px" }} width={{ xs: "32px", md: "50px" }} /></StyledIcon><Typography sx={{ mt: { xs: 0.5, md: 2 }, color: "#fff" }} fontSize={{ xs: 14, md: 18 }}>identifies most missed letters</Typography></Box>
        </Stack>
      </Stack>
    </Box>
  );

};

export default Home;

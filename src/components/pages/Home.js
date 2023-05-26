import { useState } from 'react';
import { Box, Divider, Paper, Stack, styled, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { flexCenter } from '../../theme/CustomTheme';

import RehabLogo from '../../images/rehab-therapy-logo.png';


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
  height: 50px;
  width: 125px;
  background-color: #2F7ABF;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 15px;

`;

const StyledLogo = styled(Box)`

  height: 125px;
  width: 125px;
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

const colors = [

  { id: 0, title: "Red", color: "#FF0000" },
  { id: 1, title: "Orange", color: "#FF7F00" },
  { id: 2, title: "Yellow", color: "#FFFF00" },
  { id: 3, title: "Green", color: "#00FF00" },
  { id: 4, title: "Blue", color: "#0000FF" },
  { id: 5, title: "Indigo", color: "#4B0082" },
  { id: 6, title: "Violet", color: "#9400D3" },
  { id: 7, title: "Red Violet", color: "#C0448F" },
  { id: 8, title: "Red Orange", color: "#FF5349" },
  { id: 9, title: "Blue Violet", color: "#7366BD" },
  { id: 10, title: "Carnation Pink", color: "#FFAACC" },
  { id: 11, title: "Yellow Orange", color: "#FFB653" },
  { id: 12, title: "Blue Green", color: "#199EBD" },
  { id: 13, title: "Violet Red", color: "#F75394" },
  { id: 14, title: "Cerulean", color: "#1DACD6" },
  { id: 15, title: "Scarlet", color: "#FC2847" },
  { id: 16, title: "Tan", color: "#FAA76C" },
  { id: 17, title: "Chestnut", color: "#BC5D58" }

 ];

 let random = colors[Math.floor(Math.random() * colors.length)];

const Home = () => {

  const [ demo, setDemo ] = useState([

    {
    id: 1, key: "a"
    },
    {id: 2, key: "a"
    },
    {
      id: 3, key: "c"
    },
    {
      id: 4, key: "c"
    },
    {
      id: 5, key: "e"
    },
    {
      id: 6, key: "e"
    },
    {
      id: 7, key: "g"
    },
    {
      id: 8, key: "g"
    },
    {
      id: 9, key: "d"
    },
    {
      id: 11, key: "d"
    },
    {
      id: 12, key: "m"
    },
    {
      id: 13, key: "n"
    }]
  );

  // here is a way to retrieve the first five items from array, but I need to arrange the highest amount of duplicates before I slice() the array
  demo?.slice(0, 5).map(() => {

    let itemColor = colors[Math.floor(Math.random() * colors.length)];

    console.log(itemColor);

    return itemColor;

  });


  return (
    <Box sx={{ height: "100vh" }}>
      <Stack sx={{ height: "100%", width: "100%" }} direction={{ xs: "column", md: "row" }} justifyContent="center" alignItems="center">
        <Stack sx={{ width: { xs: "100%", md: "50%" }, height: "75%", pb: 2 }} direction="column" justifyContent="center" alignItems="center">
          <StyledLogo component="img" src={RehabLogo}></StyledLogo>
          <Typography variant="h3" color="#3C4551" fontWeight={700}>Rehab Typing Test</Typography>
          <StartLink to="/select"><StyledPaper elevation={10}>Let's Start</StyledPaper></StartLink>
        </Stack>
        <Stack sx={{ width: { xs: "100%", md: "50%" }, height: "100%", backgroundColor: theme => theme.palette.primary.main, px: 8 }} divider={<Divider color="#fff" orientation="horizontal" flexItem />} direction="column" justifyContent="center" alignItems="center">
            <Box sx={{ ...flexCenter, flexDirection: "column", height: "33%" }}><StyledIcon><Box component="img" src="https://cdn-icons-png.flaticon.com/512/850/850960.png" height="50px" width="50px" /></StyledIcon><Typography sx={{ mt: { xs: 1, md: 2 }, color: "#fff" }} fontSize={18} variant="body1">calculates words-per-minute</Typography></Box>
            <Box sx={{ ...flexCenter, flexDirection: "column", height: "33%" }}><StyledIcon><Box component="img" src="https://cdn-icons-png.flaticon.com/128/8010/8010221.png" height="50px" width="50px" /></StyledIcon><Typography sx={{ mt: { xs: 1, md: 2 }, color: "#fff" }} fontSize={18} variant="body1">measures typing accuracy</Typography></Box>
            <Box sx={{ ...flexCenter, flexDirection: "column", height: "33%" }}><StyledIcon><Box component="img" src="https://cdn-icons-png.flaticon.com/512/5726/5726470.png" height="50px" width="50px" /></StyledIcon><Typography sx={{ mt: { xs: 1, md: 2 }, color: "#fff" }} fontSize={18} variant="body1">identifies the most missed letters</Typography></Box>
        </Stack>
      </Stack>
    </Box>
  );

};

export default Home;

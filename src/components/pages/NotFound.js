import React from 'react';
import { Box, Paper, Stack, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const StyledLink = styled(Link) `

  text-decoration: none;
  transition: transform 0.75s ease-in-out;

  &:hover {
    transform: scale(1.2);
  };

`;

const StyledPaper = styled(Paper) `

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 50px;
  width: 125px;
  background-color: #fff;
  color: #2F7ABF;
  font-size: 16px;
  font-weight: bold;
  border-radius: 15px;

`;


const NotFound = () => {

  return (
    <Box sx={{ backgroundColor: theme => theme.palette.primary.main, height: "100vh" }}>
      <Stack sx={{ height: "100%", width: "100%", textAlign: "center", px: 5 }} direction="column" justifyContent="center" alignItems="center" spacing={6}>
        <Typography sx={{ backgroundColor: "#fff", borderRadius: 10, px: 3, py: 3 }} variant="h2" fontWeight={700} color="#3C4551">Whoops!&nbsp; You're lost!</Typography>
        <Typography sx={{ px: { xs: 0, md: 30 } }} variant="h6" color="#fff">Looks like you've typed yourself outside of the typing test.&nbsp; Click on the button below to return to the homepage.</Typography>
        <StyledLink to="/" ><StyledPaper elevation={10}>Return Home</StyledPaper></StyledLink>
      </Stack>
    </Box>
  );
};

export default NotFound;

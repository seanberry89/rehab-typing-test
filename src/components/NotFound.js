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
      <Stack sx={{ height: "100%", width: "100%", textAlign: "center", px: 8 }} direction="column" justifyContent="center" alignItems="center" spacing={6}>
        <Typography variant="h2" color="#fff">Whoops! You're lost!</Typography>
        <Typography variant="h6" color="#fff">Looks like this page isn't a part of the typing test. Click on the button below to return to the homepage.</Typography>
        <StyledLink to="/" ><StyledPaper elevation={10}>Return Home</StyledPaper></StyledLink>
      </Stack>
    </Box>
  );

};

export default NotFound;

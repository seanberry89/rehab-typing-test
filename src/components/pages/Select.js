import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack, styled, Typography, useMediaQuery } from '@mui/material';

import useRehabContext from '../../hooks/useRehabContext';

import scrabble from '../../images/scrabble-letters.jpg';
import typewriter from '../../images/typewriter.jpg';
import laptop from '../../images/typing-one.jpg';

const LeftLink = styled(Link) `

  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  ), url(${scrabble});
  background-size: cover;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.5);
  height: 225px;
  width: 200px;
  margin: 25px;
  border-radius: 25px;
  text-decoration: none;
  transition: transform 0.75s ease-in-out;

  &:hover {
    background-color: transparent;
    transform: scale(1.2);
  }

`;

const MiddleLink = styled(Link)`

  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  ), url(${typewriter});
  background-size: cover;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.5);
  height: 225px;
  width: 200px;
  margin: 25px;
  border-radius: 25px;
  text-decoration: none;
  transition: transform 0.75s ease-in-out;

  &:hover {
    background-color: transparent;
    transform: scale(1.2);
  }

`;

const RightLink = styled(Link)`

  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  ), url(${laptop});
  background-size: cover;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.5);
  height: 225px;
  width: 200px;
  margin: 25px;
  border-radius: 25px;
  text-decoration: none;
  transition: transform 0.75s ease-in-out;

  &:hover {
    background-color: transparent;
    transform: scale(1.2);
  }

`;

const LeftMobileLink = styled(Link) `

  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  ), url(${scrabble});
  background-size: cover;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.5);
  height: 125px;
  width: 100px;
  margin: 25px;
  border-radius: 25px;
  text-decoration: none;
  transition: transform 0.75s ease-in-out;

  &:hover {
    background-color: transparent;
    transform: scale(1.2);
  }

`;

const MiddleMobileLink = styled(Link)`

  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  ), url(${typewriter});
  background-size: cover;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.5);
  height: 125px;
  width: 100px;
  margin: 25px;
  border-radius: 25px;
  text-decoration: none;
  transition: transform 0.75s ease-in-out;

  &:hover {
    background-color: transparent;
    transform: scale(1.2);
  }

`;

const RightMobileLink = styled(Link)`

  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  ), url(${laptop});
  background-size: cover;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.5);
  height: 125px;
  width: 100px;
  margin: 25px;
  border-radius: 25px;
  text-decoration: none;
  transition: transform 0.75s ease-in-out;

  &:hover {
    background-color: transparent;
    transform: scale(1.2);
  }

`;


const Select = () => {

  const context = useRehabContext();
  const { setOneMin, setThreeMin, setFiveMin, exitTest } = context;

  const mobile = useMediaQuery('(max-width: 600px)');

  useEffect(() => {

    exitTest();

    localStorage.removeItem("minutes");
    localStorage.removeItem("seconds");
    localStorage.removeItem("data");

    // eslint-disable-next-line
  }, []);


  const clickOne = () => {

    setOneMin();

  };


  const clickThree = () => {

    setThreeMin();

  };


  const clickFive = () => {

    setFiveMin();

  };


  return (
    <Box sx={{ height: "100vh", background: theme => theme.palette.primary.main }}>
      <Stack sx={{ height: "100%", px: 2 }} direction="column" justifyContent="center" alignItems="center" spacing={{ xs: 2, sm: 5 }}>

          { mobile ? (

            <Fragment>
              <Box>
                <Typography color="#fff" fontSize={24} variant="h5">Select the length of your typing test:</Typography>
              </Box>
              <Stack direction="column" justifyContent="space-evenly" alignItems="center">
                <LeftMobileLink to="/test">
                  <Typography sx={{ pb: 3 }} variant="h2" color="#fff" fontWeight={900} fontSize={32} onClick={clickOne}>1-min</Typography>
                </LeftMobileLink>
                <MiddleMobileLink to="/test">
                  <Typography sx={{ pb: 3 }} variant="h2" color="#fff" fontWeight={900} fontSize={32} onClick={clickThree}>3-min</Typography>
                </MiddleMobileLink>
                <RightMobileLink to="/test">
                  <Typography sx={{ pb: 3 }} variant="h2" color="#fff" fontWeight={900} fontSize={32} onClick={clickFive}>5-min</Typography>
                </RightMobileLink>
              </Stack>
            </Fragment>

          ) : (

            <Fragment>
              <Box>
                <Typography color="#fff" fontSize={28} variant="h5">Select the length of your typing test:</Typography>
              </Box>
              <Stack direction="row" justifyContent="space-evenly" alignItems="center">
                <LeftLink to="/test">
                  <Typography sx={{ pb: 3 }} variant="h2" color="#fff" fontWeight={900} onClick={clickOne}>1-min</Typography>
                </LeftLink>
                <MiddleLink to="/test">
                  <Typography sx={{ pb: 3 }} variant="h2" color="#fff" fontWeight={900} onClick={clickThree}>3-min</Typography>
                </MiddleLink>
                <RightLink to="/test">
                  <Typography sx={{ pb: 3 }} variant="h2" color="#fff" fontWeight={900} onClick={clickFive}>5-min</Typography>
                </RightLink>
              </Stack>
            </Fragment>

          )}

      </Stack>
    </Box>
  );
};

export default Select;

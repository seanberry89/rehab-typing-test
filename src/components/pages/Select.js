import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack, styled, Typography, useMediaQuery } from '@mui/material';

import useRehabContext from '../../hooks/useRehabContext';
import useImageLoader from '../../hooks/useImageLoader';
import Loading from './Loading';

import scrabble from '../../assets/images/scrabble.jpg';
import typewriter from '../../assets/images/typewriter.jpg';
import laptop from '../../assets/images/typing.jpg';
import scrabblePlaceholder from '../../assets/images/scrabble-placeholder.jpg';
import typewriterPlaceholder from '../../assets/images/typewriter-placeholder.jpg';
import laptopPlaceholder from '../../assets/images/typing-placeholder.jpg';


const LeftLink = styled(Link) `

  display: flex;
  align-items: center;
  justify-content: center;
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
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.5);
  height: 150px;
  width: 125px;
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
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.5);
  height: 150px;
  width: 125px;
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
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.5);
  height: 150px;
  width: 125px;
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
  const { setOneMin, setThreeMin, setFiveMin, loading, exitTest } = context;

  const scrabbleImg = useImageLoader(scrabble, scrabblePlaceholder);
  const typewriterImg = useImageLoader(typewriter, typewriterPlaceholder);
  const laptopImg = useImageLoader(laptop, laptopPlaceholder);

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

      { !loading ? (

        <Fragment>
          <Stack sx={{ height: "100%", px: 2 }} direction="column" justifyContent="center" alignItems="center" spacing={{ xs: 2, sm: 5 }}>

              { mobile ? (

                <Fragment>
                  <Typography color="#fff" fontSize={22}>Select the length of your typing test:</Typography>
                  <Stack direction="row" justifyContent="center" alignItems="center">
                    <LeftMobileLink style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${scrabbleImg})`, backgroundSize: "cover" }} to="/test">
                      <Typography sx={{ pb: 3 }} color="#fff" fontWeight={900} fontSize={40} onClick={clickOne}>1-min</Typography>
                    </LeftMobileLink>
                    <MiddleMobileLink style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${typewriterImg})`, backgroundSize: "cover" }} to="/test">
                      <Typography sx={{ pb: 3 }} color="#fff" fontWeight={900} fontSize={40} onClick={clickThree}>3-min</Typography>
                    </MiddleMobileLink>
                  </Stack>
                  <RightMobileLink style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${laptopImg})`, backgroundSize: "cover" }} to="/test">
                    <Typography sx={{ pb: 3 }} color="#fff" fontWeight={900} fontSize={40} onClick={clickFive}>5-min</Typography>
                  </RightMobileLink>
                </Fragment>

              ) : (

                <Fragment>
                  <Box>
                    <Typography color="#fff" fontSize={28} variant="h5">Select the length of your typing test:</Typography>
                  </Box>
                  <Stack direction="row" justifyContent="space-evenly" alignItems="center">
                    <LeftLink style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${scrabbleImg})`, backgroundSize: "cover" }} to="/test">
                      <Typography sx={{ pb: 3 }} variant="h2" color="#fff" fontWeight={900} onClick={clickOne}>1-min</Typography>
                    </LeftLink>
                    <MiddleLink style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${typewriterImg})`, backgroundSize: "cover" }} to="/test">
                      <Typography sx={{ pb: 3 }} variant="h2" color="#fff" fontWeight={900} onClick={clickThree}>3-min</Typography>
                    </MiddleLink>
                    <RightLink style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${laptopImg})`, backgroundSize: "cover" }} to="/test">
                      <Typography sx={{ pb: 3 }} variant="h2" color="#fff" fontWeight={900} onClick={clickFive}>5-min</Typography>
                    </RightLink>
                  </Stack>
                </Fragment>

              )}

          </Stack>
        </Fragment>

      ) : ( <Loading /> )}

    </Box>
  );
};

export default Select;

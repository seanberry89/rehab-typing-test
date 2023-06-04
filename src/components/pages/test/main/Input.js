import { Fragment } from 'react';
import { Box, IconButton, Paper, Stack, styled } from '@mui/material';
import '../../../../assets/style/typing.css';

import useRehabContext from '../../../../hooks/useRehabContext';

import Outgoing from './Outgoing';
import Cursor from './Cursor';

import { FaRedo } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';


const ResetButton = styled(IconButton) `

  background-color: #32CD32;
  padding: 15px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #32CD32;
  }

  &:active {
    transform: scale(1.1);
  }

`;

const PauseButton = styled(IconButton) `

  background-color: #FF0000;
  padding: 15px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #FF0000;
  }

  &:active {
    transform: scale(1.1);
  }

`;

const PlayButton = styled(IconButton) `

  background-color: #FF0000;
  padding: 15px 13px 15px 17px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #FF0000;
  }

  &:active {
    transform: scale(1.1);
  }

`;

const StoryButton = styled(IconButton) `

  background-color: #9c27b0;
  padding: 15px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #9c27b0;
  }

  &:active {
    transform: scale(1.1);
  }

`;

const LeftInput = styled(Stack) `

  display: inline-block;
  width: 50%;
  height: 100%;
  font-weight: 300;
  text-align: right;
  white-space: nowrap;
  user-select: none;
  overflow: hidden;

`;

const RightInput = styled(Stack) `

  display: inline-block;
  width: 50%;
  height: 100%;
  font-weight: 300;
  white-space: nowrap;
  user-select: none;
  overflow: hidden;

`;

const Fade = styled(Box) `

  position: absolute;
  left: 0;
  top: 0;
  height: 85%;
  width: 150px;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255),
    transparent 50%
  );
  margin-top: 10px;
  margin-left: 0px;
  border-radius: 10px;

`;


const Input = ({ data, current, incoming, outgoing, setCurrent, setIncoming, setIncorrectChar, setCorrectChar, setOutgoing, setMinutes, setSeconds, setIsExcerpt, isBlink }) => {

  const context = useRehabContext();
  const { timer, isPaused, oneMin, threeMin, fiveMin, endTimer, pauseTest, playTest } = context;


  const pauseClick = () => {

    pauseTest();

  };


  const playClick = () => {

    playTest();

  };


  const resetClick = () => {

    endTimer();

    setOutgoing([]);
    setCurrent(data.excerpt.slice(0, 1));
    setIncoming(data.excerpt.slice(1));
    setIncorrectChar([{ id: 0, key: "" }]);
    setCorrectChar([{ id: 0, key: "" }]);

    if(fiveMin){

      setMinutes(5);
      setSeconds(0);

    } else if(threeMin){

      setMinutes(3);
      setSeconds(0);

    } else if(oneMin) {

      setMinutes(1);
      setSeconds(0);

    };

  };


  const storyClick = () => {

    resetClick();
    setIsExcerpt(false);

  };


  return (

    <Fragment>

      <Stack direction="column" justifyContent="center" alignItems="center" spacing={3}>

        <Paper sx={{ position: "relative", width: { xs: "350px", sm: "550px", md: "850px", lg: "1000px" }, height: { xs: "145px", md: "150px" }, borderRadius: 5, py: 6 }} elevation={10}>

          <Fade />

          <Stack sx={{ width: "100%", height: "100%" }} justifyContent="space-between" alignItems="center" direction="row">

            <LeftInput sx={{ fontSize: { xs: 34, sm: 36, md: 38 } }} justifyContent="center" alignItems="center" direction="column">

              <Outgoing outgoing={outgoing} data={data} />

              <Cursor data={data} isBlink={isBlink} />

              { current?.map((item) => {

                let space = item.key === " ";

                return (

                  <Fragment key={item.id}>
                    { space ? (
                      <span style={{ display: "inline-block", width: "10px" }}>{space}</span>
                    ) : (
                      <span>{item.key}</span>
                    )}
                  </Fragment>

                );

              })}

            </LeftInput>
            <RightInput sx={{ fontSize: {  xs: 34, sm: 36, md: 38 } }} justifyContent="center" alignItems="center" direction="column">

              { incoming?.map((item) => {

                let space = item.key === " ";

                return (

                  <Fragment key={item.id}>
                    { space ? (
                      <span style={{ display: "inline-block", width: "10px" }}>{space}</span>
                    ) : (
                      <span>{item.key}</span>
                    ) }
                  </Fragment>

                );

              })}

            </RightInput>
          </Stack>

        </Paper>

        <Stack direction="row" justifyContent="center" alignItems="center" spacing={3}>

          { !timer && isPaused ? (

            <PlayButton title="Play" onClick={playClick}><FaPlay color="#fff" size={35} /></PlayButton>

            ) : (

            <PauseButton title="Pause" onClick={pauseClick}><FaPause color="#fff" size={35} /></PauseButton>

          ) }

          <ResetButton title="Reset" onClick={resetClick}><FaRedo color="#fff" size={35} /></ResetButton>

          <StoryButton title="New Excerpt" onClick={storyClick}><FaBook color="#fff" size={35} /></StoryButton>

        </Stack>
      </Stack>
    </Fragment>
  )
};

export default Input;

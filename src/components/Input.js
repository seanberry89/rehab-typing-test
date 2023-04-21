import { Fragment, useState, useCallback } from 'react';
import { IconButton, Paper, Stack, styled } from '@mui/material';
import { flexCenter } from '../theme/CustomTheme';
import "../style/letters.css";

import useRehabContext from '../hooks/useRehabContext';
import useOnChange from '../hooks/useOnChange';

import { FaRedo } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import Icons from './Icons';

// which input event should start the timer? onChange or something else?
// onChange occurs when the value of the input has changed...
// onKeyDown occurs when the key in the keyboard has been pressed...

// Notes:
// Like hangman app, create two arrays to check if wordX in array1 matches wordX in array2: which is the typed letter vs the randomized letter. Then, perhaps, a third and fourth array, that houses right / wrong letters.  Create 3rd and 4th array as such: to house right letters and wrong letters, and then eventually, create a function to find the total of the most wrong letters.

// select the value of the input vs the randomized paragraph... or the value of the typed letters and spaces vs letters and spaces of the randomized paragraph..?

// create function in onKeyDown to check for the matching letters via if-statement

// functions can be used inside if-statements...

// Notes:
// create array1 to house the string of random words (and substring of letters)
// create array2 to house the string of typed words (and substring of letters)
// create array3 to house the incorrect letters
// create array4 to house the correct letters (optional)

// Notes:
// (selected element) + innerHTML is the equivalent of inserting the data inside brackets between an element in React
// input event listener is the equivalent to the keyDown event

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
  padding: 15px 15px 15px 20px;
  padding: 15px;
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


const Input = ({ data, minutes, setMinutes, setSeconds, setIsParagraph }) => {

  const context = useRehabContext();
  const { isPaused, endTimer, pauseTest, playTest } = context;

  const [ input, setInput ] = useState("");

  useOnChange(data, input);


  const pauseClick = () => {

    pauseTest();

  };


  const playClick = () => {

    playTest();

  };


  const resetClick = () => {

    endTimer();

    setInput("");

    if(minutes > 3){

      setMinutes(5);
      setSeconds(0);

    } else if(minutes <= 3 && minutes > 1){

      setMinutes(3);
      setSeconds(0);

    } else if (minutes <= 1) {

      setMinutes(1);
      setSeconds(0);

    };

  };

  const storyClick = () => {

    resetClick();
    setIsParagraph(false);

  };

  const setFocus = useCallback((el) => {

    el?.focus();

    if(isPaused){

      el?.blur();

    };

  }, [ resetClick, playClick ]);

  return (

    <Fragment>

      <Stack direction="column" justifyContent="center" alignItems="center" spacing={3}>

        <input ref={setFocus} style={{ opacity: 0, zIndex: -10, position: "absolute" }} type="text" spellCheck="false" value={input} onChange={(e) => setInput(e.target.value)} />

        <Paper sx={{ width: { xs: "400px", md: "600px", lg: "1000px" }, height: "150px", borderRadius: 5, px: 2, py: 6 }} elevation={10}>

          <Stack sx={{ width: "100%", height: "100%" }} direction="row" justifyContent="space-between" alignItems="center" spacing={1}>

            <Icons data={data} />

            <div style={{ fontSize: "40px", whiteSpace: "nowrap", userSelect: "none", overflow: "hidden" }}>

              { data.excerpt?.split("").map((char, charId) => {

                  let style;

                  if(charId < input.length){

                  style = char === input[charId] ? "correct" : "incorrect"

                  };

                  return (

                    <span key={char + charId} className={style}>{char}</span>

                  );

              })}

            </div>

          </Stack>

        </Paper>

        <Stack direction="row" justifyContent="center" alignItems="center" spacing={3}>

          { isPaused ? (

            <PlayButton title="Play" onClick={playClick}><FaPlay color="#fff" size={35} /></PlayButton>

            ) : (

            <PauseButton title="Pause" onClick={pauseClick}><FaPause color="#fff" size={35} /></PauseButton>

          ) }

          <ResetButton title="Reset" onClick={resetClick}><FaRedo color="#fff" size={35} /></ResetButton>

          <StoryButton title="New Paragraph" onClick={storyClick}><FaBook color="#fff" size={35} /></StoryButton>

        </Stack>
      </Stack>
    </Fragment>
  )
};

export default Input;

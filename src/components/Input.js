import { Fragment, useState, useEffect, useCallback } from 'react';
import { IconButton, Paper, Stack, styled, TextField } from '@mui/material';
import { flexCenter } from '../theme/CustomTheme';

import useRehabContext from '../hooks/useRehabContext';

import { FaRedo } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';

import { v4 as uuidv4 } from 'uuid';

// which input event should start the timer? onChange or something else?
// onChange occurs when the value of the input has changed...
// onKeyDown occures when a key in the keyboard has been pressed...

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
// (selected element) + innerHTML is the equivalent to inserting the data inside a parenthesis between an element in React
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

const Input = ({ data, input, minutes, setMinutes, setSeconds, setIsParagraph, setInput }) => {

  const context = useRehabContext();
  const { isPaused, startTimer, endTimer, pauseTest, playTest } = context;

  const [ letterIndex, setLetterIndex ] = useState(0);

  const id = uuidv4();

  // Notes: eventually, use event's (e), to track the typed letters of the paragraph

  // Notes: everytime I type the paragraph gets re-rendered.. need to stop

  // Option 1:
  // select the element via getElementById(), which leads to the selection of the newly-created span elements via querySelectorAll('span')

  useEffect(() => {

    console.log(input);

  }, [input]);


  // compare letters every time the user presses the key
  const onKeyDown = (event) => {

    startTimer();

    let key = event.key || event.code;

    // this equals all characters typed in the input: letters, quotations, spacebar, shift, capslock; which needs to be filtered via if-statement? Or, instead of taking out the special keys, just include the letters and see if that works?
    // console.log(key);

    if(key >= "KeyA" && key <= "KeyZ" || key >= "a" && key <= "z" || key === "Quote" || key === "Space"){

      // if these keys are hit.. run function to check if the letters the match
      checkLetters();

      // increase the letter index by +1
      setLetterIndex(prev => prev + 1);

      console.log(key);

    };

      // if(data.includes(letter)){};

      // letter is the current value
      // index is the letter's position in the array
      data.split("").forEach((letter, index) => {

        // gives me every character: letters, semi-colo, apostraphe
        // console.log(letter);


        // const character = letter[0];
        // const characterA = letter[1];
        // const characterB = letter[2];

        // Issue: the function is grabbing the index which is the letter's position and first letter of the array.. which works



        // console.log(`My index is ${index} and value is ${letter}`);

      });


      // for(let i = 0; i < data.length; i++){

      //   const character = data[i];

      //   console.log(character);

      //   // if(letterKey === character){

      //   //   console.log("you typed the right letter");

      //   // } else {

      //   //   console.log("you typed the wrong letter")

      //   // };

      // };

    if(key === " " || key === "Space"){

      // check if the word matches after pressing the spacebar
      console.log("you pressed the space bar");

    };

    // check if the character matches after pressing the character key
    // if(key === data[index]){

    // };

    // consoles key pressed on keydown
    // console.log(e.key);

  };

  const onChange = (e) => {

    setInput(e.target.value);


    // Note: the letter check could be housed inside the onChange event listener..
    // data.split("").forEach((letter, index) => {

    //   const character = data[index];

    // });

  };


    // const match = check === input.trim();
    // if(input.trim() === data){
    //   console.log("Yes this works!")
    // };


  const checkLetters = () => {

    const letter = data[letterIndex].toLowerCase();

    // selects the first character in the paragraph string
    console.log(letter);

    if(letter === input){

      console.log("the first letter matches");

    } else {

      console.log("this doesn't work, bro");

    };

  };


  const pauseClick = () => {

    pauseTest();

  };


  const playClick = () => {

    playTest();

  };

  // need to clear the input value too
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

  // randomize new paragraph excerpt too
  const storyClick = () => {

    resetClick();
    setIsParagraph(false);

  };

  // gives me the first three letters of the paragraph
  // console.log(data[0], data[1], data[2]);

  return (

    <Fragment>
      <Stack direction="column" justifyContent="center" alignItems="center" spacing={3}>
        <Paper sx={{ ...flexCenter, width: { xs: "400px", md: "600px", lg: "1000px" }, height: "150px", borderRadius: 5 }} elevation={10}>

          {/* { paragraphs.length !== 0 && paragraphs.map((paragraph) => (

            <Fragment key={id}>

              { paragraph.split().map((chars, index) => (

                <TextField key={index} variant="standard" value={chars} sx={{ width: "95%" }} InputProps={{ sx: { fontSize: "50px" }, disableUnderline: true }} autoFocus={true} onKeyDown={onKeyDown} onChange={onChange} />

              )) }

            </Fragment>

          )) } */}

          <TextField variant="standard" value={input} sx={{ width: "95%" }} InputProps={{ sx: { fontSize: "50px" }, disableUnderline: true }} autoFocus={true} onKeyDown={onKeyDown} onChange={onChange} />

        </Paper>

        <Stack direction="row" justifyContent="center" alignItems="center" spacing={3}>

          { isPaused ? (

            <PlayButton title="Play" onClick={playClick}><FaPlay color="#fff" size={35} /></PlayButton>

            ) : (

            <PauseButton title="Pause" onClick={pauseClick}><FaPause color="#fff" size={35} /></PauseButton>

          )}

          <ResetButton title="Reset" onClick={resetClick}><FaRedo color="#fff" size={35} /></ResetButton>

          <StoryButton title="New Paragraph" onClick={storyClick}><FaBook color="#fff" size={35} /></StoryButton>

        </Stack>
      </Stack>
    </Fragment>
  )
};

export default Input;

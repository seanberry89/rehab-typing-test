import { Fragment } from 'react';
import { Box, Paper, Typography } from '@mui/material';

import { v4 as uuidv4 } from 'uuid';

import "../style/letters.css";

// split() splits a string into an array of substrings, which uses the delimiter as the parameter to divide each string (from sting to array)

// or, supposedly, spread operator [...blank] of a string inside an array via spread operator, can split a string into substrings inside an array

// split("").forEach((character) => {}) returns each character from the substring, which would be useful if I was returning a new component..

// join() joins substrings from an array into a single string, which uses the delimiter as the parameter to combine each string (from array to string)

// charAt() returns the character from a string based on the specified index as the parameter: 0, 1, length - 1, or other


const Reader = ({ data, input }) => {

  const id = uuidv4();

  // this method grabs the string of each letter in an array, so make this a variable and then compare to the typed letters

  // data.slice("").map((item) => {
  //   // this grabs the whole paragraph (all of the split letters)
  //   console.log(item);
  //   console.log(item[0]);
  //   console.log(item[2]);
  //   // this doesn't capture the blank spaces, so this grabs the "s" of a new word
  //   console.log(item[5]);
  // });

  // Notes:
  // check the typing of the event.target.value with the letters in the array

  // "randomExcerpt" vs "letter" in a returned component:
  // need to select and return each letter so I can affect each letter in the reader, such as color and strike-thru the letters when they're wrong or right...


  // method found in keyDown
  const updateCorrectLetters = () => {


  };


  // method found in keyDown
  const updateWrongLetters = () => {


  };

  // Notes:
  // What if I store the typed letters in separate states, correct and incorrect, and if they match the typed letters then they become red or green?

  // Option 1:
  // sx={{ color: { correct ? "red" : "blue" } }};

  // Option 2:
  // create a child component that returns a span with the paragraph data for each letter, which then I would use className for correct and incorrect letters

  // Paper -- 1000px width + 200px height

  return (

    <Fragment>
      <Box sx={{ px: 10 }}>
      <Paper sx={{ width: "1000px", height: "200px", px: 2, py: 2 }} elevation={10}>

        { data?.split('<span>').map((letter, index) =>

          <Box key={index}>

            {/* { use if/else operator to color the letters } */}
            {/* Example: { correctLetters.includes(letter) ? letter : ' ' } */}
            <Typography id="reader" component="p" fontSize={16} variant="body1">
                {letter}
            </Typography>

          </Box>

        )}

      </Paper>
      </Box>
    </Fragment>

  );
};

export default Reader;

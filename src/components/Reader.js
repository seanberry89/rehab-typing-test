import { Fragment, useState } from 'react';
import { Box, Paper, TextField } from '@mui/material';

import useKeyDown from '../hooks/useKeyDown';
import useKeyPress from '../hooks/useKeyPress';

const Reader = ({ input, setInput }) => {

  // like the other video, I could move the index/character manually with state
  const [ currentCharacter, setCurrentCharacter ] = useState({ id: 0, key: "" });

  const [ index, setIndex ] = useState(0);


  // useKeyPress((key) => {

  //   // this iterates through the whole list, matching and not matching, so perhaps iterate outside of hook beforehand..? Maybe save as a ref..? Then insert into hook?
  //   // for(var i = 0; i < data.length; i++ ){ };

  //     // gives me the letter index from the paragraph
  //     // console.log(i);

  //     // // gives me each letter from the paragraph
  //     // console.log(data[i]);


  //     // data.split("").forEach((char, charId) => { });


  //     // conditional for when the user presses the keyboard to match the letter
  //     // Note: this matches now.. but look into alternative ways to match
  //     // Note: data.split("").forEach doesn't work... need a new alternative
  //     if(key === currentCharacter){

  //       getCorrectLetters(prev => [ ...prev, { id: currentCharacter.id, key: currentCharacter.key } ]);

  //       setCurrentCharacter(prev => {
  //         return {
  //           id: prev + 1,
  //           key: data?.charAt(prev + 1)
  //         }
  //       });

  //       console.log("this works!");

  //     } else if(key !== currentCharacter) {

  //       if(wrongLetters.find( item => item.key === currentCharacter.key && item.id === currentCharacter.id )){

  //         return null;

  //       } else {

  //         getWrongLetters(prev => [ ...prev, { id: currentCharacter.id, key: currentCharacter.key } ]);

  //         setCurrentCharacter(prev => {
  //           return {
  //             id: prev + 1,
  //             key: data?.charAt(prev + 1)
  //           }
  //         });

  //         console.log("this doesn't work...");

  //       };

  //     };

  //     // conditional for when the user presses the space button
  //     if(key === " "){

  //     };

  //     // conditional for when the user presses the backspace
  //     if(key === "Backspace"){

  //     };

  // });

  // Works! Got the first character now.
  // Note: re-render issue as the first render doesn't give me the character
  // useEffect(() => {

  //   setCurrentCharacter({ id: 0, key: data?.charAt(0) });

  // }, [data]);

  // useKeyDown(data);


  // this gives me the first letter of paragraph
  // console.log(data.charAt(0));

  // Previous Paper Dimensions: width 1000px / height 200px

  return (

    <Fragment>
      <Box sx={{ px: 10 }}>
      <TextField autoFocus={true} spellCheck="false" onChange={(e) => setInput(e.target.value)} />
      <Paper sx={{ width: { xs: "400px", md: "600px", lg: "1000px" }, height: "150px", borderRadius: 5, overflow: "hidden", fontSize: "35px", whiteSpace: "nowrap", userSelect: "none", px: 2, py: 2 }} elevation={10}>

          {/* { data?.split("").map((char, charId) => {

              let style;

              if(index < input.length){

              style = char === input[index] ? "correct" : "incorrect"

              };

              return (

                <span key={char + charId}>{char}</span>

              );

          })} */}

      </Paper>
      </Box>
    </Fragment>

  );

};

export default Reader;

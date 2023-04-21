import { useEffect, useState } from 'react';
import useRehabContext from './useRehabContext';

const useKeyDown = (data) => {

  const { startTimer } = useRehabContext();

  const [ character, getCharacter ] = useState("");
  const [ index, getIndex ] = useState(0);

  const [ correctLetters, getCorrectLetters ] = useState([{ id: 0, key: "" }]);
  const [ wrongLetters, getWrongLetters ] = useState([{ id: 0, key: "" }]);

  // const [ keydown, setKeydown ] = useState([]);
  // const [ keyIndex, setKeyIndex ] = useState(0);

  const matchLetters = (key) => {

    console.log("this works...");

    data.split("").forEach((char, charId) => {

      // what if I add up the total keys until index amount then if statement could read if "total amount" !== index || charId < "adding of keys" variable

      // Issue: each key is just going to the length of 1.. right?
      // Thought: what if I create a variable ceiling for the keys to get to?

      if(char === key[charId]){

        console.log("key matches so green");

        getCorrectLetters(char);

        // setKeyIndex(prev => prev + 1);

      } else if(char !== key[charId]) {

        console.log("key doesn't match so red");

        if(wrongLetters.find(item => item.key === char && item.id === charId)){

          return null;

        } else {

          getWrongLetters(prev => [ ...prev, { id: charId, key: char } ]);

          // setKeyIndex(prev => prev + 1);

        };

      };

    });

  };



  // useEffect(() => {

  //   document.onkeydown = (e) => {

  //     let key = e.key;
  //     let shift = key === "Shift";
  //     let caps = key === "CapsLock";
  //     let alt = key === "Alt";

  //     // boolean for true when keydown equals only a letter
  //     const letter = key.length === 1 && key !== " ";

  //     // conditional that doesn't read keydown of shift, caps, alt
  //     // if(!shift && !caps && !alt){};

  //     if(letter){

  //       // if these keys are hit.. runs function to check if letters match
  //       matchLetters(key);

  //       e.preventDefault();

  //       console.log("you pressed a key that wasn't shift, caps, nor alt");

  //     };



  //     if(key === "Backspace"){

  //       // maybe dim the right/wrong words afterward

  //     };

  //   };

  //   // doesn't work
  //   const onKeyDown = (event) => {

  //     startTimer();

  //     let key = event.key;

  //       // if(data.includes(letter)){};

  //       // letter is the current value
  //       // index is the letter's position in the array
  //       data.split("").forEach((letter, index) => {

  //         // gives me every character: letters, semi-colo, apostraphe
  //         // console.log(letter);


  //         // const character = letter[0];
  //         // const characterA = letter[1];
  //         // const characterB = letter[2];

  //         // Issue: the function is grabbing the index which is the letter's position and first letter of the array.. which works

  //         // console.log(`My index is ${index} and value is ${letter}`);

  //       });


  //     if(key === " " || key === "Space"){

  //       // check if the word matches after pressing the spacebar
  //       console.log("you pressed the space bar");

  //     };

  //   };

  //   return () => {

  //     document.onkeydown = null;

  //   };

  //   // eslint-disable-next-line
  // }, []);


  useEffect(() => {

    data.split("").forEach((char, charId) => {

      getCharacter(char);
      getIndex(charId);

    });

    const onKeyDown = (e) => {

      let key = e.key;
      let shift = key === "Shift";
      let caps = key === "CapsLock";
      let alt = key === "Alt";

      const letter = key.length === 1 && key !== " ";

      // setKeydown(prev => [ ...prev, key ]);

      if(letter){

        // if(!shift && !caps && !alt){

          data.split("").map((char, charId) => {

            if(letter === char){

              console.log(`this is the pressed key: ${key}`);

            };

          });

        // };

      };

    };

    document.addEventListener("keydown", onKeyDown);

    return () => {

      document.removeEventListener("keydown", onKeyDown);

    };

    // eslint-disable-next-line
  }, []);


  console.log(character);
  console.log(index);

  // console.log(wrongLetters);
  // console.log(correctLetters);

  // Note: what if there is an event that moves the word span left after the keydown has been triggered...?
  // Note: animation is the caret staying and moving to the left of the typed word... which then could move the container on its own as the cursor stays to the left of each word

  return null;

}

export default useKeyDown;

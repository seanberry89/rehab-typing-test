import { useEffect, useState } from 'react';
import useRehabContext from './useRehabContext';


const useOnChange = (data) => {

  const { timer, startTimer } = useRehabContext();

  // fill() changes the values in the array to a static value and join() concatenates the blank-string value as 44 blank-strings
  const [ padding, setPadding ] = useState(
    new Array(27).fill(" ").join("")
  );

  const [ input, setInput ] = useState("");
  const [ current, setCurrent ] = useState([]);
  const [ incoming, setIncoming ] = useState(data.excerpt);
  const [ outgoing, setOutgoing ] = useState([]);
  const [ correctLetters, getCorrectLetters ] = useState([{ id: 0, key: "" }]);
  const [ wrongLetters, getWrongLetters ] = useState([{ id: 0, key: "" }]);

  // Thought: hard-code an array of objects with each letter of the alphabet assigned to a different color?

  useEffect(() => {

    // updates state current to be the first character of paragraph
    // setCurrent(data?.excerpt.charAt(0));
    setCurrent(data.excerpt.slice(0, 1));

    // updates state incoming to be the second character of paragraph + rest of string
    // setIncoming(data?.excerpt.substring(1));
    setIncoming(data.excerpt.slice(1));

    // eslint-disable-next-line
  }, [data]);


  useEffect(() => {

    // starts the timer when input value is not blank
    if(!timer && input !== ""){

      startTimer();

    };

    // matchLetters();

    // // Restart Button: doesn't run anything if input value is blank
    // if(input === ""){

    //   return;

    // // Typing: runs below functions after every user type
    // } else {

    //   matchLetters();

    // };

    // Note: concatenate strings via += is the best method for adding strings to variable
    // Note: currentWord gets added to updatedOutgoingWords via typed input

    // updatedOutgoingWords += currentWord;
    // setOutgoingWords(updatedOutgoingWords);

    // setCurrentWord(incomingWords.charAt(0));

    // updatedIncomingWords += incomingWords.substring(1);
    // setIncomingWords(updatedIncomingWords);

    // setOutgoingWords(prev => [ ...prev, { id: correctLetters.id || wrongLetters.id, key: correctLetters.key || wrongLetters.key }]);


    // eslint-disable-next-line
  }, [input]);


  const matchLetters = () => {

    data?.excerpt.split("").forEach((char, charId) => {

      // console.log(char[0]);

      // state current could be input[charId]?

      if(charId < input.length){

        if(char === input[charId]){

          if(correctLetters.find(item => item.key === char && item.id === charId)){

            return null;

          } else {

            getCorrectLetters(prev => [ ...prev, { id: charId, key: char } ]);

          };

          console.log("key matches so green");

        } else if(char !== input[charId]) {

          if(wrongLetters.find(item => item.key === char && item.id === charId)){

            return null;

          } else {

            getWrongLetters(prev => [ ...prev, { id: charId, key: char } ]);

          };

          console.log("key doesn't match so red");

        };

        // outgoing gets updated by the previous state + current state
        current.map((item) => {

          if(item.key === input[item.id]){

            setOutgoing(prev => [ ...prev, {

              id: item.id,
              key: { correct: item.key }

            }])

          } else {

            setOutgoing(prev => [ ...prev, {

              id: item.id,
              key: { wrong: item.key }

            }])

          };

        });

        // current updates the first character of state incoming
        setCurrent(incoming.slice(0, 1));

        // incoming updates the second character of state incoming + rest of paragraph
        setIncoming(incoming.slice(1));

        // setOutgoing(prev => prev + current);
        // setCurrent(incoming.charAt(0));
        // setIncoming(incoming.substring(1));

      };

    });

  };

  // Note: create function to update incoming, oncoming, and current letters after type
  // perhaps break the input into four categories that update after every type: padding, oncoming, current, and incoming

  // const updateLetters = () => {

  //   // decreases length of padding for each render until zero
  //   if(padding.length > 0 ){

  //     setPadding(padding.substring(1));

  //   };

  //   // Note: if padding.length === 0 then substring(1) from outgoingWords.. ?

  //   // Note: maybe create conditional when padding is gone and outgoing span can trail outside of input?

  //   // Note: what if padding array and outgoing array are the same... then keep decreasing the whole array via substring()? Or, I process both functions to variable outgoingWords then add them to setState()...

  //   // update outgoing
  //   // updatedOutgoingWords += currentWord;
  //   // Issue: outgoingwords does not depart from the input field

  //   // update outgoing state to be the previous state of currentWord + copy the prior states of currentWord too
  //   // if statement if the input === currentword or not, which then updates the outgoing state

  //   setOutgoing(prev => prev + current);

  //   // update current state to be the first character of state incoming
  //   setCurrent(incoming.charAt(0));

  //   // update incoming to be the second character of state incoming + rest of the string
  //   setIncoming(incoming.substring(1));

  //   // update both if incomingWords is greater than 0
  //   // if(incomingWords.length > 0){

  //   // } else {

  //   //   return null;

  //   // };

  // };

  // };


  return [ input, current, incoming, outgoing, wrongLetters, setInput, setCurrent, setIncoming, setOutgoing ];


};

export default useOnChange;

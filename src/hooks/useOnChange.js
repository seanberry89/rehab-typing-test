import { useEffect, useState } from 'react';
import useRehabContext from './useRehabContext';

const useOnChange = (data, input) => {

  const { startTimer } = useRehabContext();

  const [ correctLetters, getCorrectLetters ] = useState([{ id: 0, key: "" }]);
  const [ wrongLetters, getWrongLetters ] = useState([{ id: 0, key: "" }]);


  useEffect(() => {

    if(input.length > 0){

      startTimer();

    };

    matchLetters();

    // eslint-disable-next-line
  }, [input]);


  const matchLetters = () => {

    data.excerpt?.split("").forEach((char, charId) => {

      if(charId < input.length){

        if(char === input[charId]){

          console.log("key matches so green");

          getCorrectLetters(char);

        } else if(char !== input[charId]) {

          console.log("key doesn't match so red");

          if(wrongLetters.find(item => item.key === char && item.id === charId)){

            return null;

          } else {

            getWrongLetters(prev => [ ...prev, { id: charId, key: char } ]);

          };

        };

      };

    });

  };


  return null;


};

export default useOnChange;

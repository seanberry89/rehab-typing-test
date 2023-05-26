import { useEffect, useState } from 'react';
import { typingKeys } from '../data/Other';
import useRehabContext from './useRehabContext';

let countdown;
let delay = 8000;


const useKeyDown = (data) => {

  const { timer, isPaused, results, startTimer } = useRehabContext();

  const [ current, setCurrent ] = useState([]);
  const [ incoming, setIncoming ] = useState(data.excerpt);
  const [ outgoing, setOutgoing ] = useState([]);

  const [ correctChar, setCorrectChar ] = useState([{ id: 0, key: "" }]);
  const [ incorrectChar, setIncorrectChar ] = useState([{ id: 0, key: "" }]);

  const [ isBlink, setIsBlink ] = useState(true);


  useEffect(() => {

    // updates state current to be the first character of paragraph
    // setCurrent(data?.excerpt.charAt(0));
    setCurrent(data.excerpt.slice(0, 1));

    // updates state incoming to be the second character of paragraph + rest of string
    // setIncoming(data?.excerpt.substring(1));
    setIncoming(data.excerpt.slice(1));

    // eslint-disable-next-line
  }, [data]);


  // keydown / keyup for updating user typing
  useEffect(() => {

    document.onkeydown = (e) => {

      let key = e.key;

      // conditional to start timer after the first character
      if(!timer && !isPaused){

        startTimer();

      };

      // conditional for when the user types ONLY the characters in the array
      if(!results && typingKeys.includes(key)){

        clearTimeout(countdown);

        if(isBlink){

          setIsBlink(false);

        };

        if(!timer){

          return;

        } else {

          updateLetters(key);

          e.preventDefault();

         };

      };

      // conditional for when the user deletes a typed character
      if(key === "Backspace"){

        if(!timer){

          return;

        } else {

          deleteLetters();

          e.preventDefault();

        };

      };

    };

    document.onkeyup = () => {

      clearTimeout(countdown);

      countdown = setTimeout(() => {

        setIsBlink(true);

      }, delay);

    }

    return () => {

      document.onkeydown = null;
      document.onkeyup = null;

    };

  // no dependency means effect hook runs on every render
  });


  const updateLetters = (key) => {

    // outgoing gets updated by the previous state + current state
    current.map((item) => {

      if(item.key === key){

        setOutgoing(prev => [ ...prev, {

          id: item.id,
          correct: item.key

        }])

        if(correctChar.find(i => i.key === item.key && i.id === item.id)){

          return null;

        } else {

          setCorrectChar(prev => [ ...prev, { id: item.id, key: item.key } ]);

        };

      } else if(item.key !== key){

        setOutgoing(prev => [ ...prev, {

          id: item.id,
          incorrect: item.key

        }])

        if(incorrectChar.find(i => i.key === item.key && i.id === item.id)){

          return null;

        } else {

          setIncorrectChar(prev => [ ...prev, { id: item.id, key: item.key } ]);

        };

      };

    });

    // current updates the first character of state incoming
    setCurrent(incoming.slice(0, 1));

    // incoming updates the second character of state incoming + rest of paragraph
    setIncoming(incoming.slice(1));

  };


  const deleteLetters = () => {

    outgoing.map((item, index, arr) => {

      // filters last item in the index
      if(arr.length - 1 === index){

        const { id, correct, incorrect } = item;

        // deletes prev outgoing char
        setOutgoing(prev => prev.filter(item => item.id !== id));

        if(correct){

          // adds deleted outgoing character (correct) to current state
          setCurrent([{
            id: id,
            key: correct
          }]);

        };

        if(incorrect){

          // adds deleted outgoing character (incorrect) to current state
          setCurrent([{
            id: id,
            key: incorrect
          }]);

        };

        current.map((item) => {

          const { id, key } = item;

          // removes previous current state
          setCurrent(prev => prev.filter(item => item.id !== id));

          // adds deleted current state to be first character of state incoming
          setIncoming(prev => [{
            id,
            key
          }, ...prev ]);

        })

      } else {

        return;

      };

    });

  };


  return [ incoming, current, outgoing, incorrectChar, correctChar, isBlink, setIncoming, setCurrent, setOutgoing, setIncorrectChar, setCorrectChar ];


};

export default useKeyDown;

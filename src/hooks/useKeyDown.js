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
  const [ missedChar, setMissedChar ] = useState([]);

  const [ isBlink, setIsBlink ] = useState(true);

  let empty = [];
  let key = "key";


  useEffect(() => {

    // updates state current to be first character of excerpt
    setCurrent(data.excerpt.slice(0, 1));

    // updates state incoming to be the second character of excerpt + rest
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

      // conditional for when the user types ONLY the selected characters
      if(!results && typingKeys.includes(key)){

        clearTimeout(countdown);

        if(isBlink){

          setIsBlink(false);

        };

        if(!timer){

          return;

        } else {

          updateCharacters(key);

          e.preventDefault();

         };

      };

      // conditional for when the user deletes a typed character
      if(key === "Backspace"){

        if(!timer){

          return;

        } else {

          deleteCharacters();

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

  });


  useEffect(() => {

    updateMissedCharacters();

  }, [incorrectChar]);


  const updateCharacters = (key) => {

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

    // update state current to be first character of state incoming
    setCurrent(incoming.slice(0, 1));

    // update state incoming to be second character of state incoming + rest
    setIncoming(incoming.slice(1));

  };


  // the issue is I haven't deleted character from correctChar nor incorrectChar yet
  const deleteCharacters = () => {

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

          // deletes prev correct char
          setCorrectChar(prev => prev.filter(item => item.id !== id));

        };

        if(incorrect){

          // adds deleted outgoing character (incorrect) to current state
          setCurrent([{
            id: id,
            key: incorrect
          }]);

          // deletes prev incorrect char
          setIncorrectChar(prev => prev.filter(item => item.id !== id));

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


  const updateMissedCharacters = () => {

    incorrectChar.forEach((item) => {

      let space = item.key === " " || item.key === "";

      if(!space){

        // check for an object in new array that contains the key value
        if(empty.some((val) => val[key] === item[key])){

          // if so, increase property 'count' by 1
          empty.forEach((itemTwo) => {

            if(itemTwo[key] === item[key]){

              itemTwo["count"]++;

            };

          });

          // if not, create new property 'count' to be value of 1
        } else {

          let itemThree = {};

          itemThree[key] = item[key];

          itemThree["count"] = 1;

          empty.push(itemThree);

        };

      };

    });

    empty.sort((a, b) => b.count - a.count);

    setMissedChar(empty.slice(0, 5));

  };


  return [ incoming, current, outgoing, incorrectChar, correctChar, missedChar, isBlink, setIncoming, setCurrent, setOutgoing, setIncorrectChar, setCorrectChar ];


};

export default useKeyDown;

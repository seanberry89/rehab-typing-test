import { useEffect, useState } from 'react';
import useRehabContext from './useRehabContext';

import paragraphs from '../data/paragraphs.json';

const useParagraph = () => {

  const context = useRehabContext();
  const { testPage, oneMin, threeMin, fiveMin } = context;

  const [ isParagraph, setIsParagraph ] = useState(false);

  // selected paragraph
  const [ data, setData ] = useState("");

  // correct letters: typed letters are insert into this array and used again to be given a class of green
  const [ correctLetters, getCorrectLetters ] = useState([]);

  // wrong letters: typed letters are insert into this array and used again to be given a class of red and strike-thru
  const [ wrongLetters, getWrongLetters ] = useState([]);

  // initialize three different variables based on length: oneMinute, threeMinute, and fiveMinute
  let typeData = paragraphs.paragraphs;

  // index = means the index of the current element processed in the array

  // Note: I could also receive the index from method map(), which is what Brad used for the Hangman App

  useEffect(() => {

    if(!isParagraph){

      setIsParagraph(true);

    };

  }, [testPage, isParagraph]);


  useEffect(() => {

    if(oneMin && isParagraph){

      let random = typeData[Math.floor(Math.random() * typeData.length)];

      let randomExcerpt = random.excerpt;

      // breaks the excerpt into separate letters inside their own array
      let test = randomExcerpt.split("");

      // letter is the current element processed in the array, while index is the index of the current element processed in the array
      randomExcerpt.split("").map((letter, index) => `

        <span>
          ${letter}
        </span>

      `);

      // Thought: as setState Hook is returning one character at a time and NOT the whole paragraph; however, "randomExcerpt" could be the data used for the element but "letter" can be the logic used for identifying the typed letters.. yes?

      return setData(randomExcerpt);

    };


    if(threeMin && isParagraph){

      let random = typeData[Math.floor(Math.random() * typeData.length)];

      let randomExcerpt = random.excerpt;

      setData(randomExcerpt);

    };


    if(fiveMin && isParagraph){

      let random = typeData[Math.floor(Math.random() * typeData.length)];

      let randomExcerpt = random.excerpt;

      setData(randomExcerpt);

    };


    // eslint-disable-next-line
  }, [isParagraph]);

  return [ data, setIsParagraph ];

};

export default useParagraph;

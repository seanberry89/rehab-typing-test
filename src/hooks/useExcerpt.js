import { useEffect, useState } from 'react';
import useRehabContext from './useRehabContext';
import useLocalStorage from './useLocalStorage';

import excerpts from '../data/excerpts.json';


const useParagraph = () => {

  const context = useRehabContext();
  const { testPage, oneMin, threeMin, fiveMin } = context;

  const [ data, setData ] = useLocalStorage({ title: "", chapter: "", excerpt: [{ id: "", key: "" }] }, "data");

  const [ isExcerpt, setIsExcerpt ] = useState(false);


  useEffect(() => {

    if(!isExcerpt){

      setIsExcerpt(true);

    };

  }, [testPage, isExcerpt]);


  useEffect(() => {

    // 1min paragraph
    if(oneMin && isExcerpt){

      let random = excerpts[Math.floor(Math.random() * excerpts.length)];

      let randomTitle = random.title;
      let randomChapter = random.chapter;
      let randomExcerpt = random.excerpt;
      let splitExcerpt = [];

      randomExcerpt.split("").forEach((char, charId) => {

        splitExcerpt.push({
          id: charId,
          key: char
        })

      });

      setData({ title: randomTitle, chapter: randomChapter, excerpt: splitExcerpt })

    };


    // 3min paragraph
    if(threeMin && isExcerpt){

      let random = excerpts[Math.floor(Math.random() * excerpts.length)];

      let randomTitle = random.title;
      let randomChapter = random.chapter;
      let randomExcerpt = random.excerpt;
      let splitExcerpt = [];

      randomExcerpt.split("").forEach((char, charId) => {

        splitExcerpt.push({
          id: charId,
          key: char
        })

      });

      setData({ title: randomTitle, chapter: randomChapter, excerpt: splitExcerpt });

    };


    // 5min paragraph
    if(fiveMin && isExcerpt){

      let random = excerpts[Math.floor(Math.random() * excerpts.length)];

      let randomTitle = random.title;
      let randomChapter = random.chapter;
      let randomExcerpt = random.excerpt;
      let splitExcerpt = [];

      randomExcerpt.split("").forEach((char, charId) => {

        splitExcerpt.push({
          id: charId,
          key: char
        })

      });

      setData({ title: randomTitle, chapter: randomChapter, excerpt: splitExcerpt });

    };


    // eslint-disable-next-line
  }, [isExcerpt]);

  return [ data, setIsExcerpt ];

};

export default useParagraph;

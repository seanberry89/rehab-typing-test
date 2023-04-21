import { useEffect, useState } from 'react';
import useRehabContext from './useRehabContext';

import excerpts from '../data/excerpts.json';

const useParagraph = () => {

  const context = useRehabContext();
  const { testPage, oneMin, threeMin, fiveMin } = context;

  const [ isParagraph, setIsParagraph ] = useState(false);
  const [ data, setData ] = useState({ title: "", chapter: "", excerpt: "" });

  // initialize three different variables based on length: oneMinute, threeMinute, and fiveMinute?

  useEffect(() => {

    if(!isParagraph){

      setIsParagraph(true);

    };

  }, [testPage, isParagraph]);


  useEffect(() => {

    // 1min paragraph
    if(oneMin && isParagraph){

      let random = excerpts[Math.floor(Math.random() * excerpts.length)];

      let randomTitle = random.title;
      let randomChapter = random.chapter;
      let randomExcerpt = random.excerpt;

      setData({ title: randomTitle, chapter: randomChapter, excerpt: randomExcerpt });

    };

    // 3min paragraph
    if(threeMin && isParagraph){

      let random = excerpts[Math.floor(Math.random() * excerpts.length)];

      let randomTitle = random.title;
      let randomChapter = random.chapter;
      let randomExcerpt = random.excerpt;

      setData({ title: randomTitle, chapter: randomChapter, excerpt: randomExcerpt });

    };

    // 5min paragraph
    if(fiveMin && isParagraph){

      let random = excerpts[Math.floor(Math.random() * excerpts.length)];

      let randomTitle = random.title;
      let randomChapter = random.chapter;
      let randomExcerpt = random.excerpt;

      setData({ title: randomTitle, chapter: randomChapter, excerpt: randomExcerpt });

    };

    // eslint-disable-next-line
  }, [isParagraph]);

  return [ data, setIsParagraph ];

};

export default useParagraph;

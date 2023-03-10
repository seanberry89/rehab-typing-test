import { useState, useEffect } from 'react';
import useRehabContext from './useRehabContext';

const useLocalStorage = () => {

  const context = useRehabContext();
  const { testPage } = context;

  const [ getLocal, getLocalStorage ] = useState("");


  useEffect(() => {

    const item = localStorage.getItem("minutes");

    getLocalStorage(item);

    // eslint-disable-next-line
  }, [testPage]);


  const removeLocalStorage = () => {

    localStorage.removeItem("minutes");

  };


  // setLocalMinutes / setLocalParagraph / or randomize paragraph on page refresh
  const setLocalStorage = (value) => {

    localStorage.setItem("minutes", value);

  };


  return [ setLocalStorage, removeLocalStorage, getLocal ];

};

export default useLocalStorage;

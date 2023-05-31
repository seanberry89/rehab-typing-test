import { useState, useEffect } from 'react';


const useLocalStorage = (defaultValue, key) => {

  const [ value, setValue ] = useState(() => {

    const localItem = localStorage.getItem(key);

    return localItem !== null ? JSON.parse(localItem) : defaultValue;

  });


  useEffect(() => {

    localStorage.setItem(key, JSON.stringify(value));

  }, [value]);


  return [ value, setValue ];

}

export default useLocalStorage;

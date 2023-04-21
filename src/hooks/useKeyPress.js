import { useState, useEffect } from 'react';


const useKeyPress = (callback) => {

  const [ keyPress, setKeyPress ] = useState("");

  useEffect(() => {

    const onKeyDown = (e) => {

      let key = e.key;
      let shift = key === "Shift";
      let caps = key === "Capslock";
      let alt = key === "Alt";

      if(key.length === 1 && key !== " "){

        if(!shift && !caps && !alt){

          // this works
          setKeyPress(key);

          callback(key);

        };

      };

    };

    const onKeyUp = () => {

      setKeyPress(null);

    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    return () => {

      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);

    };

    // Note: no dependency array means this hook runs on every render

  });


  useEffect(() => {

    

  }, []);


  return keyPress;


};

export default useKeyPress;

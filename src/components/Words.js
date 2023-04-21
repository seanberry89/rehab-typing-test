import { Fragment, useEffect, useState, useRef } from 'react';
import "../style/letters.css";

import useKeyDown from '../hooks/useKeyDown';

const Words = ({ data }) => {

  // useKeyDown(data);

  const [ currentIndex, setCurrentIndex ] = useState(0);

  const spanRef = useRef();

  const colorWords = (event) => {

    let key = event.key;
    let shift = key === "Shift";
    let caps = key === "CapsLock";
    let alt = key === "Alt";

    // const span = document.getElementById("span");

    const span = spanRef.current;

    data?.split("").map((char, index) => {

      if(!shift && !caps && !alt){

        if(key === char[index]){

          span.classList.add("correct");

        } else {

          span.classList.add("incorrect");

        };

      };

    });

  };


  // useEffect(() => {

  //   document.onkeydown = (event) => {

  //     colorWords(event);

  //     setCurrentIndex( currentIndex + 1 );

  //   };

  // }, [onkeydown]);


  return (

    <Fragment>

      <div style={{ fontSize: "30px" }}>

        { data?.split("").map((char, index) => {

            // let style;

            // if(keys.length > index){

            //   style = char === keys[index] ? "correct" : "incorrect";

            // };

            return (

              <span key={char + index} id="span" ref={spanRef}>{char}</span>

            );

           })
        }

      </div>

    </Fragment>

  );
};

export default Words;

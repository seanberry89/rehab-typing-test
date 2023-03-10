import { useState, useEffect } from 'react';
import { Box, Stack } from '@mui/material';

import useRehabContext from '../hooks/useRehabContext';
import useTimer from '../hooks/useTimer';
import useParagraph from '../hooks/useParagraph';
import useLocalStorage from '../hooks/useLocalStorage';

import Input from './Input';
import Timer from './Timer';
import Reader from './Reader';

// reset button (done)
// countdown timer (done)
// typing starts the app (done)
// load story into textfield
// top half is the textfield while bottom half loads results: wpm, accuracy, top 5 missed letters

const Test = () => {

  const context = useRehabContext();
  const { oneMin, threeMin, fiveMin, testPage, enterTest } = context;

  const [ minutes, setMinutes ] = useState(0);
  const [ seconds, setSeconds ] = useState(0);
  const [ input, setInput ] = useState("");

  useTimer(minutes, seconds, setMinutes, setSeconds);

  // insert typed letters into the custom hook so I can create separate functions for correct and incorrect letters for tracking?
  const [ data, setIsParagraph ] = useParagraph(input);

  const getLocal = useLocalStorage();
  const getNumber = Number(getLocal.slice(2, 3));


  useEffect(() => {

    if(!testPage){

      enterTest();

      if(oneMin){

        setMinutes(1);
        setSeconds(0);

      };

      if(threeMin){

        setMinutes(3);
        setSeconds(0);

      };

      if(fiveMin){

        setMinutes(5);
        setSeconds(0);

      };

    };

    if(testPage){

      setMinutes(getNumber);

    };

    // eslint-disable-next-line
  }, [testPage]);


  // Note: resolve the inquiry about the paragraph data in a separate reader before resolving the paragraph in the same input as the typer

  // Box: height -- 100vh

  return (

    <Box sx={{ height: "100vh", backgroundColor: theme => theme.palette.primary.main }}>
      <Stack sx={{ height: "100%" }} direction="column" justifyContent="center" alignItems="center" spacing={3}>

        <Timer minutes={minutes} seconds={seconds} />
        <Input data={data} input={input} setIsParagraph={setIsParagraph} minutes={minutes} setMinutes={setMinutes} setSeconds={setSeconds} setInput={setInput} />
        <Reader data={data} input={input} />

      </Stack>
  </Box>

  );
};

export default Test;

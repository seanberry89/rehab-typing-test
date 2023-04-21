import { useState, useEffect } from 'react';
import { Box, Stack } from '@mui/material';

import useRehabContext from '../../hooks/useRehabContext';
import useTimer from '../../hooks/useTimer';
import useParagraph from '../../hooks/useParagraph';
import useLocalStorage from '../../hooks/useLocalStorage';

import Timer from '../Timer';
import Title from '../Title';
import Input from '../Input';
import Results from '../Results';

// reset button (done)
// countdown timer (done)
// typing starts the app (done)
// load story into textfield (done)
// top half is the textfield while bottom half loads results: wpm, accuracy, top 5 missed letters

const Test = () => {

  const context = useRehabContext();
  const { oneMin, threeMin, fiveMin, testPage, enterTest } = context;

  const [ minutes, setMinutes ] = useState(0);
  const [ seconds, setSeconds ] = useState(0);

  useTimer(minutes, seconds, setMinutes, setSeconds);

  const [ data, setIsParagraph ] = useParagraph();

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

  return (

    <Box sx={{ height: "100vh", backgroundColor: theme => theme.palette.primary.main }}>

      <Stack sx={{ position: "fixed", width: "100%", backgroundColor: "transparent", zIndex: 5, px: 3, py: 3 }} direction="row" justifyContent="space-around" alignItems="center">
        <Timer minutes={minutes} seconds={seconds} />
        <Title data={data} />
      </Stack>

      <Stack sx={{ height: "100%" }} direction="column" justifyContent="center" alignItems="center" spacing={3}>
        <Input data={data} minutes={minutes} setMinutes={setMinutes} setSeconds={setSeconds} setIsParagraph={setIsParagraph} />
        <Results />
      </Stack>
    </Box>

  );
};

export default Test;

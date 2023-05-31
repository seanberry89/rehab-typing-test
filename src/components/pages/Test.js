import { Fragment, useEffect } from 'react';
import { Box, Stack } from '@mui/material';

import useRehabContext from '../../hooks/useRehabContext';
import useTimer from '../../hooks/useTimer';
import useExcerpt from '../../hooks/useExcerpt';
import useKeyDown from '../../hooks/useKeyDown';
import useLocalStorage from '../../hooks/useLocalStorage';

import Header from './test/header/Header';
import Timer from './test/main/Timer';
import Input from './test/main/Input';
import Results from './test/main/Results';
import Footer from './test/footer/Footer';


const Test = () => {

  const context = useRehabContext();
  const { oneMin, threeMin, fiveMin, results, loading } = context;

  const [ data, setIsExcerpt ] = useExcerpt();

  const [ minutes, setMinutes ] = useLocalStorage(0, "minutes");
  const [ seconds, setSeconds ] = useLocalStorage(0, "seconds");

  useTimer(minutes, seconds, setMinutes, setSeconds);

  const [ incoming, current, outgoing, incorrectChar, correctChar, missedChar, isBlink, setIncoming, setCurrent, setOutgoing, setIncorrectChar, setCorrectChar ] = useKeyDown(data);


  useEffect(() => {

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

    // eslint-disable-next-line
  }, []);


  return (

    <Fragment>

        <Box sx={{ height: "100vh", overflow: "hidden", backgroundColor: theme => theme.palette.primary.main }}>

          { results && !loading ? (

            <Results data={data} incorrectChar={incorrectChar} correctChar={correctChar} missedChar={missedChar} setCurrent={setCurrent} setIncoming={setIncoming} setOutgoing={setOutgoing} setIncorrectChar={setIncorrectChar} setCorrectChar={setCorrectChar} setMinutes={setMinutes} setSeconds={setSeconds} />

          ) : null }

          <Header data={data} minutes={minutes} seconds={seconds} />

          <Stack sx={{ height: "100%" }} direction="column" justifyContent="center" alignItems="center" spacing={2}>

            <Timer minutes={minutes} seconds={seconds} />

            <Input data={data} current={current} incoming={incoming} outgoing={outgoing} isBlink={isBlink} setCurrent={setCurrent} setIncoming={setIncoming} setOutgoing={setOutgoing} setIncorrectChar={setIncorrectChar} setCorrectChar={setCorrectChar} setMinutes={setMinutes} setSeconds={setSeconds} setIsExcerpt={setIsExcerpt}  />

          </Stack>

        </Box>

      <Footer />

    </Fragment>

  );
};

export default Test;

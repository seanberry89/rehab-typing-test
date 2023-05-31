import { useEffect, useRef } from 'react';
import useRehabContext from './useRehabContext';


const useTimer = (minutes, seconds, setMinutes, setSeconds) => {

  const context = useRehabContext();
  const { timer, isPaused, enterResults, setLoading } = context;

  const intervalOne = useRef(0);
  const intervalTwo = useRef(0);


  // handles interval for minutes
  useEffect(() => {

    if(minutes > 0 && seconds === 0 && timer){

      intervalOne.current = setInterval(() => {

        if(!isPaused){

          setMinutes(prev => prev - 1);

          setSeconds(59);

        };

      }, 1000);

      return () => {

        clearInterval(intervalOne.current);
        intervalOne.current = 0;

      };

    }

    // eslint-disable-next-line
  }, [minutes, seconds, timer, isPaused]);


  // handles interval for seconds
  useEffect(() => {

    if(seconds < 60 && seconds !== 0){

      intervalTwo.current = setInterval(() => {

        if(!isPaused){

        setSeconds(prev => prev - 1);

        };

      }, 1000);

      return () => {

        clearInterval(intervalTwo.current);
        intervalTwo.current = 0;

      };

    };

    // eslint-disable-next-line
  }, [seconds, isPaused]);


  // handles timer end
  useEffect(() => {

    if(timer && minutes === 0 && seconds === 0){

      setLoading(true);

      setTimeout(() => {

        setLoading(false);

        enterResults();

      }, 1500);

    };

    // eslint-disable-next-line
  }, [minutes, seconds]);
  

  return null;

};

export default useTimer;

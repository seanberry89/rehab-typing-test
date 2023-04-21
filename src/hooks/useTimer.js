import { useEffect, useRef } from 'react';
import useRehabContext from './useRehabContext';

const useTimer = (minutes, seconds, setMinutes, setSeconds) => {

  const context = useRehabContext();
  const { timer, isPaused, endTimer } = context;

  // Note: useRef Hook:
  // when you update the state.. you cause the component to re-render..

  // useRefs do not cause the state to re-update when its changed.. ref = { current: value }, takes a previous value and persists between re-renders but does not cause to re-render like state

  const intervalOne = useRef(0);
  const intervalTwo = useRef(0);

  // handles interval for minutes
  useEffect(() => {

    if(minutes > 0 && seconds === 0 && timer){

      intervalOne.current = setInterval(() => {

        if(!isPaused){

          setMinutes(prev => prev - 1);

          setSeconds(59);

        }

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

    }

    // eslint-disable-next-line
  }, [seconds, isPaused]);


  // handles timer end
  useEffect(() => {

    if(minutes === 0 && seconds === 0){

      endTimer();

    };

    // eslint-disable-next-line
  }, [minutes, seconds]);

};

export default useTimer;

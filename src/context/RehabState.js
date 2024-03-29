import { useReducer, useMemo } from 'react';
import { RehabContext } from './RehabContext';
import RehabReducer from './RehabReducer';
import { SET_ONE_MIN, SET_THREE_MIN, SET_FIVE_MIN, START_TIMER, END_TIMER, PAUSE_TEST, PLAY_TEST, EXIT_TEST, ENTER_RESULTS, EXIT_RESULTS, SET_LOADING } from './actions';

const initialState = {

  oneMin: false,
  threeMin: false,
  fiveMin: false,

  timer: false,
  isPaused: false,

  results: false,
  loading: false

};

const RehabState = ({children}) => {

  const [ state, dispatch ] = useReducer(RehabReducer, initialState);

  const value = useMemo(() => ({

    ...state,

    exitTest: () => { dispatch({ type: EXIT_TEST }) },
    enterResults: () => { dispatch({ type: ENTER_RESULTS }) },
    exitResults: () => { dispatch({ type: EXIT_RESULTS }) },

    setOneMin: () => { dispatch({ type: SET_ONE_MIN }) },
    setThreeMin: () => { dispatch({ type: SET_THREE_MIN }) },
    setFiveMin: () => { dispatch({ type: SET_FIVE_MIN }) },

    startTimer: () => { dispatch({ type: START_TIMER }) },
    endTimer: () => { dispatch({ type: END_TIMER }) },

    pauseTest: () => { dispatch({ type: PAUSE_TEST }) },
    playTest: () => { dispatch({ type: PLAY_TEST }) },

    setLoading: (value) => { dispatch({ type: SET_LOADING, payload: value }) }

    }), [state, dispatch]

  );


  return (
    <RehabContext.Provider value={value}>

      {children}

    </RehabContext.Provider>
  );
};

export default RehabState;

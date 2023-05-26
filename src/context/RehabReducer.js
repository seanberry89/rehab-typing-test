import { SET_ONE_MIN, SET_THREE_MIN, SET_FIVE_MIN, START_TIMER, END_TIMER, PAUSE_TEST, PLAY_TEST, EXIT_TEST, ENTER_RESULTS, EXIT_RESULTS, SET_LOADING } from './actions';


const RehabReducer = (state, action) => {

  switch(action.type) {

    case SET_ONE_MIN:
      return {
        ...state,
        oneMin: true,
        threeMin: false,
        fiveMin: false,
      }

    case SET_THREE_MIN:
      return {
        ...state,
        oneMin: false,
        threeMin: true,
        fiveMin: false,
      }

    case SET_FIVE_MIN:
      return {
        ...state,
        oneMin: false,
        threeMin: false,
        fiveMin: true,
      }

    case START_TIMER:
      return {
        ...state,
        timer: true
      }

    case END_TIMER:
      return {
        ...state,
        timer: false,
        isPaused: false
      }

    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }

    case PAUSE_TEST:
      return {
        ...state,
        isPaused: true,
        timer: false
      }

    case PLAY_TEST:
      return {
        ...state,
        isPaused: false,
        timer: true
      }

    case EXIT_TEST:
      return {
        ...state,
        results: false,
        timer: false,
        isPaused: false,
      }

    case ENTER_RESULTS:
      return {
        ...state,
        results: true,
        timer: false,
        isPaused: false
      }

    case EXIT_RESULTS:
      return {
        ...state,
        results: false,
        timer: false,
        isPaused: false
      }

    default:
      throw new Error(`unknown action type: ${action.payload}`);

  };
};

export default RehabReducer;

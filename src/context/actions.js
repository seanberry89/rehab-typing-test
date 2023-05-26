export const START_TIMER = 'START_TIMER';
export const END_TIMER = 'END_TIMER';

export const SET_ONE_MIN = 'SET_ONE_MIN';
export const SET_THREE_MIN = 'SET_THREE_MIN';
export const SET_FIVE_MIN = 'SET_FIVE_MIN';

export const PAUSE_TEST = 'PAUSE_TEST';
export const PLAY_TEST = 'PLAY_TEST';

export const EXIT_TEST = 'EXIT_TEST';
export const ENTER_RESULTS = 'ENTER_RESULTS';
export const EXIT_RESULTS = 'EXIT_RESULTS';

export const APP_ERROR = 'APP_ERROR';
export const SET_LOADING = 'SET_LOADING';

// Action Notes:
// * calculate the words typed in the paragraph via the timer: words-per-minute, and this starts when the user types the first letter of the first word
// * find the most missed letters from the paragraph: add the letters that were missed from the typing, then via a conditional, show which letters were missed the most: x2 or x3 or x4 or x5
// * typing speed: words-per-minute
// * most missed letters (and how often the letters were missed)

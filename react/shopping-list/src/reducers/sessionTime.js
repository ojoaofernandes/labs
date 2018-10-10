import { INCREMENT_SESSION_TIME } from '../constants/sessionTime';

const initialState = 0;

export default function (state = initialState, { type }) {
  if (type === INCREMENT_SESSION_TIME) {
    return state + 1;
  }

  return state;
}

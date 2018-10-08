import {
  OPEN_CONVERSATION,
  CLOSE_CONVERSATION,
} from '../constants/conversations';

const initialState = null;

export default function (state = initialState, { type, payload }) {
  if (type === OPEN_CONVERSATION) {
    const { contact, messages } = payload;
    return { contact, messages };
  }

  if (type === CLOSE_CONVERSATION) {
    return initialState;
  }

  return state;
}

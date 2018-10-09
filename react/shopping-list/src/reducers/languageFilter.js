import { SET_LANGUAGE_FILTER } from '../constants/languageFilter';

const initialState = 'ALL';

export default function (state = initialState, { type, payload }) {
  if (type === SET_LANGUAGE_FILTER) {
    return payload;
  }

  return state;
}

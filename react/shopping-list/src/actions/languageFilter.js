import { SET_LANGUAGE_FILTER } from '../constants/languageFilter';

export function setLanguageFilter(filter) {
  return dispatch => dispatch({
    type: SET_LANGUAGE_FILTER,
    payload: filter,
  });
}

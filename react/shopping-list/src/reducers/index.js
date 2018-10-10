import { combineReducers } from 'redux';
import products from './products';
import languageFilter from './languageFilter';
import sessionTime from './sessionTime';

export default combineReducers({
  products,
  sessionTime,
  activeLanguageFilter: languageFilter,
});

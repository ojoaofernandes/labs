import { combineReducers } from 'redux';
import products from './products';
import languageFilter from './languageFilter';

export default combineReducers({
  products,
  activeLanguageFilter: languageFilter,
});

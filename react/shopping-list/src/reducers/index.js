import { combineReducers } from 'redux';
import products from './products';
import shoppingList from './shoppingList';
import languageFilter from './languageFilter';
import sessionTime from './sessionTime';

export default combineReducers({
  products,
  shoppingList,
  sessionTime,
  activeLanguageFilter: languageFilter,
});

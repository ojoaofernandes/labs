import { combineReducers } from 'redux';
import contactList from './contactList';
import conversation from './conversation';

export default combineReducers({
  contactList,
  conversation,
});

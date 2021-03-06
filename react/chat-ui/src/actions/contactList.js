import * as api from '../api/contactList';
import { GET_CONTACT_LIST } from '../constants/contactList';

export function getContactList(filter) {
  return {
    type: GET_CONTACT_LIST,
    payload: api.getContactList(filter),
  };
}

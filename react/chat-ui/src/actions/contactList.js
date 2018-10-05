import * as api from '../api/contactList';

export function getContactList() {
  return {
    type: 'GET_CONTACT_LIST',
    payload: api.getContactList(),
  };
}

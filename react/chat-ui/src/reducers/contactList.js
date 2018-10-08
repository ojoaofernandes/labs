import { GET_CONTACT_LIST } from '../constants/contactList';

const initialState = [];

export default function (state = initialState, { type, payload }) {
  if (type === GET_CONTACT_LIST) {
    return payload;
  }

  return state;
}

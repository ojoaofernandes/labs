export default function (state = [], { type, payload }) {
  if (type === 'GET_CONTACT_LIST') {
    return payload;
  }

  return state;
}

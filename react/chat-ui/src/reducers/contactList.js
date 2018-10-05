function contactListReducer(state = [], action) {
  if (action.type === 'GET_CONTACT_LIST') {
    return action.payload;
  }

  return state;
}

export default contactListReducer;

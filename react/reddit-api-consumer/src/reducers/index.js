const initialState = {
  currentTopic: {},
  fetchedTopics: [
    'javascript',
    'apache kafka',
    'docker',
  ],
  posts: [
    { id: 'a', title: 'Test' },
    { id: 'b', title: 'Test' },
    { id: 'c', title: 'Test' },
    { id: 'f', title: 'Test' },
    { id: 'e', title: 'Test' },
  ],
};

function rootReducer(state = initialState, action) {
  return state;
}

export default rootReducer;

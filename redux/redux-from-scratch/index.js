const counterReducer = (state = 0, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1;
  }

  if (action.type === 'DECREMENT') {
    return state - 1;
  }

  return state;
};

const notesReducer = (state = [], action) => {
  if (action.type === 'ADD_NOTE') {
    return [...state, { note: action.payload }];
  }

  return state;
};

const rootReducer = combineReducers({
  counter: counterReducer,
  notes: notesReducer,
})

const store = createStore(rootReducer);

console.log('\n-- initial state');
console.log(store.getState());

console.log('\n-- dispatching an INCREMENT action');
store.dispatch({ type: 'INCREMENT' });
console.log(store.getState());

console.log('\n-- dispatching an ADD_NOTE action');
store.dispatch({ type: 'ADD_NOTE', payload: 'Text' });
console.log(store.getState());
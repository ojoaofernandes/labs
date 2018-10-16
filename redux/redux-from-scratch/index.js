const counterReducer = (state = 0, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1;
  }

  if (action.type === 'DECREMENT') {
    return state - 1;
  }

  return state;
};

const store = createStore(counterReducer);

console.log('\n-- initial state');
console.log(store.getState());
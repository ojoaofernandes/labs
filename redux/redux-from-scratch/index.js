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
});

const loggerMiddleware = (store) => {
  const next = store.dispatch;
  
  return (action) => {
    console.log(`\n-- dispatching an ${action.type} action`);
    next(action);
    console.log('-- new state', store.getState());
  }
};

const loggerMiddleware2 = (store) => {
  const next = store.dispatch;
  
  return (action) => {
    console.log(`\n-- dispatching 2 an ${action.type} action`);
    next(action);
    console.log('-- new state 2', store.getState());
  }
};

const store = createStore(
  rootReducer,
  applyMiddleware(
    loggerMiddleware,
    loggerMiddleware2,
  ),
);

console.log('\n-- initial state');
console.log(store.getState());

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'ADD_NOTE', payload: 'Text' });
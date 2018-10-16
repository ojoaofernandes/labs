const createStore = (reducer, applyMiddleware) => {
  let currentState;
  let currentListeners = [];
  let currentReducer = reducer;

  const getState = () => currentState;

  const dispatch = (action) => {
    currentState = currentReducer(getState(), action);
    currentListeners.forEach(listener => listener());
  };

  const subscribe = (newListener) => {
    currentListeners = [...currentListeners, newListener];
    return () => {
      currentListeners = currentListeners.filter((listener) => listener != newListener)
    }
  }

  const replaceReducer = (nextReducer) => {
    currentReducer = nextReducer;
  }

  const store = {
    getState,
    dispatch,
    subscribe,
    replaceReducer,
  };

  if (applyMiddleware !== undefined) {
    applyMiddleware(store);
  }

  dispatch({});

  return store;
};

const combineReducers = (reducers) => (state = {}, action) => 
  Object.keys(reducers).reduce((nextState, key) => ({
    ...nextState, 
    [key]: reducers[key](state[key], action)
  }), {});

const applyMiddleware = (...middlewares) => (store) => {
  [...middlewares].reverse().forEach((middleware) => {
    store.dispatch = middleware(store);
  });
};
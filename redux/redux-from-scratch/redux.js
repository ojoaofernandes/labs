const createStore = (reducer) => {
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
      currentListeners = currentListeners.filter(listener => listener != newListener)
    }
  }

  const replaceReducer = (nextReducer) => {
    currentReducer = nextReducer;
  }

  dispatch({});

  return {
    getState,
    dispatch,
    subscribe,
    replaceReducer,
  };
};
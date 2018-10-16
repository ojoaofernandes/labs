# Redux

[Redux](https://redux.js.org/) is a **predictable state container** for JavaScript applications. It helps to write applications that behave consistently and are easy to test.

## Motivation

SPA (single-page applications) have become complicated and the code must manage more state than ever before. This state can include server responses, cached data, as well UI data such as selected tabs, spinners, pagination controls, and so on. At some point it is so hard to understand what happens that the application becomes opaque and non-deterministic.

This complexity is difficult to handle as we are mixing mutation and asynchronicity. Both can be great in separation, but together they create a perfect mess. Libraries like [React](https://reactjs.org/) attempt to solve this problem in the view layer. However, managing the state of the data is an empty field. This is where Redux comes in action.

**Redux attempts to make state mutations predictable by imposing certain restrictions on how and when updates happen**. These restrictions are reflected in the three principles of Redux.

## Three Principles

### Single source of truth

The state of the whole application is stored in an object tree within a single store. This makes it easier to debug or inspect the application. Also, it minimizes the complexity to implement functionalities which has been tradicionally difficult, such as undo/redo.

### State is read-only

The only way to change the state is to emit an action, an object describing what happened. This ensures that neither the views nor the network callbacks will write directly to the state. Instead, they express an intent to transform the state.

### Changes are made with pure functions

To specify how the state tree is transformed by actions, you write reducers. Reducers are pure functions that take the previous state and an action, and return the next state. The next state should be new objects, instead of mutating the previus one.

## Basics

### Actions

Actions are payloads of information that send data from application to store. They are the only source of information for the store. It is sent to the store using ```store.dispatch()```.

Here is an example:

```
const action = {
  type: 'ADD_TODO',
  text: 'My todo item text.'
}

store.dispatch(action);
```

Actions are plain JavaScript objects and must have a ```type``` property that indicates the type of actions being performed. Other than ```type```, the structure of an action is flexible. Usually, FSA ([Flux Standart Action](https://github.com/redux-utilities/flux-standard-action)) is adopted.

#### Action Creators

Action creators are functions that create actions by simply returning an action:

```
function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  };
}

store.dispatch(addtodo('My todo item text.'));
```

### Reducers

Reducers specify how the application's state changes in response to actions sent to the store. It is a pure function that takes the previous state and an action, and returns the next state.

```
(previousState, action) => newState
```

Things that should be avoided inside a reducer:

* Mutate its arguments;
* Perform side effects like API calls and routing transitiions;
* Call non-pure functions, e.g. ```Date.now()``` or ```Math.randon()```.

A reducer is a pure function. Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.

### Store
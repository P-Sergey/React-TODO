import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './store/reducers/reducers';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
setTimeout(() => {
  store.dispatch({
    type: 'ADD_TODO',
    payload: { id: 2, value: 'fff', isDone: false },
  });
}, 3000);

setTimeout(() => {
  store.dispatch({
    type: 'ADD_TODO',
    payload: { id: 3, value: 'fff', isDone: true },
  });
}, 8000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

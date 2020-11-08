import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store';

import './api/server';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// import store from './store';

// console.log('Initial state', store.getState());

// const unSub = store.subscribe(() => {
//   console.log('changed state', store.getState());
// });

// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' });
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about reducers' });
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about stores' });

// store.dispatch({
//   type: 'filters/colorFilterChanged',
//   payload: { color: 'red', changeType: 'selected' },
// });

// store.dispatch({ type: 'todos/todoToggled', payload: 1 });

// unSub();
// store.dispatch({ type: 'todos/todoAdded', payload: 'Try creating a store' });

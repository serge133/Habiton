import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// * Routing
import routing from './routes';

// * Redux
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
// Reducers
import tasksReducer from './store/reducers/tasks';
import subMenuReducer from './store/reducers/subMenu';
import thunk from 'redux-thunk';

// * Connection to the redux extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// * The combination of multiple reducers (global state)
const rootReducer = combineReducers({
  tsk: tasksReducer,
  sbMenu: subMenuReducer
});

// * The redux store that has active asynchronous operations
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>{routing}</Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

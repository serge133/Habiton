import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route } from 'react-router-dom';

// * Redux
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
// Reducers
import reducer from './store/reducers/reducer';
import thunk from 'redux-thunk';

// * Connection to the redux extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// * The combination of multiple reducers (global state)
const rootReducer = combineReducers({
  reducerOne: reducer
});

// * The redux store that has active asynchronous operations
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const routing = (
  <Router>
    <Route exact path="/" component={App} />
  </Router>
);

ReactDOM.render(
  <Provider store={store}>{routing}</Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

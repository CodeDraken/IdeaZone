import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from './reducers';
import routes from './routes';

import './css/main.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// login / load ideas etc
firebase.auth().onAuthStateChanged((user) => {});

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);

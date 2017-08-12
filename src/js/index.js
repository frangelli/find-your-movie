import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const supportsHistory = 'pushState' in window.history;
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//middleware to unwrap promise for us
import reduxPromise from 'redux-promise';

import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);
export const store = createStoreWithMiddleware(reducers);

import App from './components/App';
require('./styles/index.scss');
ReactDOM.render(
  <Provider store={store}>
    <Router forceRefresh={!supportsHistory}>
      <App>

      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);

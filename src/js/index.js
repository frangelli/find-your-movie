import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
const supportsHistory = 'pushState' in window.history;
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//middleware to unwrap promise for us
import reduxPromise from 'redux-promise';

import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);
export const store = createStoreWithMiddleware(reducers);

import App from './components/App';
import SearchView from './components/SearchView';
import DetailsView from './components/DetailsView';

require('./styles/index.scss');
import 'font-awesome/scss/font-awesome.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path="/" component={SearchView} />
        <Route exact path="/details/:movieId" component={DetailsView} />
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import Reduxthunk from 'redux-thunk';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';

import logger from 'redux-logger';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const reducers = () => {
  return {};
};
const composeEnhancers = window.__REDUX_dEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = composeEnhancers(applyMiddleware(logger, Reduxthunk));

const createStoreWithMiddleware = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

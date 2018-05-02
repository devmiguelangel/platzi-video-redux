import React from 'react';
import { hydrate } from 'react-dom';
import Home from '../pages/containers/home';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './../reducers';
import { Map } from 'immutable';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

/* const logger = store => next => action => {
  console.log('====================================OLD STATE');
  console.log(store.getState().toJS());
  console.log('====================================');
  console.log('====================================DISPATCHING');
  console.log(action);
  console.log('====================================');
  let result = next(action);

  console.log('====================================STATE');
  console.log(store.getState().toJS());
  console.log('====================================');

  return result;
}; */

const store = createStore(
  reducer,
  Map(),
  composeWithDevTools(
    applyMiddleware(logger, ReduxThunk)
  )
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const homeContainer = document.getElementById('home-container')

hydrate(
  <Provider store={store}>
    <Home />
  </Provider>
, homeContainer);


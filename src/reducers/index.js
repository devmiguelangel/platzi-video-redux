// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
import data from './data';
import modal from './modal';

export default combineReducers({
  data,
  modal,
});
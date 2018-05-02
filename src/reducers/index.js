// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
import data from './data';
import modal from './modal';
import isLoading from './is-loading';

export default combineReducers({
  data,
  modal,
  isLoading,
});
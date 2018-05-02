import { IS_LOADING } from './../action-types';
import { Map } from 'immutable'

const initialState = Map({
  active: false,
});

const isLoading = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return state.set('active', action.payload.active )
    default:
      return state;
  }
};

export default isLoading;
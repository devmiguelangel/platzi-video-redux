import { IS_LOADING } from './../action-types';

export const openModal = (mediaId) => ({
  type: 'OPEN_MODAL',
  payload: {
    mediaId,
  }
});

export const closeModal = () => ({
  type: 'CLOSE_MODAL',
});

export const searchEntities = (query) => ({
  type: 'SEARCH_ENTITIES',
  payload: {
    query,
  }
});

export const isLoading = (active) => ({
  type: IS_LOADING,
  payload: {
    active
  }
});

export const searchAsyncEntities = (query) => (
  (dispatch) => {
    dispatch(isLoading(true));

    setTimeout(() => {
      dispatch(isLoading(false));

      dispatch(searchEntities(query));
    }, 5000);
  }
);
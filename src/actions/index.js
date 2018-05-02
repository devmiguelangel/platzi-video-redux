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

export const searchAsyncEntities = (query) => (
  (dispatch) => {
    setTimeout(() => {
      dispatch(searchEntities(query));
    }, 5000);
  }
);
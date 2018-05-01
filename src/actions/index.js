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
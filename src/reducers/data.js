const data = (state, action) => {
  switch (action.type) {
    case 'SEARCH_SONG': {
      const { query } = action.payload;

      const list = state.data.categories[2].playlist;

      const results = list.filter(item => {
        return item.author.includes(query);
      });

      return {
        ...state,
        search: results
      };
    }
    default:
      return state;
  }	
}

export default data;
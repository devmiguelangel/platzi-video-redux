import schema from '../schemas';
import { fromJS } from "immutable";

const initialState = fromJS({
  entities: schema.entities,
  categories: schema.result.categories,
  search: '',
});

const data = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_SONG': {
      const { query } = action.payload;
      /* let results = [];

      if (query) {
        const list = state.data.categories[2].playlist;

        results = list.filter(item => {
          return item.author.includes(query);
        });
      } */

      /* return {
        ...state,
        search: results
      }; */
      
      return state.set('search', query);
    }
    default:
      return state;
  }	
}

export default data;
import { FETCH_IMAGES, FILTER_IMAGES } from 'constants/actionTypes'
import { filterByTitle } from '../../helpers/filters';

const INITIAL_STATE = {
  all: [],
  filtered: []
};

export default function properties(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_IMAGES:
      return {
        ...state,
        all: action.payload.data,
        filtered: action.payload.data
      }
    case FILTER_IMAGES:
      const { searchTerm } = action.payload;
      const images = state.all;
      const filtered = filterByTitle(images, searchTerm);
      return {
        ...state,
        filtered
      }
    default:
      return state
  }
}
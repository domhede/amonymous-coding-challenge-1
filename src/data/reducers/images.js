import update from 'immutability-helper';

import {
  FETCH_IMAGES_SUCCESS,
  FILTER_IMAGES,
  CLEAR_FILTER,
  FETCH_MORE_IMAGES_SUCCESS
} from 'constants/actionTypes';

import { filterByTitle } from '../../helpers/filters';

const INITIAL_STATE = {
  all: [],
  filtered: [],
  offset: 0
};

export default function properties(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        all: action.payload.data,
        filtered: action.payload.data
      }
    case FETCH_MORE_IMAGES_SUCCESS:
      const fetchedImages = action.payload.data;
      const allImages = update(state.all, {$push: fetchedImages});

      return {
        ...state,
        all: allImages,
        filtered: allImages,
        offset: state.offset + 20
      }
    case FILTER_IMAGES:
      const { searchTerm } = action.payload;
      const images = state.all;
      const filtered = filterByTitle(images, searchTerm);
      return {
        ...state,
        filtered
      }
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: state.all
      }
    default:
      return state
  }
}
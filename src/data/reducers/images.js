import { FETCH_IMAGES } from 'constants/actionTypes'

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
    default:
      return state
  }
}
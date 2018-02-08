import reducer from './images';
import * as types from '../../constants/ActionTypes';
import testData from '../testData.json';

const afterFetchState = {
  all: testData.data,
  filtered: testData.data
};
const afterFilterState = {
  all: testData.data,
  filtered: [testData.data[1]]
}

describe('properties reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        all: [],
        filtered: []
      }
    )
  });
  it('should handle FETCH_IMAGES', () => {
    expect(
      reducer([], {
        type: types.FETCH_IMAGES,
        payload: testData
      })
    ).toEqual(
      afterFetchState
    )
  });
  it('should handle FILTER_IMAGES', () => {
    expect(
      reducer(afterFetchState, {
        type: types.FILTER_IMAGES,
        payload: { searchTerm: 'barack'}
      })
    ).toEqual(
      afterFilterState
    )
  });
});
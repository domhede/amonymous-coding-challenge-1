import reducer from './images';
import * as types from '../../constants/ActionTypes';
import testData from '../testData.json';

const afterFetch = {
  all: testData.data,
  filtered: testData.data
};

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
      afterFetch
    )
  });
});
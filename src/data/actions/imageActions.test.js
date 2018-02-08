import * as actions from 'data/actions/imageActions'
import * as types from 'constants/actionTypes'
import testData from '../testData.json';

describe('image actions', () => {
  // it('should create an action to fetch all images', () => {
  //   const images = testData.data;
  //   const expectedAction = {
  //     type: types.FETCH_IMAGES,
  //     payload: images
  //   }
  //   expect(actions.fetchImages()).toEqual(expectedAction)
  // }),
  it('should create an action to filter images by title', () => {
    const searchTerm = 'barack';
    const expectedAction = {
      type: types.FILTER_IMAGES,
      payload: {searchTerm}
    }
    expect(actions.filterImages(searchTerm)).toEqual(expectedAction)
  })
});

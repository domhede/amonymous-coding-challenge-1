import * as actions from 'data/actions/imageActions'
import * as types from 'constants/actionTypes'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import moxios from 'moxios';
import testData from '../testData.json';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('image actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
  it('should create FETCH_IMAGES', () => {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: testData.data,
      });
    });

    const expectedActions = [
      { type: types.FETCH_IMAGES_START },
      { type: types.FETCH_IMAGES_SUCCESS, payload: testData.data }
    ]
    const store = mockStore({ all: [], filtered: [] });

    return store.dispatch(actions.fetchImages()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    });
  });
  it('should create an action to filter images by title', () => {
    const searchTerm = 'barack';
    const expectedAction = {
      type: types.FILTER_IMAGES,
      payload: {searchTerm}
    }
    expect(actions.filterImages(searchTerm)).toEqual(expectedAction)
  })
  it('should create an action to clear the filter', () => {
    const expectedAction = {
      type: types.CLEAR_FILTER
    };
    expect(actions.clearFilter()).toEqual(expectedAction)
  })
});

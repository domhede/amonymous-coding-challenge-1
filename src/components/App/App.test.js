import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import App from './component';

const mockStore = configureStore();
const initialState = {
  properties: {
    all: [],
    saved: []
  }
}
const store = mockStore(initialState);

describe('App component', () => {
  let mockFetchAll = jest.fn();
  let mockFetchSaved = jest.fn();

  it('renders without crashing', () => {
    shallow(
      <App fetchImages={mockFetchAll} />
    );
  });
});

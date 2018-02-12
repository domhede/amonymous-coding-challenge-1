import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Search from '../Search';
import Button from '../Button';

const mockFilter = jest.fn();
const mockClear = jest.fn();

describe('Search component', () => {
  it('renders without crashing', () => {
    shallow(
      <Search filterImages={mockFilter} clearFilter={mockClear} />
    );
  });
  it('renders correctly', () => {
    const rendered = renderer.create(
      <Search filterImages={mockFilter} clearFilter={mockClear} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
  it('Should call the filterImages function when Filter Button is clicked', () => {
    const wrapper = shallow(
      <Search filterImages={mockFilter} clearFilter={mockClear} />
    );
    expect(mockFilter.mock.calls.length).toEqual(0);
    wrapper.find(Button).simulate('click');
    expect(mockFilter.mock.calls.length).toEqual(1);
  });
  it('Should call the clearFilter function when Clear Button is clicked', () => {
    const wrapper = shallow(
      <Search filterImages={mockFilter} clearFilter={mockClear} />
    );
    const input = wrapper.find('Input');
    expect(mockClear.mock.calls.length).toEqual(0);
    input.simulate('change', { target: { value: 'Hello' } })
    wrapper.find('Clear').simulate('click');
    expect(mockClear.mock.calls.length).toEqual(1);
  });
});



import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Button from '../Button';


describe('Button component', () => {
  it('renders without crashing', () => {
    shallow(
      <Button />
    );
  });
  it('renders correctly', () => {
    const rendered = renderer.create(
      <Button />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});

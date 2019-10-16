import React from 'react';
import renderer from 'react-test-renderer';
import Table from '../Table'

it('renders correctly', () => {
  const component = renderer.create(<Table />).toJSON();
  expect(component).toMatchSnapshot();
});

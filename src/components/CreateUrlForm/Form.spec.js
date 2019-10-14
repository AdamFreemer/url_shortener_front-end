import React from 'react';
import renderer from 'react-test-renderer';
import Form from './Form'

it('renders correctly', () => {
  const component = renderer.create(<Form />).toJSON();
  expect(component).toMatchSnapshot();
});

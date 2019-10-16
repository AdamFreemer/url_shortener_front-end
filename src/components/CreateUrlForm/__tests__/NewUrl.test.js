import React from 'react';
import renderer from 'react-test-renderer';
import NewUrl from '../NewUrl'

it('renders correctly', () => {
  const component = renderer.create(<NewUrl />).toJSON();
  expect(component).toMatchSnapshot();
});

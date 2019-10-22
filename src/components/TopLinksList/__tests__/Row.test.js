import React from 'react';
import renderer from 'react-test-renderer';
import Row from '../Row'
import { rows } from '../../../test/MockUrls';

it('renders correctly a short url', () => {
  const component = renderer.create(<Row key={1} row={rows[0]} />).toJSON();
  expect(component).toMatchSnapshot();
});

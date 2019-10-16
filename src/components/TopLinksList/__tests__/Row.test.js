import React from 'react';
import renderer from 'react-test-renderer';
import Row from '../Row'

const propsMock = {
  row: {
    views: 1,
    title: "The quick brown fox jumped over the lazy dog",
    short_url: "http://www.test.com/abc",
    url: "http://www.apple.com"
  }

}

it('renders correctly a short url', () => {
  const component = renderer.create(<Row key={1} row={propsMock} />).toJSON();
  expect(component).toMatchSnapshot();
});


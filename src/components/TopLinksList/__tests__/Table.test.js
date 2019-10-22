import React from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import Table from '../Table'
import { Rowz } from '../../../test/MockUrls';
let realUseContext;
let useContextMock;
let useEffect;
let props;

it('renders correctly', () => {
  const component = renderer.create(<Table />).toJSON();
  expect(component).toMatchSnapshot();
});

test("table rows load", () => {
  const rows = Rowz
  const element = new ShallowRenderer().render(
      <Table props={rows} />
  );
  expect(element.props.children).toBe('Loading...');
});
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

// const mockUseEffect = () => {
//   useEffect.mockImplementationOnce(f => f());
// };

// Setup mock
// beforeEach(() => {
    // realUseContext = React.useContext;
    // useContextMock = React.useContext = jest.fn();
    // useEffect = jest.spyOn(React, "useEffect");
// });
//Cleanup mock
// afterEach(() => {
    // React.useContext = realUseContext;
// });

// props = {
//   rows: jest.fn().mockResolvedValue(Rowz),
// };

test("table rows load", () => {
    // useContextMock.mockReturnValue(rows);
    // useEffect = jest.spyOn(React, "useEffect");
    const rows = Rowz
    const element = new ShallowRenderer().render(
        <Table props={rows} />
    );
    console.log('== element.props: ', element)
    expect(element.props.children).toBe('Loading...');
});
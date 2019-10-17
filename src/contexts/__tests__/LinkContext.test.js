import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { LinkProvider } from '../LinkContext';
import { Rows, ResponseOk } from '../../test/MockUrls';


describe('<LinkProvider />', () => {
  const realUseContext = React.useContext;
  /* eslint-disable no-multi-assign */
  const useContextMock = React.useContext = jest.fn();
  /* eslint-enable no-multi-assign */
  const ctxMock = {
    fetchRows: jest.fn(),
    setLoad: jest.fn(),
    checkForDuplicate: jest.fn(),
    rows: {},
    loading: false,
    showNewUrl: false,
    newUrl: ''
  };
  useContextMock.mockReturnValue(ctxMock);

  afterAll(() => {
    React.useContext = realUseContext;
  });

  it('sets load status', () => {
    const { result } = renderHook(() => LinkProvider({children: {} }));
    act(() => {
      result.current.props.value.setLoad(true);
    });
    
    expect(result.current.props.value.loading).toBe(false);
  });

  it('fetches the top url rows', () => {
    const { result } = renderHook(() => LinkProvider({children: {} }));

    expect(result.current.props.value.fetchRows(true)).resolves.toEqual({});
  });

  it('posts a link', () => {
    const link = "https://www.apple.com"
    const { result } = renderHook(() => LinkProvider({children: {} }));
    // act(() => {
    //   result.current.props.value.fetchRows(true);
    // });
    // console.log(result.current.props.value);
    act(() => {
      // result.current.props.value.postLink(link);
    });
    
  });
  describe('checking for duplicate records', () => {
    it('finds a duplicate record', () => {
      const response = ResponseOk;
      const { result } = renderHook(() => LinkProvider({children: {} }));

      // console.log(result.current.props.value);
      expect(result.current.props.value.checkForDuplicate(response))
    });
      
    it('does not find a duplicate record', () => {
    });
  });


  describe('setting state', () => {
    const { result } = renderHook(() => LinkProvider({children: {} }));

    it('showNewUrl can be set', () => {
      expect(result.current.props.value.showNewUrl).toEqual(false);

      act(() => {
        result.current.props.value.setShowNewUrl(true);
      });
      expect(result.current.props.value.showNewUrl).toEqual(true);
    });
  });

});
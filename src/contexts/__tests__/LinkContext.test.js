import { renderHook, act } from '@testing-library/react-hooks';
import { LinkProvider } from '../LinkContext';
import { responseDuplicate, responseElse } from '../../test/MockUrls';

describe('<LinkProvider />', () => {
  it('fetches the top url rows', () => {
    const { result } = renderHook(() => LinkProvider({children: {} }));
    act(() => {
      result.current.props.value.fetchRows(true)
    });

    expect(result.current.props.value.loading).toEqual(false);
  });

  it('posts a link', () => {
    const { result } = renderHook(() => LinkProvider({children: {} }));
    act(() => {
      result.current.props.value.submitLink(true);
    });
    expect(result.current.props.value.loading).toEqual(true);
  });

  describe('checkForDuplicate()', () => {
    it('responds with a duplicate', () => {
      const { result } = renderHook(() => LinkProvider({children: {} }));
      act(() => {
        result.current.props.value.checkForDuplicate(responseDuplicate);
      });

      expect(result.current.props.value.showNewUrl).toEqual(false);
    });

    it('responds with a non-duplicate', () => {
      const { result } = renderHook(() => LinkProvider({children: {} }));
      act(() => {
        result.current.props.value.checkForDuplicate(responseElse);
      });
      expect(result.current.props.value.showNewUrl).toEqual(true);
    });
  });
});
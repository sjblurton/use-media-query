import { renderHook } from '@testing-library/react-hooks';
import useMediaQuery from '../src';

describe('useMediaQuery hook testing.', () => {
  it('should return matches false.', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    const { result } = renderHook(() => useMediaQuery('(min-width: 400px)'));
    expect(result.current).toBe(false);
  });

  it('should return matches true.', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: true,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    const { result } = renderHook(() => useMediaQuery('(min-width: 400px)'));
    expect(result.current).toBe(true);
  });
});

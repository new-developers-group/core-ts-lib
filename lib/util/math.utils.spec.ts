import { _isNumber, _removeCommas } from './math.utils';

describe('Math Utils _isNumber', () => {
  it('should return true if valid number', () => {
    expect(_isNumber('1')).toBe(true);
    expect(_isNumber('1')).toBe(true);
    expect(_isNumber('1.100')).toBe(true);
    expect(_isNumber('1121.0545')).toBe(true);
    expect(_isNumber('1121.0')).toBe(true);
    expect(_isNumber(1121.0545)).toBe(true);
    expect(_isNumber(1)).toBe(true);
    expect(_isNumber(' 2 ')).toBe(true);
  });

  it('should return false if invalid number', () => {
    expect(_isNumber('x')).toBe(false);
    expect(_isNumber('1x')).toBe(false);
    expect(_isNumber('1.100x')).toBe(false);
    expect(_isNumber(' ')).toBe(false);
    expect(_isNumber('')).toBe(false);
    expect(_isNumber(undefined)).toBe(false);
    expect(_isNumber(null)).toBe(false);
  });
});

describe('Math Utils _removeCommas', () => {
  it('should return true if valid number', () => {
    expect(_removeCommas('12,123,234')).toBe('12123234');
    expect(_removeCommas('1223234')).toBe('1223234');
  });
});

import { _isValidDate, removeTimeStamp } from './date'

describe('Date Utils ', () => {
  it('should return true if valid date string', () => {
    expect(_isValidDate('2023-09-25T00:00:00.000Z')).toBe(true)
    expect(_isValidDate('2023-12-13T00:00:00.000Z')).toBe(true)
    expect(_isValidDate('2023-01-13T00:00:00.000Z')).toBe(true)
    expect(_isValidDate('x')).toBe(false)
    expect(_isValidDate('')).toBe(false)
    expect(_isValidDate(undefined)).toBe(false)
    expect(_isValidDate(null)).toBe(false)
    expect(_isValidDate('2023-13-13T00:00:00.000Z')).toBe(false)
    expect(_isValidDate('2023-12-32T00:00:00.000Z')).toBe(false)
    expect(_isValidDate('2023-12-32T00:00:00.000Z')).toBe(false)
    expect(_isValidDate('2023-13-01T00:00:00.000Z')).toBe(false)
    //expect(_isValidDate('12/31/2022')).toBe(true);
    expect(_isValidDate('2')).toBe(false)
  })

  it('should remove timestamp from date string', () => {
    expect(removeTimeStamp('2023-09-25T00:00:00.000Z')).toBe('2023-09-25')
    expect(removeTimeStamp('')).toBe(undefined)
    expect(removeTimeStamp(null)).toBe(undefined)
    expect(removeTimeStamp(undefined)).toBe(undefined)
    expect(removeTimeStamp('2023-09-2')).toBe(undefined)
  })
})

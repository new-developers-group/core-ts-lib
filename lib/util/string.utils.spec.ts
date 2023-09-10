import { containsDuplicate, containsValue } from './string.utils';

const arrWithDuplicates: string[] = ['Alan', 'Brian', 'John', 'Ann', 'Jane', 'Ann', 'Alan'];
const caseSensitiveTrue = true;
const caseSensitiveFalse = false;

describe('String Utils ', () => {
  describe('hasDuplicates function', () => {
    it('should return false if no duplicate exists ( case sensitivity is false )', () => {
      expect(containsDuplicate(arrWithDuplicates, 'brian', caseSensitiveFalse)).toBe(false);
      expect(containsDuplicate(arrWithDuplicates, 'Brian', caseSensitiveFalse)).toBe(false);
    });

    it('should return false if no duplicate exists ( case sensitivity is true )', () => {
      expect(containsDuplicate(arrWithDuplicates, 'Brian', caseSensitiveTrue)).toBe(false);
      expect(containsDuplicate(arrWithDuplicates, 'brian', caseSensitiveTrue)).toBe(false);
    });

    it('should return true if has duplicates ( case sensitivity is false )', () => {
      expect(containsDuplicate(arrWithDuplicates, 'ann', caseSensitiveFalse)).toBe(true);
      expect(containsDuplicate(arrWithDuplicates, 'alan', caseSensitiveFalse)).toBe(true);
    });

    it('should return true if has duplicates ( case sensitivity is true )', () => {
      expect(containsDuplicate(arrWithDuplicates, 'Ann', caseSensitiveTrue)).toBe(true);
      expect(containsDuplicate(arrWithDuplicates, 'Alan', caseSensitiveTrue)).toBe(true);
    });

    it('should return false if empty null or undefined values are passed ( case sensitivity is false )', () => {
      expect(containsDuplicate(arrWithDuplicates, null, caseSensitiveFalse)).toBe(false);
      expect(containsDuplicate(arrWithDuplicates, undefined, caseSensitiveFalse)).toBe(false);
      expect(containsDuplicate(null, 'ann', caseSensitiveFalse)).toBe(false);
      expect(containsDuplicate([], 'ann', caseSensitiveFalse)).toBe(false);
    });

    it('should return false if has duplicates but case sensitivity is set to true )', () => {
      expect(containsDuplicate(arrWithDuplicates, 'ann', caseSensitiveTrue)).toBe(false);
      expect(containsDuplicate(arrWithDuplicates, 'alan', caseSensitiveTrue)).toBe(false);
    });

    it('should return false if empty null or undefined values passed ( case sensitivity is true )', () => {
      expect(containsDuplicate(arrWithDuplicates, null, caseSensitiveTrue)).toBe(false);
      expect(containsDuplicate(arrWithDuplicates, undefined, caseSensitiveTrue)).toBe(false);
      expect(containsDuplicate(null, 'ann', caseSensitiveTrue)).toBe(false);
      expect(containsDuplicate([], 'ann', caseSensitiveTrue)).toBe(false);
    });
  });

  describe('hasValue function', () => {
    it('should return true if value is in array and case sensitivity is false', () => {
      expect(containsValue(arrWithDuplicates, 'brian', caseSensitiveFalse)).toBe(true);
      expect(containsValue(arrWithDuplicates, 'Brian', caseSensitiveFalse)).toBe(true);
      expect(containsValue(arrWithDuplicates, 'alan', caseSensitiveFalse)).toBe(true);
      expect(containsValue(arrWithDuplicates, 'Alan', caseSensitiveFalse)).toBe(true);
    });

    it('should return true if value is in array and case sensitivity is true )', () => {
      expect(containsValue(arrWithDuplicates, 'Brian', caseSensitiveTrue)).toBe(true);
      expect(containsValue(arrWithDuplicates, 'Alan', caseSensitiveTrue)).toBe(true);
    });

    it('should return false if value is in array but case sensitivity is true ', () => {
      expect(containsValue(arrWithDuplicates, 'brian', caseSensitiveTrue)).toBe(false);
      expect(containsValue(arrWithDuplicates, 'alan', caseSensitiveTrue)).toBe(false);
    });

    it('should return false if empty null or undefined values are passed ( case sensitivity is false )', () => {
      expect(containsValue(arrWithDuplicates, null, caseSensitiveFalse)).toBe(false);
      expect(containsValue(arrWithDuplicates, undefined, caseSensitiveFalse)).toBe(false);
      expect(containsValue(null, 'ann', caseSensitiveFalse)).toBe(false);
      expect(containsValue([], 'ann', caseSensitiveFalse)).toBe(false);
    });

    it('should return false if empty null or undefined values are passed ( case sensitivity is true )', () => {
      expect(containsValue(arrWithDuplicates, null, caseSensitiveTrue)).toBe(false);
      expect(containsValue(arrWithDuplicates, undefined, caseSensitiveTrue)).toBe(false);
      expect(containsValue(null, 'ann', caseSensitiveTrue)).toBe(false);
      expect(containsValue([], 'ann', caseSensitiveTrue)).toBe(false);
    });
  });
});

import { faker } from '@faker-js/faker';
import { isTruthy } from './is.truthly';

describe('isTruthy', () => {
  it('When passing boolean false should be False', () => {
    const result = false;
    expect(isTruthy(result)).toBeFalsy();
  });

  it('When passing boolean true should be True', () => {
    const result = true;
    expect(isTruthy(result)).toBeTruthy();
  });

  it('When passing 0 should be False', () => {
    const result = 0;
    expect(isTruthy(result)).toBeFalsy();
  });

  it('When passing 1 or bigger should be True', () => {
    const result = faker.datatype.number({ min: 1 });
    expect(isTruthy(result)).toBeTruthy();
  });

  it('When passing empty string should be False', () => {
    const result = '';
    expect(isTruthy(result)).toBeFalsy();
  });

  it('When passing valid string should be False', () => {
    const result = faker.random.word();
    expect(isTruthy(result)).toBeTruthy();
  });

  it('When passing null should be False', () => {
    const result = null;
    expect(isTruthy(result)).toBeFalsy();
  });

  it('When passing undefined should be False', () => {
    const result = undefined;
    expect(isTruthy(result)).toBeFalsy();
  });
});

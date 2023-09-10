import { Validation, ValidationOptions } from '@/data/protocols/validation';
import { InvalidFieldError } from '@/domain/errors';
import { ValidationHelper } from './validation.helper';
import { _isNumber, isTruthy } from '@/util';

export class NumberFieldValidation extends ValidationHelper implements Validation {
  constructor(readonly fieldName: string, readonly options?: ValidationOptions) {
    super(fieldName);
  }

  validate(input: unknown): Error {
    const value = this.getNestedAttributeValue(input);
    if (!_isNumber(value)) {
      const message = isTruthy(this.options) ? `${this.fieldName} ${this.options.customMessage}` : 'Invalid Number';
      return new InvalidFieldError(message);
    }
  }
}

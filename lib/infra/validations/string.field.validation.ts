import { isTruthy } from '@/util';
import { ValidationHelper } from './validation.helper';
import { InvalidFieldError } from '@/domain';
import { Validation, ValidationOptions } from '@/data/protocols/validation';

export class StringFieldValidation extends ValidationHelper implements Validation {
  constructor(readonly fieldName: string, readonly options?: ValidationOptions) {
    super(fieldName);
  }

  validate(input: unknown): Error {
    const value = this.getNestedAttributeValue(input);
    if (!(typeof value === 'string')) {
      const message = isTruthy(this.options) ? `${this.fieldName} ${this.options.customMessage}` : 'Value is not a string';
      return new InvalidFieldError(message);
    }
  }
}

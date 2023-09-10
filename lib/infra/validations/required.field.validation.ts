import { Validation, ValidationOptions } from '@/data/protocols/validation';
import { InvalidFieldError } from '@/domain/errors';
import { ValidationHelper } from './validation.helper';
import { isTruthy } from '@/util';

export class RequiredFieldValidation extends ValidationHelper implements Validation {
  constructor(readonly fieldName: string, readonly options?: ValidationOptions) {
    super(fieldName);
  }

  validate(input: unknown): Error {
    const value = this.getNestedAttributeValue(input);
    if (!isTruthy(value)) {
      const message = isTruthy(this.options) ? `${this.fieldName} ${this.options.customMessage}` : 'Required Field';
      return new InvalidFieldError(message);
    }
  }
}

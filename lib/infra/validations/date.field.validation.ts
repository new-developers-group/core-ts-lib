import { Validation, ValidationOptions } from '@/data/protocols/validation'
import { InvalidFieldError } from '@/domain/errors'
import { ValidationHelper } from './validation.helper'
import { _isValidDate, isTruthy } from '@/util'

export class DateFieldValidation
  extends ValidationHelper
  implements Validation
{
  constructor(
    readonly fieldName: string,
    readonly options?: ValidationOptions
  ) {
    super(fieldName)
  }

  validate(input: unknown): Error {
    const value = this.getNestedAttributeValue(input)
    if (!_isValidDate(value)) {
      const message = isTruthy(this.options)
        ? `${this.fieldName} ${this.options.customMessage}`
        : 'Invalid Date'
      return new InvalidFieldError(message)
    }
  }
}

import {
  FieldValidation,
  Validation,
  ValidationOptions
} from '@/data/protocols/validation'
import { InvalidFieldError } from '@/domain/errors'
import { _isValidDate, isTruthy } from '@/util'
import { ValidationHelper } from './validation.helper'

export class DateFieldValidation
  extends ValidationHelper
  implements Validation
{
  constructor(
    readonly field: string,
    readonly options?: ValidationOptions
  ) {
    super(field)
  }

  validate(input: unknown): FieldValidation {
    const value = this.getNestedAttributeValue(input)
    if (!_isValidDate(value)) {
      const message = isTruthy(this.options)
        ? `${this.field} ${this.options.customMessage}`
        : 'Invalid Date'
      return { field: this.field, error: new InvalidFieldError(message) }
    }
  }
}

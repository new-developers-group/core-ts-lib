import {
  FieldValidation,
  Validation,
  ValidationOptions
} from '@/data/protocols/validation'
import { InvalidFieldError } from '@/domain/errors'
import { _isNumber, isTruthy } from '@/util'
import { ValidationHelper } from './validation.helper'

export class NumberFieldValidation
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
    if (!_isNumber(value)) {
      const message = isTruthy(this.options)
        ? `${this.field} ${this.options.customMessage}`
        : 'Invalid Number'
      return { field: this.field, error: new InvalidFieldError(message) }
    }
  }
}

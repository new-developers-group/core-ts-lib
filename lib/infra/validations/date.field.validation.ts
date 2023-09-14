import {
  FieldValidation,
  Validation,
  ValidationOptions
} from '@/data/protocols/validation'
import { InvalidFieldError } from '@/domain/errors'
import { isTruthy } from '@/util'
import validator from 'validator'
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
    if (!validator.isDate(value)) {
      const message = isTruthy(this.options)
        ? `${this.field} ${this.options.customMessage}`
        : 'Invalid Date'
      return { field: this.field, error: new InvalidFieldError(message) }
    }
  }
}

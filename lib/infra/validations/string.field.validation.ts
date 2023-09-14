import {
  FieldValidation,
  Validation,
  ValidationOptions
} from '@/data/protocols/validation'
import { InvalidFieldError } from '@/domain'
import { isTruthy } from '@/util'
import { ValidationHelper } from './validation.helper'

export class StringFieldValidation
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
    if (!(typeof value === 'string')) {
      const message = isTruthy(this.options)
        ? `${this.field} ${this.options.customMessage}`
        : 'Value is not a string'
      return { field: this.field, error: new InvalidFieldError(message) }
    }
  }
}

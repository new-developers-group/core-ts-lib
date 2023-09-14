import {
  FieldValidation,
  Validation,
  ValidationOptions
} from '@/data/protocols/validation'
import { InvalidFieldError } from '@/domain/errors'
import { isTruthy } from '@/util'
import { ValidationHelper } from './validation.helper'

export class RequiredFieldValidation
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
    if (!isTruthy(value)) {
      const message = isTruthy(this.options)
        ? `${this.field} ${this.options.customMessage}`
        : 'Required Field'
      return { field: this.field, error: new InvalidFieldError(message) }
    }
  }
}

import {
  FieldValidation,
  Validation,
  ValidationOptions
} from '@/data/protocols/validation'
import { InvalidFieldError } from '@/domain/errors'
import { isTruthy, searchInJson } from '@/util'
import validator from 'validator'

export class DateFieldValidation implements Validation {
  constructor(
    readonly field: string,
    readonly options?: ValidationOptions
  ) {}

  validate(input: unknown): FieldValidation {
    const value = searchInJson(input, this.field)
    if (!validator.isDate(value)) {
      const message = isTruthy(this.options)
        ? `${this.field} ${this.options.message}`
        : 'Invalid Date'
      return { field: this.field, error: new InvalidFieldError(message) }
    }
  }
}

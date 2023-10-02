import { FieldValidation, Validation } from '@/data/protocols/validation'
import { InvalidFieldError } from '@/domain/errors'
import { searchInJson } from '@/util'
import {
  ArrayValidateOptions,
  ArrayValidateOptionsDefault
} from './is-array.validation.options'

export class IsArrayFieldValidation implements Validation {
  constructor(
    readonly field: string,
    readonly options: ArrayValidateOptions = ArrayValidateOptionsDefault
  ) {}

  validate(input: unknown): FieldValidation {
    const value = searchInJson(input, this.field)
    if (!Array.isArray(value)) {
      return {
        field: this.field,
        error: new InvalidFieldError(this.options.message)
      }
    }
    if (
      this.options.isGreaterThan &&
      value.length < this.options.isGreaterThan.value
    ) {
      const message = process.env.VALIDATION_ARRAY_GREATER_THAN
        ? process.env.VALIDATION_ARRAY_GREATER_THAN
        : this.options.isGreaterThan.message
      return {
        field: this.field,
        error: new InvalidFieldError(
          message
            ? message
            : `Must be greater than ${this.options.isGreaterThan.value}`
        )
      }
    }
  }
}

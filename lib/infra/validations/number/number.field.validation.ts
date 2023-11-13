import { FieldValidation, Validation } from '@/data/protocols/validation'
import { InvalidFieldError } from '@/domain/errors'
import { _isNumber, searchInJson } from '@/util'
import {
  NumberValidateOptions,
  NumberValidateOptionsDefault
} from './number.validation.options'
export class NumberFieldValidation implements Validation {
  constructor(
    readonly field: string,
    readonly options: NumberValidateOptions = NumberValidateOptionsDefault
  ) {}

  validate(input: unknown): FieldValidation {
    const value = searchInJson(input, this.field)
    if (!_isNumber(value)) {
      return {
        field: this.field,
        error: new InvalidFieldError(this.options.message)
      }
    }
    if (this.options.min && value.length < this.options.min.value) {
      const message = process.env.VALIDATION_NUMBER_MIN
        ? process.env.VALIDATION_NUMBER_MIN
        : this.options.min.message
      return {
        field: this.field,
        error: new InvalidFieldError(
          message || `The mininum value of this should be ${this.options.min.value}`
        )
      }
    }

    if (this.options.max && value.length > this.options.max.value) {
      const message = process.env.VALIDATION_NUMBER_MAX
        ? process.env.VALIDATION_NUMBER_MIN
        : this.options.max.message
      return {
        field: this.field,
        error: new InvalidFieldError(
          message || `The maximum value of this should be ${this.options.max.value}`
        )
      }
    }
  }
}

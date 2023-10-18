import { FieldValidation, Validation } from '@/data/protocols/validation'
import { InvalidFieldError } from '@/domain'
import { searchInJson } from '@/util'
import {
  StringValidateOptions,
  StringValidateOptionsDefault
} from './string.validation.options'

export class StringFieldValidation implements Validation {
  constructor(
    readonly field: string,
    readonly options: StringValidateOptions = StringValidateOptionsDefault
  ) {}

  validate(input: unknown): FieldValidation {
    const value = searchInJson(input, this.field)
    if (!(typeof value === 'string')) {
      return {
        field: this.field,
        error: new InvalidFieldError(this.options.message)
      }
    }

    if (this.options.min && value.length < this.options.min.value) {
      const message = process.env.VALIDATION_STRING_MIN
        ? process.env.VALIDATION_STRING_MIN
        : this.options.min.message
      return {
        field: this.field,
        error: new InvalidFieldError(
          message ||
            `The mininum lenght of this should be ${this.options.min.value}`
        )
      }
    }

    if (this.options.max && value.length > this.options.max.value) {
      const message = process.env.VALIDATION_STRING_MAX
        ? process.env.VALIDATION_STRING_MIN
        : this.options.max.message
      return {
        field: this.field,
        error: new InvalidFieldError(
          message ||
            `The maximum lenght of this should be ${this.options.max.value}`
        )
      }
    }
  }
}

import { FieldValidation, Validation } from '@/data/protocols/validation'
import { InvalidFieldError } from '@/domain/errors'
import { searchInJson } from '@/util'
import {
  BooleanValidateOptions,
  BooleanValidateOptionsDefault
} from './boolean.validation.options'
export class BooleanFieldValidation implements Validation {
  constructor(
    readonly field: string,
    readonly options: BooleanValidateOptions = BooleanValidateOptionsDefault
  ) {}

  validate(input: unknown): FieldValidation {
    const value = searchInJson(input, this.field)
    if (typeof value !== 'boolean') {
      return {
        field: this.field,
        error: new InvalidFieldError(`${this.options.message}`)
      }
    }
    if (this.options.value) {
      if (value !== this.options.value.shouldbe) {
        return {
          field: this.field,
          error: new InvalidFieldError(`${this.options.message}`)
        }
      }
    }
  }
}

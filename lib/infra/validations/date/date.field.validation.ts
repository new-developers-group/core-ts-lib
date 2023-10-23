import { FieldValidation, Validation } from '@/data/protocols/validation'
import { InvalidFieldError } from '@/domain/errors'
import { searchInJson } from '@/util'
import validator from 'validator'
import {
  DateValidateOptions,
  DateValidateOptionsDefault
} from './data.field.validation.options'

export class DateFieldValidation implements Validation {
  constructor(
    readonly field: string,
    readonly options: DateValidateOptions = DateValidateOptionsDefault
  ) {}

  validate(input: unknown): FieldValidation {
    const value = searchInJson(input, this.field)
    if (!validator.isDate(value)) {
      return {
        field: this.field,
        error: new InvalidFieldError(this.options.message)
      }
    }
  }
}

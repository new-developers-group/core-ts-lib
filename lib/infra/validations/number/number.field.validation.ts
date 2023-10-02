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
  }
}

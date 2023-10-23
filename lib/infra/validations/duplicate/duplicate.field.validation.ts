import {
  FieldValidation,
  Validation
} from '@/data/protocols/validation'
import { InvalidFieldError } from '@/domain'
import { containsDuplicate, searchInJson } from '@/util'
import { DuplicateValidateOptions, DuplicateValidateOptionsDefault } from './duplicate.field.validation.options'

export class DuplicateValueValidation implements Validation {
  constructor(
    readonly field: string,
    readonly values: unknown[],
    readonly options: DuplicateValidateOptions = DuplicateValidateOptionsDefault
  ) {}

  validate(input: unknown): FieldValidation {
    let validationErrorMessage = null
    const isCaseSensitive = true
    const value = searchInJson(input, this.field)
    if (this.options.strictEquals) {
      if (containsDuplicate(this.values as string[], value, isCaseSensitive)) {
        validationErrorMessage = `${this.options.message}`
      }
    } else if (containsDuplicate(this.values as string[], value, false)) {
      validationErrorMessage = `${this.options.message}`
    }

    if (validationErrorMessage !== null) {
      return {
        field: this.field,
        error: new InvalidFieldError(validationErrorMessage)
      }
    }
  }
}

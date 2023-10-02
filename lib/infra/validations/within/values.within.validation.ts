import {
  FieldValidation,
  Validation,
  ValidationOptions
} from '@/data/protocols/validation'
import { InvalidFieldError } from '@/domain'
import { containsValue, searchInJson } from '@/util'

export class ValuesWithinValidation implements Validation {
  constructor(
    readonly field: string,
    readonly values: unknown[],
    readonly options?: ValidationOptions
  ) {}

  validate(input: unknown): FieldValidation {
    let validationErrorMessage = null
    const isCaseSensitive = true
    const value = searchInJson(input, this.field)
    if (this.options.strictEquals) {
      if (!containsValue(this.values as string[], value, isCaseSensitive)) {
        validationErrorMessage = `${input[this.field]} ${this.options.message}`
      }
    } else if (!containsValue(this.values as string[], value, false)) {
      validationErrorMessage = `${input[this.field]} ${this.options.message}`
    }
    if (validationErrorMessage !== null) {
      return {
        field: this.field,
        error: new InvalidFieldError(validationErrorMessage)
      }
    }
  }
}

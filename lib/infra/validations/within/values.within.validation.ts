import {
  FieldValidation,
  Validation
} from '@/data/protocols/validation'
import { InvalidFieldError } from '@/domain'
import { containsValue, searchInJson } from '@/util'
import { WhithinValuesValidationOptions, WhithinValuesValidationOptionsDefault } from './within.values.validation.options'

export class ValuesWithinValidation implements Validation {
  constructor(
    readonly field: string,
    readonly values: unknown[],
    readonly options: WhithinValuesValidationOptions = WhithinValuesValidationOptionsDefault
  ) {}

  validate(input: unknown): FieldValidation {
    let validationErrorMessage = null
    const isCaseSensitive = true
    const value = searchInJson(input, this.field)
    if (this.options.strictEquals) {
      if (!containsValue(this.values as string[], value, isCaseSensitive)) {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        validationErrorMessage = `${input[this.field]} ${this.options.message}`
      }
    } else if (!containsValue(this.values as string[], value, false)) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
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

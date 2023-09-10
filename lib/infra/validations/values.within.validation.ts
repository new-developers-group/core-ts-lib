import { Validation, ValidationOptions } from '@/data/protocols/validation'
import { ValidationHelper } from './validation.helper'
import { containsValue } from '@/util'
import { InvalidFieldError } from '@/domain'

export class ValuesWithinValidation
  extends ValidationHelper
  implements Validation
{
  constructor(
    readonly fieldName: string,
    readonly values: unknown[],
    readonly options: ValidationOptions
  ) {
    super(fieldName)
  }

  validate(input: unknown): Error {
    let validationErrorMessage = null
    const isCaseSensitive = true
    const value = this.getNestedAttributeValue(input) as string
    if (this.options.strictEquals) {
      if (!containsValue(this.values as string[], value, isCaseSensitive)) {
        validationErrorMessage = `${input[this.fieldName]} ${
          this.options.customMessage
        }`
      }
    } else if (!containsValue(this.values as string[], value, false)) {
      validationErrorMessage = `${input[this.fieldName]} ${
        this.options.customMessage
      }`
    }
    if (validationErrorMessage !== null) {
      return new InvalidFieldError(validationErrorMessage)
    }
  }
}

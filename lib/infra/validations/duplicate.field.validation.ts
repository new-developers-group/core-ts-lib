import { Validation, ValidationOptions } from '@/data/protocols/validation'
import { ValidationHelper } from './validation.helper'
import { containsDuplicate } from '@/util'
import { InvalidFieldError } from '@/domain'

export class DuplicateValueValidation
  extends ValidationHelper
  implements Validation
{
  constructor(
    readonly fieldName: string,
    readonly values: unknown[],
    readonly options?: ValidationOptions
  ) {
    super(fieldName)
  }

  validate(input: unknown): Error {
    let validationErrorMessage = null
    const isCaseSensitive = true
    const value = this.getNestedAttributeValue(input) as string
    if (this.options.strictEquals) {
      if (containsDuplicate(this.values as string[], value, isCaseSensitive)) {
        validationErrorMessage = `${this.options.customMessage}`
      }
    } else if (containsDuplicate(this.values as string[], value, false)) {
      validationErrorMessage = `${this.options.customMessage}`
    }

    if (validationErrorMessage !== null) {
      return new InvalidFieldError(validationErrorMessage)
    }
  }
}

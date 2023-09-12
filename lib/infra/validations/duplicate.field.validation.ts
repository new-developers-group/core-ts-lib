import {
  FieldValidation,
  Validation,
  ValidationOptions
} from '@/data/protocols/validation'
import { InvalidFieldError } from '@/domain'
import { containsDuplicate } from '@/util'
import { ValidationHelper } from './validation.helper'

export class DuplicateValueValidation
  extends ValidationHelper
  implements Validation
{
  constructor(
    readonly field: string,
    readonly values: unknown[],
    readonly options?: ValidationOptions
  ) {
    super(field)
  }

  validate(input: unknown): FieldValidation {
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
      return {
        field: this.field,
        error: new InvalidFieldError(validationErrorMessage)
      }
    }
  }
}

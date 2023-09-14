import { FieldValidation, Validation } from '@/data/protocols/validation'
import { InvalidFieldError } from '@/domain/errors'
import { ValidationHelper } from './validation.helper'

export class CompareFieldsValidation
  extends ValidationHelper
  implements Validation
{
  constructor(
    private readonly fieldName: string,
    private readonly fieldToCompareName: string
  ) {
    super(fieldName)
  }

  validate(input: any): FieldValidation {
    const value = this.getNestedAttributeValue(input)
    const toCompare = this.getNestedAttributeValue(
      input,
      this.fieldToCompareName
    )
    if (!toCompare) {
      return {
        field: this.fieldToCompareName,
        error: new InvalidFieldError(`can't find value to compare`)
      }
    }
    if (value !== toCompare) {
      return {
        field: this.fieldName,
        error: new InvalidFieldError(
          `the value doesn't match the value expected`
        )
      }
    }
  }
}

import { FieldValidation, Validation } from '@/data/protocols/validation'
import { InvalidFieldError } from '@/domain/errors'

export class CompareFieldsValidation implements Validation {
  constructor(
    private readonly fieldName: string,
    private readonly fieldToCompareName: string
  ) {}

  validate(input: any): FieldValidation {
    if (input[this.fieldName] !== input[this.fieldToCompareName]) {
      return {
        field: this.fieldName,
        error: new InvalidFieldError(
          `the value doesn't match the value expected`
        )
      }
    }
  }
}

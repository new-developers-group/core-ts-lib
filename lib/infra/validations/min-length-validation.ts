import { FieldValidation, Validation } from '@/data/protocols'
import { InvalidFieldError } from '@/domain/errors'

export class MinLengthValidation implements Validation {
  constructor(
    readonly field: string,
    private readonly minLength: number
  ) {}

  validate(input: object): FieldValidation {
    return input[this.field]?.length < this.minLength
      ? {
          field: this.field,
          error: new InvalidFieldError(
            `the field ${this.field} need a minimal lenght of ${this.minLength}`
          )
        }
      : null
  }
}

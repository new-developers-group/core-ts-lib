import { EmailValidator, FieldValidation, Validation } from '@/data'
import { InvalidFieldError } from '@/domain'
import { searchInJson } from '@/util'

export class EmailValidation implements Validation {
  constructor(
    private readonly fieldName: string,
    private readonly emailValidator: EmailValidator
  ) {}

  validate(input: unknown): FieldValidation {
    const value = searchInJson(input, this.fieldName)
    const isValid = this.emailValidator.isValid(value)
    if (!isValid) {
      return {
        field: this.fieldName,
        error: new InvalidFieldError(`Invalid Email`)
      }
    }
  }
}

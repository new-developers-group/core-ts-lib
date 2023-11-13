import { EmailValidator, FieldValidation, Validation } from '@/data'
import { InvalidFieldError } from '@/domain'
import { searchInJson } from '@/util'
import {
  EmailValidateOptions,
  EmailValidateOptionsDefault
} from './email-validation.options'

export class EmailValidation implements Validation {
  constructor(
    readonly fieldName: string,
    readonly emailValidator: EmailValidator,
    readonly options: EmailValidateOptions = EmailValidateOptionsDefault
  ) {}

  validate(input: unknown): FieldValidation {
    const value = searchInJson(input, this.fieldName)
    const isValid = this.emailValidator.isValid(value)
    if (!isValid) {
      return {
        field: this.fieldName,
        error: new InvalidFieldError(this.options.message)
      }
    }
  }
}

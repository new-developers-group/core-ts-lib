import { EmailValidator, FieldValidation, Validation } from '@/data'
import { InvalidFieldError } from '@/domain'
import validator from 'validator'

export class EmailValidatorAdapter implements EmailValidator {
  private static instance: EmailValidatorAdapter

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static getInstance(): EmailValidatorAdapter {
    if (!EmailValidatorAdapter.instance) {
      EmailValidatorAdapter.instance = new EmailValidatorAdapter()
    }

    return EmailValidatorAdapter.instance
  }

  isValid(email: string): boolean {
    return validator.isEmail(email)
  }
}

export class EmailValidation implements Validation {
  constructor(
    private readonly fieldName: string,
    private readonly emailValidator: EmailValidator
  ) {}

  validate(input: any): FieldValidation {
    const isValid = this.emailValidator.isValid(input[this.fieldName])
    if (!isValid) {
      return {
        field: this.fieldName,
        error: new InvalidFieldError(`Invalid Email`)
      }
    }
  }
}

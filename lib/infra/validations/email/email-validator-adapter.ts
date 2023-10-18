import { EmailValidator } from '@/data'
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
    return email ? validator.isEmail(email) : false
  }
}

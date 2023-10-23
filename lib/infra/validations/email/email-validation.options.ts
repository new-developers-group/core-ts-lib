import { MessagesValidations } from '@/infra/validators'

export type EmailValidateOptions = {
  message?: string
}

export const EmailValidateOptionsDefault: Pick<
  EmailValidateOptions,
  'message'
> = {
  message: process.env.VALIDATION_EMAIL
    ? process.env.VALIDATION_EMAIL
    : MessagesValidations.EMAIL
}

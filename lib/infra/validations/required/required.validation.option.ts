import { MessagesValidations } from '@/infra/validators'

export type RequiredFieldValidationOptions = {
  strictEquals?: boolean
  message?: string
  value?: unknown
}

export const RequiredFieldValidationOptionsDefault: Pick<
  RequiredFieldValidationOptions,
  'message'
> = {
  message: process.env.VALIDATION_REQUIRED
    ? process.env.VALIDATION_REQUIRED
    : MessagesValidations.REQUIRED
}

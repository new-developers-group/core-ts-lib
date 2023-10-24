import { MessagesValidations } from '@/infra/validators'

export type DuplicateValidateOptions = {
  strictEquals?: boolean
  message?: string
}

export const DuplicateValidateOptionsDefault: Pick<
  DuplicateValidateOptions,
  'message'
> = {
  message: process.env.VALIDATION_EQUALS
    ? process.env.VALIDATION_EQUALS
    : MessagesValidations.DUPLICATE
}

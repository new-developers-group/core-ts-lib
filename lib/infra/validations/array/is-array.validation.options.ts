import { MessagesValidations } from '@/infra/validators'

export type ArrayValidateOptions = {
  message?: string
  isGreaterThan?: { value: number; message?: string }
}

export const ArrayValidateOptionsDefault: Pick<
  ArrayValidateOptions,
  'message' | 'isGreaterThan'
> = {
  message: process.env.VALIDATION_INVALID_ARRAY
    ? process.env.VALIDATION_INVALID_ARRAY
    : MessagesValidations.ARRAY
}

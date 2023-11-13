import { MessagesValidations } from "@/infra/validators"

export type StringValidateOptions = {
  strictEquals?: boolean
  message?: string
  min_length?: { value: number; message?: string }
  max_length?: { value: number; message?: string }
}

export const StringValidateOptionsDefault: Pick<
  StringValidateOptions,
  'message'
> = {
  message: process.env.VALIDATION_STRING
    ? process.env.VALIDATION_STRING
    : MessagesValidations.STRING
}

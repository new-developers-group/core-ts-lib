import { MessagesValidations } from "@/infra/validators"

export type BooleanValidateOptions = {
  message?: string
  value?: { shouldbe: boolean }
}

export const BooleanValidateOptionsDefault: Pick<
  BooleanValidateOptions,
  'message'
> = {
  message: process.env.VALIDATION_BOOLEAN
    ? process.env.VALIDATION_BOOLEAN
    : MessagesValidations.BOOLEAN
}

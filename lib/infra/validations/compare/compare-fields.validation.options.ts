import { MessagesValidations } from "@/infra/validators"

export type CompareValidateOptions = {
  message?: string
}

export const CompareValidateOptionsDefault: Pick<
  CompareValidateOptions,
  "message"
> = {
  message: process.env.VALIDATION_COMPARE
    ? process.env.VALIDATION_COMPARE
    : MessagesValidations.VALIDATION_COMPARE
}

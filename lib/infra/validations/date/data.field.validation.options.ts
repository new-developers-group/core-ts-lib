import { MessagesValidations } from "@/infra/validators"

export type DateValidateOptions = {
  strictEquals?: boolean
  message?: string
}

export const DateValidateOptionsDefault: Pick<
  DateValidateOptions,
  "message"
> = {
  message: process.env.VALIDATION_DATE
    ? process.env.VALIDATION_DATE
    : MessagesValidations.DATE
}

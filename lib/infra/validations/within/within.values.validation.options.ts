import { MessagesValidations } from "@/infra/validators"

export type WhithinValuesValidationOptions = {
  strictEquals?: boolean
  message?: string
  value?: unknown
}


export const WhithinValuesValidationOptionsDefault: Pick<
  WhithinValuesValidationOptions,
  'message'
> = {
  message: process.env.VALIDATION_WHITHIN
    ? process.env.VALIDATION_WHITHIN
    : MessagesValidations.WHITHIN
}
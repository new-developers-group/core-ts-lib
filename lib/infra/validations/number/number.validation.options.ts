import { MessagesValidations } from "@/infra/validators"

export type NumberValidateOptions = {
  strictEquals?: boolean
  message: string
  min?: { value: number; message?: string }
  max?: { value: number; message?: string }
}

export const NumberValidateOptionsDefault: Pick<
  NumberValidateOptions,
  'message'
> = {
  message: process.env.VALIDATION_NUMBER
    ? process.env.VALIDATION_NUMBER
    : MessagesValidations.NUMBER
}

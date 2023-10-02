export type StringValidateOptions = {
  strictEquals?: boolean
  message: string
  min?: { value: number, message?: string }
  max?: { value: number, message?: string }
}

export const StringValidateOptionsDefault: Pick<StringValidateOptions, 'message'> = {
  message: process.env.VALIDATION_STRING ? process.env.VALIDATION_STRING : `Value is not a string`,
};
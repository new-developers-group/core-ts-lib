export type EqualsValidateOptions = {
  strictEquals?: boolean
  message?: string
}

export const EqualsValidateOptionsDefault: Pick<
  EqualsValidateOptions,
  'message'
> = {
  message: process.env.VALIDATION_EQUALS
    ? process.env.VALIDATION_EQUALS
    : `The value provided is not equals to expected`
}

export type NumberValidateOptions = {
  strictEquals?: boolean
  message: string
}

export const NumberValidateOptionsDefault: Pick<
  NumberValidateOptions,
  'message'
> = {
  message: process.env.VALIDATION_NUMBER_MIN
    ? process.env.VALIDATION_NUMBER_MIN
    : `Invalid Number`
}

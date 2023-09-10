/**
 * validate a single attribute and return the first error
 */
export interface SingleValidator {
  toSingleValidate: (input: object) => Error
}

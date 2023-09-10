import { FieldNameValidation } from './field.name.validation'

export interface Validation extends FieldNameValidation {
  validate: (input: unknown) => Error
}

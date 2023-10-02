import { FieldValidation } from './field.name.validation'

export interface Validation {
  validate: (input: object) => FieldValidation
}

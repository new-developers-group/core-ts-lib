import { FieldValidation } from './field.name.validation'

export interface Validator {
  validate: (input: object) => FieldValidation[]
}

import {
  FieldValidation,
  Validation,
  ValidationOptions
} from '@/data/protocols/validation'
import { InvalidFieldError } from '@/domain/errors'
import { isTruthy, searchInJson } from '@/util'

export class RequiredFieldValidation implements Validation {
  constructor(
    readonly field: string,
    readonly options?: ValidationOptions
  ) {}

  validate(input: unknown): FieldValidation {
    const value = searchInJson(input, this.field)
    if (!isTruthy(value)) {
      const message = isTruthy(this.options)
        ? `${this.field} ${this.options.message}`
        : 'Required Field'
      return { field: this.field, error: new InvalidFieldError(message) }
    }
  }
}

import {
  FieldValidation,
  Validation
} from '@/data/protocols/validation'
import { InvalidFieldError } from '@/domain/errors'
import { isTruthy, searchInJson } from '@/util'
import { RequiredFieldValidationOptions, RequiredFieldValidationOptionsDefault } from './required.validation.option'

export class RequiredFieldValidation implements Validation {
  constructor(
    readonly field: string,
    readonly options: RequiredFieldValidationOptions = RequiredFieldValidationOptionsDefault
  ) {}

  validate(input: unknown): FieldValidation {
    const value = searchInJson(input, this.field)
    if (typeof value !== "boolean" && !isTruthy(value)) {
      return { field: this.field, error: new InvalidFieldError(this.options.message) }
    }
  }
}

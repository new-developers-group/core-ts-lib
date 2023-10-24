import { FieldValidation, Validation } from '@/data/protocols/validation'
import { InvalidFieldError } from '@/domain/errors'
import { searchInJson } from '@/util'
import {
  EqualsValidateOptions,
  EqualsValidateOptionsDefault
} from './equals.validation.options'
export class EqualsToFieldValidation implements Validation {
  constructor(
    readonly field: string,
    readonly comparison: any,
    readonly options: EqualsValidateOptions = EqualsValidateOptionsDefault
  ) {}

  validate(input: unknown): FieldValidation {
    const value = searchInJson(input, this.field)
    if (this.options.strictEquals) {
      if (!(value === this.comparison)) {
        return {
          field: this.field,
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          error: new InvalidFieldError(
            `${this.options.message} ${this.comparison}`
          )
        }
      }
    } else {
      // eslint-disable-next-line eqeqeq
      if (!(value == this.comparison)) {
        return {
          field: this.field,
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          error: new InvalidFieldError(
            `${this.options.message} ${this.comparison}`
          )
        }
      }
    }
  }
}

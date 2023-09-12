import { FieldValidation, Validation } from '@/data/protocols'
import { ValueNotExistsError } from '@/domain/errors'

export class ValuesWhitinValidation implements Validation {
  constructor(
    readonly field: string,
    private readonly values: any[]
  ) {}

  validate(input: object): FieldValidation {
    if (!this.values.includes(input[this.field])) {
      return {
        field: this.field,
        error: new ValueNotExistsError(this.field)
      }
    }
  }
}

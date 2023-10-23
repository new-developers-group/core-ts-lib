import { FieldValidation, Validation } from '@/data/protocols/validation'
import { InvalidFieldError } from '@/domain/errors'
import { searchInJson } from '@/util'
import { CompareValidateOptions, CompareValidateOptionsDefault } from './compare-fields.validation.options'

export class CompareFieldsValidation implements Validation {
  constructor(
    private readonly fieldName: string,
    private readonly fieldToCompareName: string,
    private readonly options: CompareValidateOptions = CompareValidateOptionsDefault
  ) {}

  validate(input: unknown): FieldValidation {
    const value = searchInJson(input, this.fieldName)
    const toCompare = searchInJson(input, this.fieldToCompareName)
    if (!toCompare) {
      return {
        field: this.fieldToCompareName,
        error: new InvalidFieldError(`can't find value to compare`)
      }
    }
    if (value !== toCompare) {
      return {
        field: this.fieldName,
        error: new InvalidFieldError(this.options.message)
      }
    }
  }
}

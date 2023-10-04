import { Validation, ValidationOptions } from '@/data/protocols/validation'
import {
  ArrayValidateOptions,
  CompareFieldsValidation,
  DateFieldValidation,
  DuplicateValueValidation,
  EmailValidation,
  EmailValidatorAdapter,
  IsArrayFieldValidation,
  NumberFieldValidation,
  NumberValidateOptions,
  RequiredFieldValidation,
  StringFieldValidation,
  StringValidateOptions,
  ValuesWithinValidation
} from '@/infra/validations'
import { DEFAULT_ISWITHIN } from '@/infra/validators'
export class ValidationBuilder {
  private constructor(
    private readonly fieldName: string,
    private readonly validations: Validation[]
  ) {}

  static field(fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, [])
  }

  required(options?: ValidationOptions): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(this.fieldName, options))
    return this
  }

  email(): ValidationBuilder {
    this.validations.push(
      new EmailValidation(this.fieldName, EmailValidatorAdapter.getInstance())
    )
    return this
  }

  string(options?: StringValidateOptions): ValidationBuilder {
    this.validations.push(new StringFieldValidation(this.fieldName, options))
    return this
  }

  number(options?: NumberValidateOptions): ValidationBuilder {
    this.validations.push(new NumberFieldValidation(this.fieldName, options))
    return this
  }

  date(options?: ValidationOptions): ValidationBuilder {
    this.validations.push(new DateFieldValidation(this.fieldName, options))
    return this
  }

  array(options?: ArrayValidateOptions): ValidationBuilder {
    this.validations.push(new IsArrayFieldValidation(this.fieldName, options))
    return this
  }

  within(
    values: unknown[],
    options: ValidationOptions = DEFAULT_ISWITHIN
  ): ValidationBuilder {
    this.validations.push(
      new ValuesWithinValidation(this.fieldName, values, options)
    )
    return this
  }

  duplicate(
    values: unknown[],
    options: ValidationOptions = DEFAULT_ISWITHIN
  ): ValidationBuilder {
    this.validations.push(
      new DuplicateValueValidation(this.fieldName, values, options)
    )
    return this
  }

  sameAs(fieldToCompare: string): ValidationBuilder {
    this.validations.push(
      new CompareFieldsValidation(this.fieldName, fieldToCompare)
    )
    return this
  }

  with(validation: Validation): ValidationBuilder {
    this.validations.push(validation)
    return this
  }

  build(): Validation[] {
    return this.validations
  }
}

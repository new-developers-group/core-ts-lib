import { Validation, ValidationOptions } from '@/data/protocols/validation';
import {
  DateFieldValidation,
  DuplicateValueValidation,
  NumberFieldValidation,
  RequiredFieldValidation,
  StringFieldValidation,
  ValuesWithinValidation,
} from '@/infra/validations';
import { DEFAULT_ISWITHIN } from '@/infra/validators';

export class ValidationBuilder {
  private constructor(private readonly fieldName: string, private readonly validations: Validation[]) {}

  static field(fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, []);
  }

  required(options?: ValidationOptions): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(this.fieldName, options));
    return this;
  }

  // email (): ValidationBuilder {
  //   this.validations.push(new EmailValidation(this.fieldName, EmailValidatorAdapter.getInstance()))
  //   return this
  // }

  isString(options?: ValidationOptions): ValidationBuilder {
    this.validations.push(new StringFieldValidation(this.fieldName, options));
    return this;
  }

  isNumber(options?: ValidationOptions): ValidationBuilder {
    this.validations.push(new NumberFieldValidation(this.fieldName, options));
    return this;
  }

  isDate(options?: ValidationOptions): ValidationBuilder {
    this.validations.push(new DateFieldValidation(this.fieldName, options));
    return this;
  }

  isWithin(values: unknown[], options: ValidationOptions = DEFAULT_ISWITHIN): ValidationBuilder {
    this.validations.push(new ValuesWithinValidation(this.fieldName, values, options));
    return this;
  }

  isDuplicate(values: unknown[], options: ValidationOptions = DEFAULT_ISWITHIN): ValidationBuilder {
    this.validations.push(new DuplicateValueValidation(this.fieldName, values, options));
    return this;
  }

  // sameAs (fieldToCompare: string): ValidationBuilder {
  //   this.validations.push(new CompareFieldsValidation(this.fieldName, fieldToCompare))
  //   return this
  // }

  build(): Validation[] {
    return this.validations;
  }
}

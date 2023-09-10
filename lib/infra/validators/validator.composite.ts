import { SingleValidator, Validation } from '@/data/protocols/validation';
import { MultipleValidator } from '@/data/protocols/validation/multiple.validator';
import { MultipleValidations } from '@/data/protocols/validation/validation.error';

export class ValidatorComposite implements MultipleValidator, SingleValidator {
  constructor(private readonly validations: Validation[]) {}

  static build(validators: Validation[]): ValidatorComposite {
    return new ValidatorComposite(validators);
  }

  toSingleValidate(input: object): Error {
    for (const validation of this.validations) {
      const error = validation.validate(input);
      if (error) {
        return error;
      }
    }
  }

  toMultipleValidate(input: unknown): Map<string, MultipleValidations> {
    const map = new Map<string, MultipleValidations>();

    for (const validation of this.validations) {
      const error = validation.validate(input);

      if (!map.get(validation.fieldName)) {
        map.set(validation.fieldName, {
          key: validation.fieldName,
          value: input[validation.fieldName],
          errors: [],
        });
      }

      if (error) {
        const customValidation = map.get(validation.fieldName);
        customValidation.errors.push(error.message);
      }
    }

    return map;
  }
}

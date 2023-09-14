import {
  FieldValidation,
  Validation,
  Validator
} from '@/data/protocols/validation'

export class ValidatorComposite implements Validator {
  constructor(private readonly validations: Validation[]) {}

  static build(validators: Validation[]): ValidatorComposite {
    return new ValidatorComposite(validators)
  }

  validate(input: object): FieldValidation[] {
    const errors: FieldValidation[] = []
    for (const validation of this.validations) {
      const error = validation.validate(input)
      if (error) {
        errors.push(error)
      }
    }
    return errors
  }
}

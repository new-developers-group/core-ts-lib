import { Validator } from '@/data'
import { InvalidFieldError } from '@/domain'
import { ValidationBuilder as Builder } from '@/infra/builders'
import { ValidatorComposite } from '@/infra/validators'
import { NumberValidateOptions } from './number.validation.options'

describe('NumberValidationTest', () => {
  let validator: Validator
  beforeAll(() => {
    validator = ValidatorComposite.build([
      ...Builder.field('person.age').required().isNumber().build()
    ])
  })

  it('should return field validation error when age is not a number', () => {
    const error = validator.validate({ person: { age: 'undefined' } })
    expect(error).toEqual([
      { field: 'person.age', error: new InvalidFieldError('Invalid Number') }
    ])
  })

  it('should return field validation error when age is missing', () => {
    const error = validator.validate({ person: { age: undefined } })
    expect(error).toEqual([
      { field: 'person.age', error: new InvalidFieldError('Required Field') },
      { field: 'person.age', error: new InvalidFieldError('Invalid Number') }
    ])
  })

  it('should not return field validation when age is valid', () => {
    const error = validator.validate({ person: { age: 1 } })
    expect(error).toStrictEqual([])
  })

  it('should return field validation when age is invalid with options', () => {
    const options: NumberValidateOptions = {
      message: 'any_value'
    }
    const validator: Validator = ValidatorComposite.build([
      ...Builder.field('person.age').required().isNumber(options).build()
    ])
    const error = validator.validate({ person: { age: undefined } })
    expect(error).toStrictEqual([
      { field: 'person.age', error: new InvalidFieldError('Required Field') },
      { field: 'person.age', error: new InvalidFieldError('any_value') }
    ])
  })
})

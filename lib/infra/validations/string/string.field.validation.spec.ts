import { Validator } from '@/data'
import { InvalidFieldError } from '@/domain'
import { ValidationBuilder as Builder } from '@/infra/builders'
import { ValidatorComposite } from '@/infra/validators'
import { StringValidateOptions } from './string.validation.options'

describe('StringValidationTest', () => {
  let validator: Validator
  beforeAll(() => {
    validator = ValidatorComposite.build([
      ...Builder.field('person.name').required().isString().build()
    ])
  })

  it('should return field validation error when name is not a string', () => {
    const error = validator.validate({ person: { name: 123 } })
    expect(error).toEqual([
      {
        field: 'person.name',
        error: new InvalidFieldError('Value is not a string')
      }
    ])
  })

  it('should return field validation when age is invalid with options', () => {
    const options: StringValidateOptions = {
      message: 'any_value'
    }
    const validator: Validator = ValidatorComposite.build([
      ...Builder.field('person.name').required().isString(options).build()
    ])
    const error = validator.validate({ person: { name: 123 } })
    expect(error).toStrictEqual([
      { field: 'person.name', error: new InvalidFieldError('any_value') }
    ])
  })

  it('should return field validation when age is invalid with options mininum value default message', () => {
    const options: StringValidateOptions = {
      message: 'any_value',
      min: { value: 5 }
    }
    const validator: Validator = ValidatorComposite.build([
      ...Builder.field('person.name').required().isString(options).build()
    ])
    const error = validator.validate({ person: { name: '123' } })
    expect(error).toStrictEqual([
      {
        field: 'person.name',
        error: new InvalidFieldError('The mininum lenght of this should be 5')
      }
    ])
  })

  it('should return field validation when age is invalid with options mininum value custom message', () => {
    const options: StringValidateOptions = {
      message: 'any_value',
      min: { value: 5, message: 'any_value' }
    }
    const validator: Validator = ValidatorComposite.build([
      ...Builder.field('person.name').required().isString(options).build()
    ])
    const error = validator.validate({ person: { name: '123' } })
    expect(error).toStrictEqual([
      { field: 'person.name', error: new InvalidFieldError('any_value') }
    ])
  })
})

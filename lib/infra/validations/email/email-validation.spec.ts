import { Validator } from '@/data'
import { InvalidFieldError } from '@/domain'
import { ValidationBuilder as Builder } from '@/infra/builders'
import { ValidatorComposite } from '@/infra/validators'

describe('EmailValidationTest', () => {
  let validator: Validator
  beforeAll(() => {
    validator = ValidatorComposite.build([
      ...Builder.field('person.email').required().email().build()
    ])
  })

  it('should return field validation error when email is null', () => {
    const error = validator.validate({ person: { email: undefined } })
    expect(error).toEqual([
      { field: 'person.email', error: new InvalidFieldError('Required Field') },
      { field: 'person.email', error: new InvalidFieldError('Invalid Email') }
    ])
  })

  it('should return field validation error when email is invalid', () => {
    const error = validator.validate({ person: { email: 'invalid' } })
    expect(error).toEqual([
      { field: 'person.email', error: new InvalidFieldError('Invalid Email') }
    ])
  })

  it('should not return field validation when email is valid', () => {
    const error = validator.validate({ person: { email: 'gsantos@g-p.com' } })
    expect(error).toStrictEqual([])
  })
})

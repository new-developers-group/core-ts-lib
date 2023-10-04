import { Validator } from '@/data'
import { InvalidFieldError } from '@/domain'
import { ValidationBuilder as Builder } from '@/infra/builders'
import { ValidatorComposite } from '@/infra/validators'

describe('DateFieldValidationTest', () => {
  let validator: Validator
  beforeAll(() => {
    validator = ValidatorComposite.build([
      ...Builder.field('person.dob').required().date().build()
    ])
  })

  it('should return field validation error when dob is null', () => {
    const error = validator.validate({ person: { dob: undefined } })
    expect(error).toEqual([
      { field: 'person.dob', error: new InvalidFieldError('Required Field') },
      { field: 'person.dob', error: new InvalidFieldError('Invalid Date') }
    ])
  })

  it('should return field validation error when dob is invalid', () => {
    const error = validator.validate({ person: { dob: 'invalid' } })
    expect(error).toEqual([
      { field: 'person.dob', error: new InvalidFieldError('Invalid Date') }
    ])
  })

  it('should not return field validation when dob is valid', () => {
    const error = validator.validate({ person: { dob: new Date() } })
    expect(error).toStrictEqual([])
  })
})

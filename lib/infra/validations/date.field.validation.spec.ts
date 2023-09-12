import { Validator } from '@/data'
import { InvalidFieldError } from '@/domain'
import { ValidationBuilder as Builder } from '../builders'
import { ValidatorComposite } from '../validators'

describe('Date field validation test ', () => {
  let validator: Validator
  beforeAll(() => {
    validator = ValidatorComposite.build([
      ...Builder.field('dob').required().isDate().build()
    ])
  })

  it('should return field validation error when dob is null', () => {
    const error = validator.validate({ person: { dob: undefined } })
    expect(error).toEqual([
      { field: 'dob', error: new InvalidFieldError('Required Field') },
      { field: 'dob', error: new InvalidFieldError('Invalid Date') }
    ])
  })

  it('should return field validation error when dob is invalid', () => {
    const error = validator.validate({ person: { dob: 'invalid' } })
    expect(error).toEqual([
      { field: 'dob', error: new InvalidFieldError('Invalid Date') }
    ])
  })
})

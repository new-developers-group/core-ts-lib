import { Validator } from '@/data'
import { InvalidFieldError } from '@/domain'
import { ValidationBuilder as Builder } from '@/infra/builders'
import { ValidatorComposite } from '@/infra/validators'

describe('BooleanValidationTest', () => {
  let validator: Validator

  it('should return field validation error when isAdmin is not boolean', () => {
    validator = ValidatorComposite.build([
      ...Builder.field('person.isAdmin').required().boolean().build()
    ])
    const error = validator.validate({ person: { isAdmin: 123 } })
    expect(error).toEqual([
      { field: 'person.isAdmin', error: new InvalidFieldError('Should be a boolean') }
    ])
  })

  it('should return field validation error when isAdmin is not equals than expected value', () => {
    validator = ValidatorComposite.build([
      ...Builder.field('person.isAdmin').required().boolean({ message: 'isAdmin should be false',  value: { shouldbe: false }}).build()
    ])
    const error = validator.validate({ person: { isAdmin: true } })
    expect(error).toEqual([
      { field: 'person.isAdmin', error: new InvalidFieldError('isAdmin should be false') }
    ])
  })

  it('should return not field validation error when isAdmin is equals than expected value', () => {
    validator = ValidatorComposite.build([
      ...Builder.field('person.isAdmin').required().boolean({ message: 'isAdmin should be true',  value: { shouldbe: true }}).build()
    ])
    const error = validator.validate({ person: { isAdmin: true } })
    expect(error).toEqual([])
  })
  
})

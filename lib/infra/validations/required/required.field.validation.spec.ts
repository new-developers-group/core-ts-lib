import { Validator } from '@/data'
import { InvalidFieldError } from '@/domain'
import { ValidationBuilder as Builder } from '@/infra/builders'
import { ValidatorComposite } from '@/infra/validators'

describe('RequiredValidationTest', () => {
  let validator: Validator
  beforeAll(() => {
    validator = ValidatorComposite.build([
      ...Builder.field('person.dob').required().build()
    ])
  })

  it('should not return field validation error when tall is boolean', () => {
    const validator = ValidatorComposite.build([
      ...Builder.field('person.tall').required().boolean().build()
    ])
    const error = validator.validate({ person: { tall: false } })
    expect(error).toEqual([])
  })

  it('should return field validation error when tall is boolean and should be true', () => {
    const validator = ValidatorComposite.build([
      ...Builder.field('person.tall').required().boolean({ value: { shouldbe: true }, message: 'should be true'}).build()
    ])
    const error = validator.validate({ person: { tall: false } })
    expect(error).toEqual([
      { field: 'person.tall', error: new InvalidFieldError('should be true') }
    ])
  })

  it('should not return field validation error when tall is boolean and should be false', () => {
    const validator = ValidatorComposite.build([
      ...Builder.field('person.tall').required().boolean({ value: { shouldbe: false } }).build()
    ])
    const error = validator.validate({ person: { tall: false } })
    expect(error).toEqual([])
  })

  it('should return field validation error when tall is boolean', () => {
    const validator = ValidatorComposite.build([
      ...Builder.field('person.tall').required().boolean().build()
    ])
    const error = validator.validate({ person: { another: true } })
    expect(error).toEqual([
      { field: 'person.tall', error: new InvalidFieldError('Required Field') },
      { field: 'person.tall', error: new InvalidFieldError('Should be a boolean') }
    ])
  })

  it('should return field validation error when dob is null', () => {
    const error = validator.validate({ person: { dob: undefined } })
    expect(error).toEqual([
      { field: 'person.dob', error: new InvalidFieldError('Required Field') }
    ])
  })

  it('should return field validation error when there is not such property dob', () => {
    const error = validator.validate({ person: undefined })
    expect(error).toEqual([
      { field: 'person.dob', error: new InvalidFieldError('Required Field') }
    ])
  })

  it('should return field validation error when the whole object is null', () => {
    const error = validator.validate({})
    expect(error).toEqual([
      { field: 'person.dob', error: new InvalidFieldError('Required Field') }
    ])
  })

  it('should return field validation error when there is no object to validate', () => {
    const error = validator.validate(undefined)
    expect(error).toEqual([
      { field: 'person.dob', error: new InvalidFieldError('Required Field') }
    ])
  })

  it('should not return field validation when dob is valid', () => {
    const error = validator.validate({ person: { dob: new Date() } })
    expect(error).toStrictEqual([])
  })
})

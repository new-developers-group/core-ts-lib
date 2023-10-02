import { Validator } from '@/data'
import { InvalidFieldError } from '@/domain'
import { ValidationBuilder as Builder } from '@/infra/builders'
import { ValidatorComposite } from '@/infra/validators'

describe('CompareFieldsValidationTest', () => {
  let validator: Validator
  beforeAll(() => {
    validator = ValidatorComposite.build([
      ...Builder.field('person.password').required().sameAs('person.confirmPassword').build()
    ])
  })

  it('should return field validation error when password doesnt match', () => {
    const error = validator.validate({
      person: { password: '123', confirmPassword: '321' }
    })
    expect(error).toEqual([
      {
        field: 'person.password',
        error: new InvalidFieldError(
          `the value doesn't match the value expected`
        )
      }
    ])
  })

  it('should return error when confirmPassword is required', () => {
    const error = validator.validate({
      person: { password: 'undefined', confirmPassword: undefined }
    })
    expect(error).toEqual([
      {
        field: 'person.confirmPassword',
        error: new InvalidFieldError(`can't find value to compare`)
      }
    ])
  })

  it('should return field validation when password is required', () => {
    const error = validator.validate({
      person: { password: undefined, confirmPassword: 'undefined' }
    })
    expect(error).toEqual([
      {
        field: 'person.password',
        error: new InvalidFieldError(`Required Field`)
      },
      {
        field: 'person.password',
        error: new InvalidFieldError(
          `the value doesn't match the value expected`
        )
      }
    ])
  })

  it('should not return field validation when password matches', () => {
    const error = validator.validate({
      person: { password: 'undefined', confirmPassword: 'undefined' }
    })
    expect(error).toStrictEqual([])
  })
})

import { Validator } from '@/data'
import { InvalidFieldError } from '@/domain'
import { ValidationBuilder as Builder } from '@/infra/builders'
import { ValidatorComposite } from '@/infra/validators'
import { ArrayValidateOptions } from './is-array.validation.options'

describe('IsArrayValidationTest', () => {
  let validator: Validator
  beforeAll(() => {
    validator = ValidatorComposite.build([
      ...Builder.field('body.detail.data').required().array().build()
    ])
  })

  it('should return field validation when data is not an array', () => {
    const payload = { body: { detail: { data: {} } } }
    const error = validator.validate(payload)
    expect(error).toEqual([
      {
        field: 'body.detail.data',
        error: new InvalidFieldError('Must accept a collection of values')
      }
    ])
  })

  it('should return field validation when data is not an array using options', () => {
    const options: ArrayValidateOptions = {
      message: 'any_value'
    }
    const validator: Validator = ValidatorComposite.build([
      ...Builder.field('body.detail.data').required().array(options).build()
    ])
    const payload = { body: { detail: { data: {} } } }
    const error = validator.validate(payload)
    expect(error).toEqual([
      { field: 'body.detail.data', error: new InvalidFieldError('any_value') }
    ])
  })

  it('should return field validation when data is an array but empty', () => {
    const payload = { body: { detail: { data: [] } } }
    const error = validator.validate(payload)
    expect(error).toEqual([])
  })

  it('should not return field validation when data is an array and greater than 1', () => {
    const payload = {
      body: { detail: { data: [{}, { payload: { att: 'any' } }] } }
    }
    const error = validator.validate(payload)
    expect(error).toStrictEqual([])
  })

  it('should return field validation when data is an array custom options', () => {
    const options: ArrayValidateOptions = {
      isGreaterThan: { value: 2, message: 'need at least' }
    }
    const validator: Validator = ValidatorComposite.build([
      ...Builder.field('body.detail.data').required().array(options).build()
    ])
    const payload = {
      body: { detail: { data: [{ payload: { att: 'any' } }] } }
    }
    const error = validator.validate(payload)
    expect(error).toEqual([
      {
        field: 'body.detail.data',
        error: new InvalidFieldError('need at least')
      }
    ])
  })
})

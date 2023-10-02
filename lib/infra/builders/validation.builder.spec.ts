
import { Validator } from '@/data'
import { InvalidFieldError } from '@/domain'
import { ValidationBuilder as Builder } from '../builders'
import { ValidatorComposite } from '../validators'

describe('ValidationBuilderTest', () => {
  let validator: Validator
  
  beforeAll(() => {    
    validator = ValidatorComposite.build([
      ...Builder.field('person').required().build(),
      ...Builder.field('user.id').required().isNumber().build(),
      ...Builder.field('user.address.eirCode').required().build(),
    ])
  })

it('should validate with mutiple levels of node in a json', () => {
    const error = validator.validate({
      person: { id: 'undefined' },
      user: { 
        id: 1,
        address: {
          line1: 'any',
          eirCode: undefined
        } 
      }
    })
    expect(error).toEqual([
      {
        field: 'user.address.eirCode',
        error: new InvalidFieldError(
          `Required Field`
        )
      }
    ])
  })

  it('should not validate user as nested validation is only for person', () => {
    const error = validator.validate({
      person: { id: 'undefined' },
      user: { 
        id: 'undefined',
        address: {
          line1: 'any',
          eirCode: 'any_value'
        }  
      }
    })
    expect(error).toEqual([
      {
        field: 'user.id',
        error: new InvalidFieldError(
          `Invalid Number`
        )
      }
    ])
  })

  it('should validate person as its a required object and user is as its not a number', () => {
    const error = validator.validate({
      person: undefined,
      user: { 
        id: 'undefined',
        address: {
          line1: 'any',
          eirCode: 'any_value'
        }  
      }
    })
    expect(error).toEqual([
      {
        field: 'person',
        error: new InvalidFieldError(
          `Required Field`
        )
      },
      {
        field: 'user.id',
        error: new InvalidFieldError(
          `Invalid Number`
        )
      }
    ])
  })

})

import { Validator } from '@/data'
import { InvalidFieldError } from '@/domain'
import { ValidationBuilder as Builder } from '@/infra/builders'
import { ValidatorComposite } from '@/infra/validators'

describe('EqualsValidationTest', () => {
  let validator: Validator

  it('should return field validation error when surname is not equals than expected value with strictEquals', () => {
    validator = ValidatorComposite.build([
      ...Builder.field('person.surname').required().equals('123', { strictEquals: true, message: 'any' }).build()
    ])
    const error = validator.validate({ person: { surname: 123 } })
    expect(error).toEqual([
      { field: 'person.surname', error: new InvalidFieldError('any 123') }
    ])
  })

  it('should return field validation error when surname is not equals than expected value with strictEquals false', () => {
    validator = ValidatorComposite.build([
      ...Builder.field('person.surname').required().equals('123').build()
    ])
    const error = validator.validate({ person: { surname: 1234 } })
    expect(error).toEqual([
      { field: 'person.surname', error: new InvalidFieldError('The value provided is not equals to expected 123') }
    ])
  })

  it('should return not field validation error when surname is not equals than expected value with strictEquals false', () => {
    validator = ValidatorComposite.build([
      ...Builder.field('person.surname').required().equals('1234').build()
    ])
    const error = validator.validate({ person: { surname: 1234 } })
    expect(error).toEqual([])
  })
  
})

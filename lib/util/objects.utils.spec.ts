import { isAttributeInObject } from './objects.utils'

describe('ObjectUtilTest', () => {
  it('when att2 does not exists in result should be false', () => {
    const result = { att: '' }
    expect(isAttributeInObject('att2', result)).toBeFalsy()
  })

  it('when att2 does exists in result but undefined should be true', () => {
    const result = { att: undefined }
    expect(isAttributeInObject('att', result)).toBeTruthy()
  })

  it('when att2 does exists in result and has value should be true', () => {
    const result = { att: 'undefined' }
    expect(isAttributeInObject('att', result)).toBeTruthy()
  })
})

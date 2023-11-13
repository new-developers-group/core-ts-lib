import { badRequest } from "./http-helper"

describe('HttpHelperTest', () => {
  

  it('BadRequest should accept Error', () => {
    const response = badRequest(new Error('any'))
    
    expect(response).toEqual({
      code: 400,
      headers: {},
      body: {
        data: new Error('any')
      }
    })
  })

  it('BadRequest should accept any object', () => {
    const response = badRequest({ any: 'value'})
    expect(response).toEqual({
      code: 400,
      headers: {},
      body: {
        data: { any: 'value'}
      }
    })
  })

  it('BadRequest should accept any array', () => {
    const response = badRequest([{ any: 'value'}, { any: 'value2'}])
    expect(response).toEqual({
      code: 400,
      headers: {},
      body: {
        data: [{ any: 'value'}, { any: 'value2'}]
      }
    })
  })  

  
})

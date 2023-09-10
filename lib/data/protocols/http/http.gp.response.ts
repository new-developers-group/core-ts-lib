export class GpResponse {
  code: string | number | undefined
  headers: object | undefined
  body: object | undefined

  constructor(res: GpResponse) {
    Object.assign(this, res)
  }
}

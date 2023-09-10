import { GpResponse } from './http.gp.response'

export class GpResponseBuilder {
  private res: GpResponse = {
    code: 200,
    body: {},
    headers: {}
  }

  public withStatus(status: number): GpResponseBuilder {
    this.res.code = status
    return this
  }

  public withBody(body?: object): GpResponseBuilder {
    this.res.body = { data: body }
    return this
  }

  public withHeaders(headers?: object): GpResponseBuilder {
    this.res.headers = headers
    return this
  }

  public build(): GpResponse {
    return new GpResponse(this.res)
  }
}

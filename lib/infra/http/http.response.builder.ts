import { HttpResponse } from './http.response'

export class CustomResponseBuilder {
  private res: HttpResponse = {
    status: 200,
    body: {},
    headers: {}
  }

  public withStatus(status: number) {
    this.res.status = status
    return this
  }

  public withBody(body: object) {
    this.res.body = body
    return this
  }

  public withHeaders(headers: object) {
    this.res.headers = headers
    return this
  }

  public build(): HttpResponse {
    return new HttpResponse(this.res)
  }
}

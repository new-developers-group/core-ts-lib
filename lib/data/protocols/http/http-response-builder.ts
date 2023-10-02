import { HttpResponse } from "./http-response"


export class HttpResponseBuilder {
  private res: HttpResponse = {
    code: 200,
    body: {},
    headers: {}
  }

  public withStatus(status: number): HttpResponseBuilder {
    this.res.code = status
    return this
  }

  public withBody(body?: object): HttpResponseBuilder {
    this.res.body = { data: body }
    return this
  }

  public withHeaders(headers?: object): HttpResponseBuilder {
    this.res.headers = headers
    return this
  }

  public build(): HttpResponse {
    return this.res as HttpResponse;
  }
}

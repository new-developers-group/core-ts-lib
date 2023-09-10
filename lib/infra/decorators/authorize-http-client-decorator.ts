import { GetStorage } from '@/data/protocols/cache'
import { HttpClient, HttpRequest, HttpResponse } from '@/data/protocols/http'

export class AuthorizeHttpClientDecorator implements HttpClient {
  constructor(
    private readonly getStorage: GetStorage,
    private readonly httpClient: HttpClient
  ) {}

  async request(data: HttpRequest): Promise<HttpResponse> {
    const accessToken: string = await this.getStorage.get('access-token')
    if (accessToken) {
      Object.assign(data, {
        headers: Object.assign(data.headers || {}, {
          Authorization: `Bearer ${accessToken}`
        })
      })
    }
    const httpResponse = await this.httpClient.request(data)
    return httpResponse
  }
}

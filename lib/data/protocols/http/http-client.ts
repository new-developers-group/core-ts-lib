/* eslint @typescript-eslint/no-explicit-any: ["off"] */

import { HttpResponse } from './http-response'

export type HttpRequest = {
  url: string
  method: HttpMethod
  body?: any
  headers?: any
}

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>
}

export type HttpMethod = 'post' | 'get' | 'put' | 'delete' | 'patch'

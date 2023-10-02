import { HttpStatusCode } from './http.status'

export type HttpResponse<T = unknown> = {
  code: HttpStatusCode
  body?: T
  headers?: T
}

export type HttpError = {
  message?: string
}

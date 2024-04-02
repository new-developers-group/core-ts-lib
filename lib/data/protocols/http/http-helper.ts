import { ServerError, UnauthorizedError } from '@/domain/errors'
import { HttpResponse } from './http-response'
import { HttpResponseBuilder } from './http-response-builder'
import { HttpStatusCode } from './http.status'

export const badRequest = (body: object): HttpResponse => {
  return new HttpResponseBuilder()
    .withBody(body)
    .withStatus(HttpStatusCode.badRequest)
    .build()
}

export const forbidden = (body: object): HttpResponse => {
  return new HttpResponseBuilder()
    .withBody(body)
    .withStatus(HttpStatusCode.forbidden)
    .build()
}

export const unauthorized = (): HttpResponse => {
  return new HttpResponseBuilder()
    .withBody(new UnauthorizedError())
    .withStatus(HttpStatusCode.unauthorized)
    .build()
}

export const serverError = (error: Error): HttpResponse => {
  return new HttpResponseBuilder()
    .withBody(new ServerError(error.message))
    .withStatus(HttpStatusCode.serverError)
    .build()
}

export const ok = (data: object, headers?: object): HttpResponse => {
  return new HttpResponseBuilder()
    .withBody(data)
    .withHeaders(headers)
    .withStatus(HttpStatusCode.ok)
    .build()
}

export const created = (data: object, headers?: object): HttpResponse => {
  return new HttpResponseBuilder()
    .withBody(data)
    .withHeaders(headers)
    .withStatus(HttpStatusCode.created)
    .build()
}

export const noContent = (): HttpResponse => {
  return new HttpResponseBuilder()
    .withBody(undefined)
    .withStatus(HttpStatusCode.noContent)
    .build()
}

export const notFound = (): HttpResponse => {
  return new HttpResponseBuilder()
    .withBody(undefined)
    .withStatus(HttpStatusCode.notFound)
    .build()
}

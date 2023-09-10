import { ServerError, UnauthorizedError } from '@/domain/errors'
import { GpResponse } from './http.gp.response'
import { GpResponseBuilder } from './http.gp.response.builder'
import { HttpStatusCode } from './http.status'

export const badRequest = (error: Error): GpResponse => {
  return new GpResponseBuilder()
    .withBody(error)
    .withStatus(HttpStatusCode.badRequest)
    .build()
}

export const forbidden = (error: Error): GpResponse => {
  return new GpResponseBuilder()
    .withBody(error)
    .withStatus(HttpStatusCode.forbidden)
    .build()
}

export const unauthorized = (): GpResponse => {
  return new GpResponseBuilder()
    .withBody(new UnauthorizedError())
    .withStatus(HttpStatusCode.unauthorized)
    .build()
}

export const serverError = (error: Error): GpResponse => {
  return new GpResponseBuilder()
    .withBody(new ServerError(error.message))
    .withStatus(HttpStatusCode.serverError)
    .build()
}

export const ok = (data: object, headers?: object): GpResponse => {
  return new GpResponseBuilder()
    .withBody(data)
    .withHeaders(headers)
    .withStatus(HttpStatusCode.ok)
    .build()
}

export const created = (data: object, headers?: object): GpResponse => {
  return new GpResponseBuilder()
    .withBody(data)
    .withHeaders(headers)
    .withStatus(HttpStatusCode.created)
    .build()
}

export const noContent = (): GpResponse => {
  return new GpResponseBuilder()
    .withBody(undefined)
    .withStatus(HttpStatusCode.noContent)
    .build()
}

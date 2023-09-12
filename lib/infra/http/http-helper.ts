import { ServerError, UnauthorizedError } from '@/domain/errors'
import { HttpResponse } from './http.response'
import { CustomResponseBuilder } from './http.response.builder'

export const badRequest = (error: Error | Error[]): HttpResponse => {
  return new CustomResponseBuilder().withBody(error).withStatus(400).build()
}

export const forbidden = (error: Error): HttpResponse => {
  return new CustomResponseBuilder().withBody(error).withStatus(403).build()
}

export const unauthorized = (): HttpResponse => {
  return new CustomResponseBuilder()
    .withBody(new UnauthorizedError())
    .withStatus(401)
    .build()
}

export const serverError = (error: Error): HttpResponse => {
  return new CustomResponseBuilder()
    .withBody(new ServerError(error.message))
    .withStatus(500)
    .build()
}

export const ok = (data: any, headers?: {}): HttpResponse => {
  return new CustomResponseBuilder()
    .withBody(data)
    .withHeaders(headers)
    .withStatus(200)
    .build()
}

export const created = (data: any, headers?: {}): HttpResponse => {
  return new CustomResponseBuilder()
    .withBody(data)
    .withHeaders(headers)
    .withStatus(201)
    .build()
}

export const noContent = (): HttpResponse => {
  return new CustomResponseBuilder().withBody(null).withStatus(204).build()
}

import { HttpStatusCode } from './http.status';

export type HttpResponse<T = unknown> = {
  statusCode: HttpStatusCode;
  body?: T;
  headers?: T;
};

export type HttpError = {
  message?: string;
};

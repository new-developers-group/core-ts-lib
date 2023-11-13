import { isAxiosError } from "axios"
import { BadGatewayError, BadRequestError, ForbiddenError, HttpStatusCode, InvalidCredentialError, NotFoundError, ServerError } from ".."

type ErrorWithMessage = {
  message: string
}

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  )
}

function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {
  if (isErrorWithMessage(maybeError)) return maybeError

  try {
    return new Error(JSON.stringify(maybeError))
  } catch {
    // fallback in case there's an error stringifying the maybeError
    // like with circular references for example.
    return new Error(String(maybeError))
  }
}

export function getErrorMessage(error: unknown) {
  return toErrorWithMessage(error).message
}

export function handlerAxiosError(e: unknown, serviceName: string, callback?: Function) {
  callback();
  if (isAxiosError(e) && e?.response?.status) {
    switch (e?.response.status) {
      case HttpStatusCode.badRequest:
        throw new BadRequestError(`BadRequestError: The ${serviceName} service return with ${e.message}`);

      case HttpStatusCode.notFound:
        throw new NotFoundError(`NotFoundError: The ${serviceName} service return with ${e.message}`);

      case HttpStatusCode.badGateway:
        throw new BadGatewayError(`BadGatewayError: The ${serviceName} service return with ${e.message}`);

      case HttpStatusCode.forbidden:
        throw new ForbiddenError(`ForbiddenError: The ${serviceName} service return with ${e.message}`);

      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialError(`InvalidCredentialError: The ${serviceName} service return with ${e.message}`);

      case HttpStatusCode.serverError:
        throw new ServerError(`ServerError: The ${serviceName} service return with ${e.message}`);

      default:
        throw new Error(`Unknown: ${e.message}`);
    }
  } else {
    throw e;
  } 
}
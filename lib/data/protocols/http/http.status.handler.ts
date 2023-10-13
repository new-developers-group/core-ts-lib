import { BadGatewayError, BadRequestError, ForbiddenError, InvalidCredentialError, NotFoundError } from '@/domain';
import { HttpResponse } from './http-response';
import { HttpStatusCode } from './http.status';

export abstract class HttpStatusHandler {
  protected whichHttpResponse(res: HttpResponse) {
    switch (res.code) {
      case HttpStatusCode.ok:
        return res.body;

      case HttpStatusCode.badRequest:
        throw new BadRequestError(res.body);

      case HttpStatusCode.notFound:
        throw new NotFoundError();

      case HttpStatusCode.badGateway:
        throw new BadGatewayError();

      case HttpStatusCode.forbidden:
        throw new ForbiddenError();

      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialError();
    }
  }
}
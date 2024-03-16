import { HttpException, HttpStatus } from '@nestjs/common';

import { ErrorCodes, ErrorCodesDictionary, ErrorCodesEnum } from '../constant';

export class BaseHttpException extends HttpException {
  code: ErrorCodesEnum;
  constructor(code: ErrorCodesEnum, statusCode: HttpStatus, message?: string) {
    message = message ?? ErrorCodesDictionary[code];
    super({ error: { message, code } }, statusCode);
    this.message = message;
    this.code = code;
  }
}

export class HTTPBadRequestException extends BaseHttpException {
  constructor(message?: string) {
    super(ErrorCodes.SYST_400, HttpStatus.BAD_REQUEST, message);
  }
}

export class HTTPUnauthorizeException extends BaseHttpException {
  constructor(message?: string) {
    super(ErrorCodes.SYST_401, HttpStatus.UNAUTHORIZED, message);
  }
}

export class HTTPForbiddenException extends BaseHttpException {
  constructor(message?: string) {
    super(ErrorCodes.SYST_403, HttpStatus.FORBIDDEN, message);
  }
}

export class HTTPNotFoundException extends BaseHttpException {
  constructor(message?: string) {
    super(ErrorCodes.SYST_404, HttpStatus.NOT_FOUND, message);
  }
}

export class HTTPServerInternalException extends BaseHttpException {
  constructor(message?: string) {
    super(ErrorCodes.SYST_500, HttpStatus.INTERNAL_SERVER_ERROR, message);
  }
}

export class HTTPServerUnavailableException extends BaseHttpException {
  constructor(message?: string) {
    super(ErrorCodes.SYST_503, HttpStatus.SERVICE_UNAVAILABLE, message);
  }
}

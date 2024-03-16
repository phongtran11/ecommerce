import { HttpStatus, Logger, ValidationPipe } from '@nestjs/common';

import { ErrorCodes, ErrorCodesEnum } from '../constant';
import { BaseHttpException, HTTPBadRequestException } from '../exception';

export class CustomValidationPipe extends ValidationPipe {
  #logger: Logger = new Logger(CustomValidationPipe.name);

  createExceptionFactory() {
    return (validationErrors = []) => {
      const errors = this.flattenValidationErrors(validationErrors);
      this.#logger.debug(errors);
      if (errors.length <= 0) {
        return new HTTPBadRequestException();
      }
      const code = errors[0] as ErrorCodesEnum;
      const isExistCode = Object.values(ErrorCodes).includes(code);
      if (isExistCode) {
        return new BaseHttpException(code, HttpStatus.BAD_REQUEST);
      }
      return new BaseHttpException(ErrorCodes.SYST_400, HttpStatus.BAD_REQUEST);
    };
  }
}

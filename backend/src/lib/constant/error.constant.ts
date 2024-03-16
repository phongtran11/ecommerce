export const ErrorCodesDictionary = {
  'syst.400': 'bad request',
  'syst.401': 'unauthorized',
  'syst.403': 'forbidden',
  'syst.404': 'not found',
  'syst.422': 'unprocessable content',
  'syst.500': 'internal server error',
  'syst.503': 'service unavailable',
} as const;

export const ErrorCodes = {
  SYST_400: 'syst.400',
  SYST_401: 'syst.401',
  SYST_403: 'syst.403',
  SYST_404: 'syst.404',
  SYST_422: 'syst.403',
  SYST_500: 'syst.500',
  SYST_503: 'syst.503',
} as const;

export type ErrorCodesEnum = (typeof ErrorCodes)[keyof typeof ErrorCodes];

import { ApiException, ServiceUnexpectedException } from '@/services/utils'
import axios from 'axios'
import { Err, err } from 'neverthrow'

import { ErrorCodes } from '@/services/constants'
import { GenericServiceException } from '@/services/exception'

export function handleError(error: any): Err<never, any> {
  switch (error.response?.status) {
    case 401:
      return err(
        GenericServiceException.create(
          ErrorCodes.GenericServiceUnauthorized,
          error.message
        )
      )
    case 404:
      return err(
        GenericServiceException.create(
          ErrorCodes.GenericServiceNotFound,
          error.message
        )
      )
    case 500:
      return err(
        GenericServiceException.create(
          ErrorCodes.GenericServiceInternalServerError,
          error.message
        )
      );
    default:
      if (axios.isAxiosError(error)) {
        return err(ApiException.create(error.message));
      }
      return err(ServiceUnexpectedException.create(error.message));
  }
}

import { Exception } from '@/services/utils'

export class GenericServiceException extends Exception {
  static create(
    code: string,
    message: string
  ): GenericServiceException {
    return new GenericServiceException(code, message)
  }
}

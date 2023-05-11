import { Exception } from "@mfe/react-utils";

export class GenericServiceException extends Exception {
  static create(
    code: string,
    message: string
  ): GenericServiceException {
    return new GenericServiceException(code, message);
  }
}

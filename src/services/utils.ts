export abstract class Exception {
  code: string;
  message: string;
  constructor(code: string, message: string) {
    this.code = code;
    this.message = message;
  }
}

export class ApiException extends Exception {
  private constructor(code: string, message: string) {
    super(code, message);
  }
  static create(message: string): ApiException {
    return new ApiException('API_ERROR', message);
  }
}

export class ServiceUnexpectedException extends Exception {
  private constructor(code: string, message: string) {
    super(code, message);
  }
  static create(message = 'Unexpected error'): ServiceUnexpectedException {
    return new ServiceUnexpectedException('UNEXPECTED_ERROR', message);
  }
}

export type Service<Request, Response> = {
  execute(request?: Request): Promise<Response> | Response;
}

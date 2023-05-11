declare abstract class Exception {
  code: string;
  message: string;
  constructor(code: string, message: string);
}

declare class ApiException extends Exception {
  private constructor();
  static create(message: string): ApiException;
}

interface Service<Request, Response> {
  execute(request?: Request): Promise<Response> | Response;
}
declare class ServiceUnexpectedException extends Exception {
  private constructor();
  static create(message?: string): ServiceUnexpectedException;
}

export { ApiException, Exception, type Service, ServiceUnexpectedException };

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  unAuthorized = 401,
  unExpectedError = 400,
  notFound = 404,
  serverError = 500,
}

export type HttpResponse<T> = {
  statusCode: HttpStatusCode
  body?: T
};

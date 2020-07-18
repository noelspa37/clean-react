export enum HttpStatusCode {
  noContent = 204,
  unAuthorized = 401,
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
};

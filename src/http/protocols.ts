export interface HttpRequest {
  body?: any
}

export interface HttpResponse {
  status: number
  data?: any
}

export interface BaseController {
  handle(httpRequest: HttpRequest): Promise<HttpResponse>
}

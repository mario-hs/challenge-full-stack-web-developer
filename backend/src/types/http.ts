interface HttpRequest {
  headers?: any;
  body?: any | unknown;
  params?: any;
  query?: any;
}

interface HttpResponse {
  body?: {
    code: number;
    error?: object;
    success?: object;
  };
  status: number;
}

export { HttpRequest, HttpResponse };

import { HttpResponse } from "../types/http";

const required = (message: any): HttpResponse => {
  let error: string;
  if (message.email) {
    error = "Required email";
  } else if (message.user_id) {
    error = "Required id";
  } else {
    error = "Required name";
  }

  return {
    status: 402,
    body: {
      code: 402,
      error: {
        message: error,
      },
    },
  };
};

const forbidden = (message: any): HttpResponse => {
  let error: string;
  if (message.email) {
    error = "Forbidden email";
  } else if (message.user_id) {
    error = "Forbidden id";
  } else {
    error = "Forbidden name";
  }

  return {
    status: 403,
    body: {
      code: 403,
      error: {
        message: error,
      },
    },
  };
};

const serverError = (): HttpResponse => {
  return {
    status: 500,
    body: {
      code: 500,
      error: {
        message: "Error server",
      },
    },
  };
};

const notFound = (): HttpResponse => {
  return {
    status: 404,
    body: {
      code: 404,
      error: {
        message: "Not Found id",
      },
    },
  };
};

export { required, forbidden, serverError, notFound };

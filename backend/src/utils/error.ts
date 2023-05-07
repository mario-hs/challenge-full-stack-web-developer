import { Response } from "express";

const errorHandling = (code: number, message: string, res: Response) => {
  return res.status(code).json({
    status: code,
    message: message,
  });
};

export { errorHandling };

import { Request, Response } from "express";

const verify = async (req: Request, res: Response, next: any) => {
  const body = {
    code: 200,
    message: "Você está autenticado",
  };
  res.status(200).json(body);
};

export { verify };

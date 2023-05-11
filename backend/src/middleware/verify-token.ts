import jwt from "jsonwebtoken";
import { envConfig } from "../config/env";
import { Request, Response } from "express";
import { errorHandling } from "../utils/error";

const verifyToken = (req: Request, res: Response, next: any) => {
  try {
    let accessToken = "";
    if (req.headers.authorization === undefined) {
      accessToken = req.body.headers.authorization.split(" ")[1];
    } else {
      accessToken = req.headers.authorization?.split(" ")[1];
    }
    if (!accessToken) {
      return errorHandling(401, "Você não está autenticado", res);
    }
    jwt.verify(accessToken, envConfig.getJwtSecret());
    next();
  } catch (error) {
    return errorHandling(401, "Você não está autenticado", res);
  }
};

export { verifyToken };

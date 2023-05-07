import jwt from "jsonwebtoken";
import { envConfig } from "../config/env";
import { Request, Response } from "express";
import { errorHandling } from "../utils/error";

const verifyToken = (req: Request, res: Response, next: any) => {
  try {
    const accessToken = req.headers.authorization?.split(" ")[1];

    if (!accessToken) {
      return errorHandling(401, "Você não está autenticado", res); //res.status(401).json("Você não está autenticado.");
    }
    jwt.verify(accessToken, envConfig.getJwtSecret());
    next();
  } catch (error) {
    next(error);
  }
};

export { verifyToken };

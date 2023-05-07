import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import Admin from "../../model/admin-model";
import { forbidden, required } from "../../helpers/helpers";
import { HttpResponse } from "../../types/http";
import { envConfig } from "../../config/env";
import { errorHandling } from "../../utils/error";

const auth = async (req: Request, res: Response, next: any) => {
  // const user = new Admin(req.body);
  try {
    const user = await Admin.findOne({ email: req.body.email });
    if (!user) {
      return errorHandling(404, "User não encontrado.", res);
    }
    const passwordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordValid) {
      return errorHandling(401, "Senha inválida", res);
    }
    const { _id, email, name } = user;
    const accessToken = jwt.sign({ id: user._id }, envConfig.getJwtSecret(), {
      expiresIn: "1h",
    });
    res.status(200).json({ id: _id, email, name, accessToken });
  } catch (error: any) {
    let newError: HttpResponse;
    if (error.code) {
      newError = forbidden(error.keyValue);
    } else {
      newError = required(error.errors);
    }
    res.status(newError.status).json(newError.body);
  }
};

export { auth };

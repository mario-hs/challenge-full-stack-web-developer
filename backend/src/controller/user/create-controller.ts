import { Request, Response } from "express";

import User from "../../model/user-model";
import { forbidden, required } from "../../helpers/helpers";
import { HttpResponse } from "../../types/http";

const createUser = async (req: Request, res: Response) => {
  const user = new User(req.body);
  try {
    const createdUser = await user.save();
    res.status(201).json(createdUser);
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

export { createUser };

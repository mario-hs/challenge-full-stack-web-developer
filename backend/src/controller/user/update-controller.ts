import { Request, Response } from "express";

import User from "../../model/user-model";
import { forbidden, serverError } from "../../helpers/helpers";
import { HttpResponse } from "../../types/http";

const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error: any) {
    let newError: HttpResponse;
    if (error.codeName) {
      newError = forbidden(error.keyValue);
    } else {
      newError = serverError();
    }
    res.status(newError.status).json(newError.body);
  }
};

export { updateUser };

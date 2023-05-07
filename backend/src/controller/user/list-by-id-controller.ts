import { Request, Response } from "express";

import User from "../../model/user-model";
import { notFound } from "../../helpers/helpers";

const listUserById = async (req: Request, res: Response) => {
  try {
    const userById = await User.findById(req.params.id);
    const body = {
      code: 200,
      users: userById,
    };
    res.status(200).json(body);
  } catch (error) {
    const newError = notFound();
    res.status(newError.status).json(newError.body);
  }
};

export { listUserById };

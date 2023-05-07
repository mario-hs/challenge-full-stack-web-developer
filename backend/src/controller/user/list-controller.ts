import { Request, Response } from "express";

import User from "../../model/user-model";

const listUser = async (req: Request, res: Response, next: any) => {
  try {
    const users = await User.find();
    const body = {
      code: 200,
      users: users,
    };
    res.status(200).json(body);
  } catch (error) {
    next(error);
  }
};
export { listUser };

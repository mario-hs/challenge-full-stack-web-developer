import { Request, Response } from "express";

import User from "../../model/user-model";
import { notFound } from "../../helpers/helpers";
import { HttpResponse } from "../../types/http";

const deleteUser = async (req: Request, res: Response) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    const body = {
      code: 200,
      message: "User excluído com sucesso.",
    };
    res.status(200).json(body);
  } catch (error) {
    const newError = notFound();
    res.status(newError.status).json(newError.body);
  }
};
export { deleteUser };

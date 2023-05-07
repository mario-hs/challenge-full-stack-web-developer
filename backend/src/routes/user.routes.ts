import { Router } from "express";
import { createUser } from "../controller/user/create-controller";
import { deleteUser } from "../controller/user/delete-controller";
import { updateUser } from "../controller/user/update-controller";
import { listUser } from "../controller/user/list-controller";
import { listUserById } from "../controller/user/list-by-id-controller";

const router = Router();

router.post("/", createUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);
router.get("/", listUser);
router.get("/:id", listUserById);

export { router };

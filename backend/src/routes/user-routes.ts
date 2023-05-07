import { Router } from "express";
import { createUser } from "../controller/user/create-controller";
import { deleteUser } from "../controller/user/delete-controller";
import { updateUser } from "../controller/user/update-controller";
import { listUser } from "../controller/user/list-controller";
import { listUserById } from "../controller/user/list-by-id-controller";
import { verifyToken } from "../middleware/verify-token";

const router = Router();

router.post("/", verifyToken, createUser);
router.delete("/:id", verifyToken, deleteUser);
router.put("/:id", verifyToken, updateUser);
router.get("/", verifyToken, listUser);
router.get("/:id", verifyToken, listUserById);

export { router };

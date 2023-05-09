import { Router } from "express";
import { auth } from "../controller/auth/auth-controller";
import { verifyToken } from "../middleware/verify-token";
import { verify } from "../controller/auth/verify-controller";

const router = Router();

router.post("/", auth);
router.get("/verify-token", verifyToken, verify);

export { router };

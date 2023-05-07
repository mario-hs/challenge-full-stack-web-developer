import { Router } from "express";
import { auth } from "../controller/auth/auth-controller";

const router = Router();

router.post("/", auth);

export { router };

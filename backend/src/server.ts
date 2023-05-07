import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { router as routerUser } from "./routes/user-routes";
import { router as routerAuth } from "./routes/auth-routes";
import { connectDataBase } from "./config/database-config";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", routerUser);
app.use("/api/auth", routerAuth);

app.listen(8080, async () => {
  try {
    await connectDataBase();
    console.log("Sevidor rodando na porta 8080");
  } catch (e) {
    console.log(e);
  }
});

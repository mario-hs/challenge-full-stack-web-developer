import mongoose from "mongoose";
import { envConfig } from "./env";
import bcrypt from "bcryptjs";
import Admin from "../model/admin-model";

const connectDataBase = async () => {
  try {
    await mongoose.connect(envConfig.getUrlMongo());
  } catch (error) {
    throw error;
  }
};

const insertAdmin = async () => {
  const admin = {
    name: "admin",
    email: "admin@admin.com",
    password: await bcrypt.hash("123456", 10),
  };

  if ((await Admin.countDocuments({})) === 0) {
    await Admin.create(admin);
    console.log("Admin inseridos com sucesso.");
  }
};

mongoose.set("strictQuery", true);

mongoose.connection.on("disconnected", () => {
  console.log("Desconectado do MongoDB.");
});

mongoose.connection.on("connected", () => {
  insertAdmin();
  console.log("Conectado ao MongoDB.");
});

mongoose.connection.on("error", (error) => {
  console.log(`Erro no MongoDB:\n${error}`);
});

export { connectDataBase };

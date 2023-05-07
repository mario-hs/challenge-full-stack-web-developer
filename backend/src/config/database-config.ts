import mongoose from "mongoose";
import { envConfig } from "./env";

const connectDataBase = async () => {
  try {
    await mongoose.connect(envConfig.getUrlMongo());
  } catch (error) {
    throw error;
  }
};

mongoose.set("strictQuery", true);

mongoose.connection.on("disconnected", () => {
  console.log("Desconectado do MongoDB.");
});

mongoose.connection.on("connected", () => {
  console.log("Conectado ao MongoDB.");
});

mongoose.connection.on("error", (error) => {
  console.log(`Erro no MongoDB:\n${error}`);
});

export { connectDataBase };

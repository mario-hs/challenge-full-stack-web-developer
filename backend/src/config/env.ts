import * as dotenv from "dotenv";

dotenv.config();

class envConfig {
  // AMBIENT
  public static getApiAmbient(): string {
    return process.env.API_AMBIENT || "";
  }
  public static getUrlMongo(): string {
    return process.env.MONGO_URL || "";
  }
}

export { envConfig };

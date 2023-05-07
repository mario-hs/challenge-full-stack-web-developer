import * as dotenv from "dotenv";

dotenv.config();

class envConfig {
  public static getApiAmbient(): string {
    return process.env.API_AMBIENT || "";
  }
  public static getUrlMongo(): string {
    return process.env.MONGO_URL || "";
  }

  public static getJwtSecret(): string {
    return process.env.JWT_SECRET || "";
  }
}

export { envConfig };

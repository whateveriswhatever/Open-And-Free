import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Loading environment variables from .env file
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST as string,
    dialect: process.env.DB_DIALECT as "postgres",
  }
);

export default sequelize;

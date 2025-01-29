// src/index.ts
import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes";
import sequelize from "./config/database";
import User from "./models/userModel";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/auth", authRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((error) => {
    console.error("Unable to create the database:", error);
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

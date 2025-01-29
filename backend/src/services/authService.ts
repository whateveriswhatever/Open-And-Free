// src/services/authService.ts
import User from "../models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = "your_jwt_secret";

export const registerUser = async (
  username: string,
  password: string,
  email: string
): Promise<User | null> => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      password: hashedPassword,
      email,
    });
    return newUser;
  } catch (error) {
    console.error("Error registering user:", error);
    return null;
  }
};

export const loginUser = async (
  username: string,
  password: string
): Promise<string | null> => {
  try {
    const user = await User.findOne({ where: { username } });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { id: user.id, username: user.username },
        JWT_SECRET,
        { expiresIn: "1h" }
      );
      return token;
    }
    return null;
  } catch (error) {
    console.error("Error logging in:", error);
    return null;
  }
};

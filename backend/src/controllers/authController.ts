// src/controllers/authController.ts
import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/authService";

export const register = async (req: Request, res: Response) => {
  const { username, password, email } = req.body;
  try {
    const newUser = await registerUser(username, password, email);
    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const token = await loginUser(username, password);
    if (token) {
      res.status(200).json({ message: "Login successful", token });
    } else {
      res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
};

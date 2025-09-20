import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createUser, findUserByEmail } from "../models/User.js";

export const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await findUserByEmail(email);
    if (existingUser) return res.status(400).json({ error: "User exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser(email, hashedPassword);
    res.json({ message: "User created", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

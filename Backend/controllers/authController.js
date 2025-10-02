import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../config/prisma.js";

// Generate JWT
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// ✅ Signup
export const signup = async (req, res) => {
  const { name, email, phone, dob, bvn, password } = req.body;

  try {
    // Check if user exists
    const userExists = await prisma.user.findUnique({
      where: { email },
    });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        dob: new Date(dob),
        bvn,
        password: hashedPassword,
      },
    });

    const token = generateToken(newUser.id);

    res.status(201).json({
      user: newUser,
      token,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Login
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user.id);

    res.json({
      user,
      token,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Forgot Password (simple)
export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Normally: send email with reset link
    res.json({ message: "Password reset link sent to your email (mocked)" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Google Auth (placeholder)
export const googleAuth = async (req, res) => {
  // Here you’ll integrate Google OAuth later
  res.json({ message: "Google sign-in coming soon 🚀" });
};

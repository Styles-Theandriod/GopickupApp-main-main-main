import pool from "../config/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Generate JWT
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// ✅ Signup
export const signup = async (req, res) => {
  const { name, email, phone, dob, bvn, password } = req.body;

  try {
    // Check if user exists
    const userExists = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert user
    const newUser = await pool.query(
      "INSERT INTO users (name, email, phone, dob, bvn, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, email, phone, dob, bvn, hashedPassword]
    );

    const token = generateToken(newUser.rows[0].id);

    res.status(201).json({
      user: newUser.rows[0],
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
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

    if (user.rows.length === 0) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user.rows[0].id);

    res.json({
      user: user.rows[0],
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
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

    if (user.rows.length === 0) {
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

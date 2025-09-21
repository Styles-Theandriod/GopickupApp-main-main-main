import express from "express";
import { signup, login, forgotPassword, googleAuth } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/google", googleAuth); // placeholder

export default router;

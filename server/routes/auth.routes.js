import express from "express";
import {
  register,
  login,
  logout,
  profile,
  verifyToken,
  verifySession,
} from "../controllers/auth.controller.js";

import { authRequired } from "../middlewares/validateToken.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";
import { validateSchema } from "../middlewares/validation.middleware.js";

const router = express.Router();

router.get("/verifySession", verifySession);
router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/verify", verifyToken);
router.get("/profile", authRequired, profile);

export default router;

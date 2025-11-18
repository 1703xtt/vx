//>>>VX

import express from "express";
import { loginController } from "../controllers/auth.controller.js";

const router = express.Router();

// POST /auth/login --> GENERA EL TOKEN SI LAS CREDENCIALES SON VALIDAS
router.post("/login", loginController);

export default router;

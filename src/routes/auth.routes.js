//>>>VX

import express from "express";
import { loginController } from "../controllers/auth.controller.js"; 

const router = express.Router();

// POST /auth/login → DEVUELVE TOKEN JWT SI LAS CREDENCIALES SON VÁLIDAS
router.post("/login", loginController);

export default router;


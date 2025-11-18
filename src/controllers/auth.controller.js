//>>>VX

import jwt from "jsonwebtoken";

export const loginController = (req, res) => {
  const { email, password } = req.body;

  // VALIDACION BASICA
  if (!email || !password) {
    return res.status(400).json({ error: "Email y contraseña son requeridos" });
  }

  // VALIDACION HARDCODEADA
  if (email === "test@gmail.com" && password === "123456") {
    const token = jwt.sign(
      { email }, 
      process.env.JWT_SECRET || "secreto123", 
      { expiresIn: "1h" }
    );
    return res.json({ token });
  }

  return res.status(401).json({ error: "Credenciales inválidas" });
};

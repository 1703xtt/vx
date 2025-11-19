//>>>VX
import dotenv from "dotenv";

dotenv.config({ silent: true });

import express from "express";
import cors from "cors";
import rutasProductos from "./src/routes/products.routes.js";
import authRoutes from "./src/routes/auth.routes.js";

// MIDDLEWARES
import { logger } from "./src/middlewares/logger.js";
import { notFound } from "./src/middlewares/notFound.js";
import { errorHandler } from "./src/middlewares/errorHandler.js";

const app = express();
const PORT = process.env.PORT || 3000;

const corsConfig = {
  origin: ["http://localhost:3000", "https://midominio.com"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsConfig));
app.use(express.json());
app.use(logger);

// RUTAS PRINCIPALES
app.use("/api", rutasProductos);
app.use("/auth", authRoutes);

//ENTRAS https://vx-j91p0cl8b-1703xtts-projects.vercel.app --> REDIRIGE auth/login

app.get("/", (req, res) => {
  res.redirect("/auth/login");
});

// RUTAS NO ENCONTRADAS
app.use(notFound);

// MANEJO GLOBAL DE ERRORES
app.use(errorHandler);
/*
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
*/

// Solo levantar servidor en local
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}

// Exportar para Vercel
export default app;

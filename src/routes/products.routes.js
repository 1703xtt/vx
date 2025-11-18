//>>>VX

import express from "express";
import {
  getProductos,
  getProducto,
  postProducto,
  putProducto,
  deleteProducto,
} from "../controllers/products.controllers.js"; 

import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

// AUTENTICACION A TODAS LAS RUTAS
router.use(authMiddleware);

// RUTAS DE PRODUCTOS
router.get("/products", getProductos);
router.get("/products/:docId", getProducto);
router.post("/products/create", postProducto);
router.put("/products/:docId", putProducto);
router.delete("/products/:docId", deleteProducto);

export default router;

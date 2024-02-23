import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/products.controller.js";

const router = Router();

router.post("/", authRequired, createProduct);
router.get("/:id", authRequired, getProduct);
router.get("/", authRequired, getProducts);
router.delete("/:id", authRequired, deleteProduct);
router.put("/:id", authRequired, updateProduct);

export default router;

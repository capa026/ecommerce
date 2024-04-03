import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  createShopingCart,
  updateShopingCart,
  getShoppingCart,
  deleteShopingCart,
} from "../controllers/products.controller.js";

const router = Router();

router.get("/", authRequired, getShoppingCart);
router.post("/", authRequired, createShopingCart);
router.put("/", authRequired, updateShopingCart);
router.delete("/", authRequired, deleteShopingCart);

export default router;

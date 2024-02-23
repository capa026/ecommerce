import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.get("/products", authRequired);
// router.get("/products/:id", authRequired);
// router.post("/products", authRequired);
// router.delete("/products/:id", authRequired);
// router.put("/products/:id", authRequired);

export default router;

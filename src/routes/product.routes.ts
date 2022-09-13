import Router from "express-promise-router";
import {
  createProductHandler,
  deleteProductHandler,
  getProductHandler,
  getProductsHandler,
  updateProductHandler,
} from "../controllers/posts.controllers";

const router = Router();

router.get("/products", getProductsHandler);
router.post("/products", createProductHandler);
router.delete("/products", deleteProductHandler);
router.put("/products", updateProductHandler);
router.put("/products", getProductHandler);

export default router;

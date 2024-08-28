//// @ts-nocheck
import { Router } from "express";
import { handleInputErrors } from "./modules/middleware";
import { body, oneOf } from "express-validator";
import { getProduct, getProducts, createProduct, updateProduct, deleteProduct } from "./handlers/products";

const router = Router();
/**
 * Product
 */
router.get("/product", getProducts);

router.get("/product/:id", getProduct);

router.post("/product", body('name').isString(), handleInputErrors, createProduct);

router.put("/product/:id", body('name').isString(), handleInputErrors, updateProduct);

router.delete("/product/:id", deleteProduct);

/**
 * Update
 */

router.get("/update", (req, res) => {});

router.get("/update/:id", (req, res) => {});

router.post("/update",
  body('body').exists().isString(),
  body('title').exists().isString(),
() => {}
);

router.put("/update/:id",
  body('title').optional(),
  body('body').exists().isString(),
  body('status').isIn(['IN_PROGRESS', 'SHIPPED','DEPRECATED']),
  body('version').optional(),
  () => {}
);

router.delete("/update/:id", (req, res) => {});

/**
 * UpdatePoint
 */

router.get("/updatepoint", (req, res) => {});

router.get("/updatepoint/:id", (req, res) => {});

router.post("/updatepoint",
  body('name').exists().isString(),
  body('description').isString(),
  body('updateId').exists().isString(),
  () => {}
);

router.put("/updatepoint/:id",
  body('name').optional().isString(),
  body('description').optional().isString(),
  () => {}
);

router.delete("/updatepoint/:id", (req, res) => {});

export default router;
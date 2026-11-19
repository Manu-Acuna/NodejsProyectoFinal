import {Router} from 'express';
import {getProducts} from '../controller/products-controller.js';
import {getProductById} from '../controller/products-controller.js';
import {createProduct} from '../controller/products-controller.js';
import {deleteProduct} from '../controller/products-controller.js'

const router = Router();

router.get("/", getProducts);

router.get("/:id", getProductById);

router.post("/", createProduct);

router.delete("/:id", deleteProduct);

export default router;
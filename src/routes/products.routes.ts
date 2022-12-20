import {Router} from 'express';
import { createProduct, getProducts, getProduct, updateProduct, deleteProduct } from '../controllers/product.controller';
const router = Router();

router.post('/api/products', createProduct)
router.get('/api/products', getProducts)
router.get('/api/products/:id', getProduct)
router.put('/api/products/:id', updateProduct)
router.delete('/api/products/:id', deleteProduct)


export default router
import {Router} from 'express';
import { createRol, getRoles, getRol, updateRol, deleteRol } from '../controllers/rol.controller';
const router = Router();

router.post('/api/products', createRol)
router.get('/api/products', getRoles)
router.get('/api/products/:id', getRol)
router.put('/api/products/:id', updateRol)
router.delete('/api/products/:id', deleteRol)


export default router
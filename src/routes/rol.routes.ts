import {Router} from 'express';
import { createRol, getRoles, getRol, updateRol, deleteRol } from '../controllers/rol.controller';
const router = Router();

router.post('/api/roles', createRol)
router.get('/api/roles', getRoles)
router.get('/api/roles/:id', getRol)
router.put('/api/roles/:id', updateRol)
router.delete('/api/roles/:id', deleteRol)


export default router
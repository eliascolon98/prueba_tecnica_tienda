import {Router} from 'express';
import { createSale, getSales, getSale, updateSale, deleteSale, getSalesDay } from '../controllers/sale.controller';
const router = Router();

router.post('/api/sales', createSale);
router.get('/api/sales', getSales);
router.get('/api/sales/:id', getSale);
router.get('/api/salesday', getSalesDay);
router.put('/api/sales/:id', updateSale);
router.delete('/api/sales/:id', deleteSale);


export default router
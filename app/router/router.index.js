// EXTERNAL MODULES
import { Router } from 'express';

// INTERNAL MODULES
import invoiceRouter from './invoice.router.js';


const router = Router();

router.get('/', (req, res) => {
  res.send('on root site');
})

router.use('/invoice', invoiceRouter);

export default router;
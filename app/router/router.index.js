// EXTERNAL MODULES
import { Router } from 'express';

// INTERNAL MODULES
import invoiceRouter from './invoice.router.js';
import orderRouter from './order.router.js';


const router = Router();

router.get('/', (req, res) => {
  res.send('on root site');
})

router.use('/invoice', invoiceRouter);
router.use('/order', orderRouter);

// -> Handler error middleware
router.use((error, req, res, next) => {
  let { message, status, name } = error;
  // console.log(error);
  console.log(status, name, message);

  switch (name) {
    case "ValidationError":
      status = 404;
      message = 'Bad request. Invalid value.'
    break;
      
    case "BadRequest":
      status = 404;
    break;
        
    default:
      status = 404;
      message = 'Bad request. Invalid value.'
    break;
  }


  res.status(status).json({error: message});

})

export default router;
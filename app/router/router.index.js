// EXTERNAL MODULES
import { Router } from 'express';

// INTERNAL MODULES
import invoiceRouter from './invoice.router.js';


const router = Router();

router.get('/', (req, res) => {
  res.send('on root site');
})

router.use('/invoice', invoiceRouter);

// -> Handler error middleware
router.use((error, req, res, next) => {
  let { message, status, name } = error;
  // console.log(error);
  console.log(status, name, message);


  if(name === "ValidationError") {
    status = 404;
    message = 'Bad request. Invalid value.'
  }

  res.status(status).json({error: message});

})

export default router;
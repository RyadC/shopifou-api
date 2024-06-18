// EXTERNAL MODULES
import { Router } from 'express';

// INTERNAL MODULES
import apiRouter from './api/api.router.js';
import websiteRouter from './website/website.router.js';
import { configDotenv } from 'dotenv';


const router = Router();

router.use('/', websiteRouter);
router.use('/api', apiRouter);




// -> Handler error middleware
router.use((error, req, res, next) => {
  let { message, status, name, code } = error;
  console.log(status, name, message);
  console.log(error);

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

  switch (code) {
    case '23503':
      status = 403;
      message = 'Request forbidden. This element is attached to an other element'
      break;
  
    default:
      break;
  }


  res.status(status).json({error: message});

})

export default router;
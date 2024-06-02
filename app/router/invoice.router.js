// EXTERNAL MODULES
import { Router } from 'express';

// INTERNAL MODULES
import invoiceController from '../controller/invoice.controller.js';
import catchHandlerController from '../libraries/catchController.handler.js';


const invoiceRouter = Router();

invoiceRouter
  // TODO : Add the validation schema
  .get('/', catchHandlerController(invoiceController.index))
  .post('/', invoiceController.store)
  // -> On donne le contexte à la fonction pour récupérer la variable RADIX_PARSEINT à travers le this
  .patch('/:id(\\d+)', invoiceController.update.bind(invoiceController))
  .delete('/:id(\\d+)', invoiceController.destroy.bind(invoiceController));

export default invoiceRouter;
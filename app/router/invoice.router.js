// EXTERNAL MODULES
import { Router } from 'express';

// INTERNAL MODULES
import invoiceController from '../controller/invoice.controller.js';
import catchHandlerController from '../libraries/catchController.handler.js';
import validationSchema from '../schema/validation.schema.js';
import invoiceStoreSchema from '../schema/invoice/invoice.store.schema.js';
import invoiceIndexSchema from '../schema/invoice/invoice.index.schema.js';
import invoiceUpdateSchema from '../schema/invoice/invoice.update.schema.js';
import invoiceDestroySchema from '../schema/invoice/invoice.destroy.schema.js';


const invoiceRouter = Router();

invoiceRouter
  .get('/', validationSchema(invoiceIndexSchema, 'params'), catchHandlerController(invoiceController.index))
  .post('/', validationSchema(invoiceStoreSchema, 'body'), invoiceController.store)
  // -> On donne le contexte à la fonction pour récupérer la variable RADIX_PARSEINT à travers le this
  .patch('/:id(\\d+)', validationSchema(invoiceUpdateSchema, 'body'), invoiceController.update.bind(invoiceController))
  .delete('/:id(\\d+)', validationSchema(invoiceDestroySchema, 'params'), invoiceController.destroy.bind(invoiceController));

export default invoiceRouter;
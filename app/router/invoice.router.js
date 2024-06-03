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
import invoiceShowSchema from '../schema/invoice/invoice.show.schema.js';


const invoiceRouter = Router();

invoiceRouter.route('/')
  .get(validationSchema(invoiceIndexSchema, ['params']), catchHandlerController(invoiceController.index))
  .post(validationSchema(invoiceStoreSchema, ['body']), invoiceController.store);
  
invoiceRouter.route('/:id(\\d+)')
// -> On donne le contexte à la fonction pour récupérer la propriété RADIX_PARSEINT à travers le this de la méthode
  .get(validationSchema(invoiceShowSchema, ['params']), invoiceController.show.bind(invoiceController))
  .patch(validationSchema(invoiceUpdateSchema, ['body','params']), invoiceController.update.bind(invoiceController))
  .delete(validationSchema(invoiceDestroySchema, ['params']), invoiceController.destroy.bind(invoiceController));

export default invoiceRouter;
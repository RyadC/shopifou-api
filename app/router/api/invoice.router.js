// EXTERNAL MODULES
import { Router } from 'express';

// INTERNAL MODULES
import invoiceController from '../../controller/api/invoice.controller.js';
import catchHandlerController from '../../libraries/catchController.handler.js';
import validationSchema from '../../schema/validation.schema.js';
import invoiceStoreSchema from '../../schema/invoice/invoice.store.schema.js';
import invoiceIndexSchema from '../../schema/invoice/invoice.index.schema.js';
import invoiceUpdateSchema from '../../schema/invoice/invoice.update.schema.js';
import invoiceDestroySchema from '../../schema/invoice/invoice.destroy.schema.js';
import invoiceShowSchema from '../../schema/invoice/invoice.show.schema.js';


const invoiceRouter = Router();

invoiceRouter.route('/')
  /**
     * GET /api/invoice
     * @summary Get all invoices
     * @tags Invoice
     * @return {[GetInvoice]} 200 - Success response - application/json
  */
  .get(validationSchema(invoiceIndexSchema, ['params']), catchHandlerController(invoiceController.index))

  /**
     * POST /api/invoice
     * @summary Create an invoice
     * @tags Invoice
     * @param {PostInvoice} request.body.required - Invoice infos
     * @return {[GetInvoice]} 201 - Success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Invoice not found - application/json
  */
  .post(validationSchema(invoiceStoreSchema, ['body']), invoiceController.store);
  

invoiceRouter.route('/:id(\\d+)')
// -> On donne le contexte à la fonction pour récupérer la propriété RADIX_PARSEINT à travers le this de la méthode
  /**
     * GET /api/invoice/{id}
     * @summary Get one invoice
     * @tags Invoice
     * @param {number} id.path.required - invoice ID to be returned
     * @return {[GetInvoice]} 200 - Success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Invoice not found - application/json
  */
  .get(validationSchema(invoiceShowSchema, ['params']), invoiceController.show.bind(invoiceController))

  /**
     * PATCH /api/invoice/{id}
     * @summary Update one invoice
     * @tags Invoice
     * @param {number} id.path.required - invoice ID to be updated
     * @param {PatchInvoice} request.body.required - Invoice infos
     * @return {[GetInvoice]} 200 - Success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Invoice not found - application/json
  */
  .patch(validationSchema(invoiceUpdateSchema, ['body','params']), invoiceController.update.bind(invoiceController))

  /**
     * DELETE /api/invoice/{id}
     * @summary Delete one invoice
     * @tags Invoice
     * @param {number} id.path.required - invoice ID to be deleted
     * @return {object} 200 - Success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Invoice not found - application/json
  */
  .delete(validationSchema(invoiceDestroySchema, ['params']), invoiceController.destroy.bind(invoiceController));

export default invoiceRouter;
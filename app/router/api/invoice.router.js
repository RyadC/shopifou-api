// EXTERNAL MODULES
import { Router } from 'express';

// INTERNAL MODULES
   // Controller
import Controller from '../../controller/api/controller.js';
   // Datamapper
import invoiceDatamapper from '../../model/invoice.datamapper.js';
   // Errors handler
import catchHandlerController from '../../libraries/catchController.handler.js';
   // Schemas 
import validationSchema from '../../schema-validation/validation.schema.js';
import updateSchema from '../../schema-validation/update.schema.js';
import paramIdSchema from '../../schema-validation/paramId.schema.js';
import invoiceShowSchema from '../../schema-validation/invoice/invoice.show.schema.js';
import invoiceStoreSchema from '../../schema-validation/invoice/invoice.store.schema.js';
import invoiceUpdateSchema from '../../schema-validation/invoice/invoice.update.schema.js';
import invoiceDestroySchema from '../../schema-validation/invoice/invoice.destroy.schema.js';
import invoiceShowCustomerSchema from '../../schema-validation/invoice/invoice.showCustomer.schema.js';

/* --------------------------------------------------------------------------- */

const invoiceRouter = Router();

const InvoiceController = new Controller(invoiceDatamapper);


invoiceRouter.route('/')
  /**
     * GET /api/invoice
     * @summary Get all invoices
     * @tags Invoice
     * @return {[GetInvoice]} 200 - Success response - application/json
  */
  .get(catchHandlerController(InvoiceController.index))

  /**
     * POST /api/invoice
     * @summary Create an invoice
     * @tags Invoice
     * @param {PostInvoice} request.body.required - Invoice infos
     * @return {[GetInvoice]} 201 - Success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Invoice not found - application/json
  */
  .post(validationSchema(invoiceStoreSchema, ['body']), InvoiceController.store);
  

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
  .get(validationSchema(invoiceShowSchema, ['params']), InvoiceController.show())

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
  .patch(validationSchema(updateSchema(paramIdSchema, invoiceUpdateSchema), ['body','params'], 'update'), InvoiceController.update)

  /**
     * DELETE /api/invoice/{id}
     * @summary Delete one invoice
     * @tags Invoice
     * @param {number} id.path.required - invoice ID to be deleted
     * @return {object} 200 - Success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Invoice not found - application/json
  */
  .delete(validationSchema(invoiceDestroySchema, ['params']), InvoiceController.destroy);

invoiceRouter.route('/customer/:id(\\d+)')
   /**
    * GET /api/invoice/customer/{id}
    * @summary Get an invoice by customer
    * @tags Invoice
    * @param {number} id.path.requied - customer ID to have their invoices
    * @return {[GetInvoiceByCustomer]} 200 - Success request - application/json
    * @return {ApiError} 400 - Bad request - application/json
    * @return {ApiError} 404 - Customer not found - application/json
    */
   .get(validationSchema(invoiceShowCustomerSchema, ['params']), InvoiceController.show('Customer'))

export default invoiceRouter;
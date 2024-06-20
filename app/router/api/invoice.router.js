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
     * @return {array<GetInvoice>} 200 - Success response - application/json
     * @example response - 200 - example success response
     *{
     *  "data": [
     *    {
     *      "invoice_id": 2,
     *      "reference": "INV_4549",
     *      "date": "2024-06-02T06:33:57.160Z",
     *      "total_value": "27.05",
     *      "customer_id": 2,
     *      "order_id": 2,
     *      "created_at": "2024-06-02T06:33:57.160Z",
     *      "updated_at": null
     *    },
     *    {
     *      "invoice_id": 14,
     *      "reference": "INV_0002",
     *      "date": "2024-06-03T13:11:21.040Z",
     *      "total_value": "25.89",
     *      "customer_id": 2,
     *      "order_id": 4,
     *      "created_at": "2024-06-03T13:11:21.040Z",
     *      "updated_at": "2024-06-03T15:48:51.206Z"
     *    },
     *    {
     *      "invoice_id": 19,
     *      "reference": "INV_0078",
     *      "date": "2024-06-18T09:26:34.112Z",
     *      "total_value": "178.48",
     *      "customer_id": 1,
     *      "order_id": 4,
     *      "created_at": "2024-06-18T09:26:34.112Z",
     *      "updated_at": null
     *    },
     *    {
     *      "invoice_id": 1,
     *      "reference": "INV_4578",
     *      "date": "2024-06-02T06:33:57.160Z",
     *      "total_value": "45.25",
     *      "customer_id": 1,
     *      "order_id": 1,
     *      "created_at": "2024-06-02T06:33:57.160Z",
     *      "updated_at": "2024-06-18T11:03:15.490Z"
     *    }
     *  ]
     *}
  */
  .get(catchHandlerController(InvoiceController.index))

  /**
     * POST /api/invoice
     * @summary Create an invoice
     * @tags Invoice
     * @param {PostInvoice} request.body.required - Invoice infos
     * @return {array<GetInvoice>} 201 - Success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Invoice not found - application/json
     * @example request - example payload
     * {
     * "reference": "INV_0099",
     * "total_value": 178.48,
     * "customer_id": 1,
     * "order_id": 4
     * }
     * @example response - 201 - example success response
     * {
     *   "data": [
     *     {
     *       "invoice_id": 21,
     *       "reference": "INV_0099",
     *       "date": "2024-06-18T14:33:34.718Z",
     *       "total_value": "178.48",
     *       "customer_id": 1,
     *       "order_id": 4,
     *       "created_at": "2024-06-18T14:33:34.718Z",
     *       "updated_at": null
     *     }
     *   ]
     * }
     * @example response - 400 - example 400 response
     * {
     * "error": "Bad request. Invalid value"
     * }
     * @example response - 404 - example 404 response
     * {
     * "error": "Bad request. The provided id don't exist"
     * }
  */
  .post(validationSchema(invoiceStoreSchema, ['body']), InvoiceController.store);
  

invoiceRouter.route('/:id(\\d+)')
// -> On donne le contexte à la fonction pour récupérer la propriété RADIX_PARSEINT à travers le this de la méthode
  /**
     * GET /api/invoice/{id}
     * @summary Get one invoice
     * @tags Invoice
     * @param {number} id.path.required - invoice ID to be returned
     * @return {array<GetInvoice>} 200 - Success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Invoice not found - application/json
     * @example response - 200 - example success response
     *{
     *  "data": [
     *    {
     *      "invoice_id": 1,
     *      "reference": "INV_4578",
     *      "date": "2024-06-02T06:33:57.160Z",
     *      "total_value": "45.25",
     *      "customer_id": 1,
     *      "order_id": 1,
     *      "created_at": "2024-06-02T06:33:57.160Z",
     *      "updated_at": "2024-06-18T14:31:43.205Z"
     *    }
     *  ]
     *}
     * @example response - 400 - example 400 response
     * {
     * "error": "Bad request. Invalid value"
     * }
     * @example response - 404 - example 404 response
     * {
     * "error": "Bad request. The provided id don't exist"
     * }
  */
  .get(validationSchema(invoiceShowSchema, ['params']), InvoiceController.show())

  /**
     * PATCH /api/invoice/{id}
     * @summary Update one invoice
     * @tags Invoice
     * @param {number} id.path.required - invoice ID to be updated
     * @param {PatchInvoice} request.body.required - Invoice infos
     * @return {array<GetInvoice>} 200 - Success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Invoice not found - application/json
     * @example request - example payload
     * {
     * "total_value": 45.25
     * }
     * @example response - 201 - example success response
     *{
     *  "data": [
     *    {
     *      "invoice_id": 1,
     *      "reference": "INV_4578",
     *      "date": "2024-06-02T06:33:57.160Z",
     *      "total_value": "45.25",
     *      "customer_id": 1,
     *      "order_id": 1,
     *      "created_at": "2024-06-02T06:33:57.160Z",
     *      "updated_at": "2024-06-18T14:36:37.466Z"
     *    }
     *  ]
     *}
     * @example response - 400 - example 400 response
     * {
     * "error": "Bad request. Invalid value"
     * }
     * @example response - 404 - example 404 response
     * {
     * "error": "Bad request. The provided id don't exist"
     * }
  */
  .patch(validationSchema(updateSchema(paramIdSchema, invoiceUpdateSchema), ['body','params'], 'update'), InvoiceController.update)

  /**
     * DELETE /api/invoice/{id}
     * @summary Delete one invoice
     * @tags Invoice
     * @param {number} id.path.required - invoice ID to be deleted
     * @return {object} 204 - Success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 403 - Forbidden - application/json
     * @return {ApiError} 404 - Invoice not found - application/json
     * @example response - 204 - example success response
     * {
     * }
     * @example response - 400 - example 400 response
     * {
     * "error": "Bad request. Invalid value"
     * }
     * @example response - 403 - example 403 response
     * {
     * "error": "Request forbidden. This element is attached to an other element"
     * }
     * @example response - 404 - example 404 response
     * {
     * "error": "Bad request. The provided id don't exist"
     * }
  */
  .delete(validationSchema(invoiceDestroySchema, ['params']), InvoiceController.destroy);

invoiceRouter.route('/customer/:id(\\d+)')
   /**
     * GET /api/invoice/customer/{id}
     * @summary Get an invoice by customer
     * @tags Invoice
     * @param {number} id.path.requied - customer ID to have their invoices
     * @return {array<GetInvoiceByCustomer>} 200 - Success request - application/json
     * @return {ApiError} 400 - Bad request - application/json
     * @return {ApiError} 404 - Customer not found - application/json
     * @example response - 200 - example success response
     *{
     *  "data": [
     *    {
     *      "invoice_id": 2,
     *      "reference": "INV_4549",
     *      "date": "2024-06-02T06:33:57.160Z",
     *      "total_value": "27.05",
     *      "customer_id": 2,
     *      "order_id": 2,
     *      "created_at": "2024-06-02T06:33:57.160Z",
     *      "updated_at": null
     *    },
     *    {
     *      "invoice_id": 14,
     *      "reference": "INV_0002",
     *      "date": "2024-06-03T13:11:21.040Z",
     *      "total_value": "25.89",
     *      "customer_id": 2,
     *      "order_id": 4,
     *      "created_at": "2024-06-03T13:11:21.040Z",
     *      "updated_at": "2024-06-03T15:48:51.206Z"
     *    }
     *  ]
     *}
     * @example response - 400 - example 400 response
     * {
     * "error": "Bad request. Invalid value"
     * }
     * @example response - 404 - example 404 response
     * {
     * "error": "Bad request. The provided id don't exist"
     * }
    */
   .get(validationSchema(invoiceShowCustomerSchema, ['params']), InvoiceController.show('Customer'))

export default invoiceRouter;
// EXTERNAL MODULES
import { Router } from "express";

// INTERNAL MODULES
  // Controller
import Controller from "../../controller/api/controller.js";
  // Datamapper
import customerDatamapper from "../../model/customer.datamapper.js";
  // Errors handler
import catchHandlerController from "../../libraries/catchController.handler.js";
  // Schemas 
import validationSchema from "../../schema-validation/validation.schema.js";
import paramIdSchema from "../../schema-validation/paramId.schema.js";
import updateSchema from '../../schema-validation/update.schema.js';
import customerShowSchema from "../../schema-validation/customer/customer.show.schema.js";
import customerStoreSchema from "../../schema-validation/customer/customer.store.schema.js";
import customerDestroySchema from "../../schema-validation/customer/customer.destroy.schema.js";
import customerUpdateSchema from "../../schema-validation/customer/customer.update.schema.js";

/* --------------------------------------------------------------------------- */

const customerRouter = Router();

const CustomerController = new Controller(customerDatamapper);


customerRouter.route('/')
  /**
    * GET /api/customer
    * @summary Get all customers
    * @tags Customer
    * @return {array<GetCustomer>} 200 - Success response - application/json
    * @example response - 200 - example success response
    *{
    *  "data": [
    *    {
    *      "customer_id": 1,
    *      "name": "Ryad",
    *      "address": "103, chemin du moulin de la ville",
    *      "phone": "0629685293",
    *      "email": "r.chair@hotmail.fr",
    *      "created_at": "2024-06-02T06:33:57.160Z",
    *      "updated_at": null
    *    },
    *    {
    *      "customer_id": 2,
    *      "name": "Croquette",
    *      "address": "10 rue du code",
    *      "phone": "0784759845",
    *      "email": "samy.code@hotmail.fr",
    *      "created_at": "2024-06-02T06:33:57.160Z",
    *      "updated_at": "2024-06-18T15:00:43.242Z"
    *    }
    *  ]
    *}
   */
  .get(catchHandlerController(CustomerController.index))

    /**
    * POST /api/customer
    * @summary Post one customer
    * @tags Customer
    * @param {PostCustomer} request.body.required - Customer infos
    * @return {array<GetCustomer>} 200 - Success response - application/json
    * @return {ApiError} 400 - Bad request response - application/json
    * @return {ApiError} 404 - Order not found - application/json
    * @example request - example payload
    *{
    *  "name": "Monsieur",
    *  "address": "104 chemin de la fonction",
    *  "phone": "0475847596",
    *  "email": "monsieur@email.email"
    *} 
    * @example response - 201 - example success response
    *{
    *  "data": [
    *    {
    *      "customer_id": 4,
    *      "name": "Monsieur",
    *      "address": "104 chemin de la fonction",
    *      "phone": "0475847596",
    *      "email": "monsieur@email.email",
    *      "created_at": "2024-06-18T15:04:22.173Z",
    *      "updated_at": null
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
  .post(validationSchema(customerStoreSchema, ['body']), catchHandlerController(CustomerController.store))
;

customerRouter.route('/:id(\\d+)')
  /**
    * GET /api/customer/{id}
    * @summary Get one customer
    * @tags Customer
    * @param {number} id.path.required
    * @return {array<GetCustomer>} 200 - Success response - application/json
    * @return {ApiError} 400 - Bad request response - application/json
    * @return {ApiError} 404 - Customer not found - application/json
    * @example response - 200 - example success response
    *{
    *  "data": [
    *    {
    *      "customer_id": 2,
    *      "name": "Croquette",
    *      "address": "10 rue du code",
    *      "phone": "0784759845",
    *      "email": "samy.code@hotmail.fr",
    *      "created_at": "2024-06-02T06:33:57.160Z",
    *      "updated_at": "2024-06-18T15:00:43.242Z"
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
  .get(validationSchema(customerShowSchema, ['params']), catchHandlerController(CustomerController.show()))

    /**
    * PATCH /api/customer/{id}
    * @summary Patch one customer
    * @tags Customer
    * @param {number} id.path.required - Customer ID tço be updated
    * @param {PatchCustomer} request.body.required - Customer infos
    * @return {array<GetCustomer>} 200 - Success response - application/json
    * @return {ApiError} 400 - Bad request response - application/json
    * @return {ApiError} 404 - Customer not found - application/json
    * @example request - example payload
    *{
    *  "name": "Cacahuète" 
    *} 
    * @example response - 201 - example success response
    *{
    *  "data": [
    *    {
    *      "customer_id": 2,
    *      "name": "Cacahuète",
    *      "address": "10 rue du code",
    *      "phone": "0784759845",
    *      "email": "samy.code@hotmail.fr",
    *      "created_at": "2024-06-02T06:33:57.160Z",
    *      "updated_at": "2024-06-18T15:06:55.056Z"
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
  .patch(validationSchema(updateSchema(paramIdSchema, customerUpdateSchema), ['body','params'], 'update'), catchHandlerController(CustomerController.update))

    /**
     * DELETE /api/customer/{id}
     * @summary Delete one customer
     * @tags Customer
     * @param {number} id.path.required - Customer ID to be deleted
     * @return {object} 200 - Success response - application/json
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
  .delete(validationSchema(customerDestroySchema, ['params']), catchHandlerController(CustomerController.destroy))
;

  export default customerRouter;
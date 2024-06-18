// EXTERNAL MODULES
import { Router } from "express";

// INTERNAL MODULES
  // Controller
import Controller from "../../controller/api/controller.js";
  // Datamapper
import orderDatamapper from "../../model/order.datamapper.js";
  // Errors handler
import catchHandlerController from "../../libraries/catchController.handler.js";
  // Schemas 
import validationSchema from "../../schema-validation/validation.schema.js";
import paramIdSchema from "../../schema-validation/paramId.schema.js";
import updateSchema from "../../schema-validation/update.schema.js";
import orderStoreSchema from "../../schema-validation/order/order.store.schema.js";
import orderShowSchema from "../../schema-validation/order/order.show.schema.js";
import orderUpdateSchema from "../../schema-validation/order/order.update.schema.js";
import orderDestroySchema from "../../schema-validation/order/order.destroy.schema.js";
import orderShowArticleSchema from "../../schema-validation/order/order.showArticle.schema.js";
import orderShowCustomerSchema from "../../schema-validation/order/order.showCustomer.schema.js";

/* --------------------------------------------------------------------------- */

const orderRouter = Router();

const OrderController = new Controller(orderDatamapper);

orderRouter.route('/')
  /**
    * GET /api/order
    * @summary Get all orders
    * @tags Order
    * @return {array<GetOrder>} 200 - Success response - application/json
    * @example response - 200 - example success response
    *{
    *  "data": [
    *    {
    *      "order_id": 4,
    *      "reference": "OR_7845",
    *      "date": "2024-06-02T07:19:25.366Z",
    *      "value": "6.04",
    *      "customer_id": 2,
    *      "created_at": "2024-06-02T07:19:25.366Z",
    *      "updated_at": null
    *    },
    *    {
    *      "order_id": 1,
    *      "reference": "OR_8795",
    *      "date": "2024-06-02T06:33:57.160Z",
    *      "value": "10.298555",
    *      "customer_id": 1,
    *      "created_at": "2024-06-02T06:33:57.160Z",
    *      "updated_at": "2024-06-14T15:47:29.527Z"
    *    },
    *    {
    *      "order_id": 2,
    *      "reference": "OR_8778",
    *      "date": "2024-06-02T06:33:57.160Z",
    *      "value": "10.298555",
    *      "customer_id": 2,
    *      "created_at": "2024-06-02T06:33:57.160Z",
    *      "updated_at": "2024-06-18T09:22:44.945Z"
    *    }
    *  ]
    *}
   */
  .get(catchHandlerController(OrderController.index))

  /**
    * POST /api/order
    * @summary Post one order
    * @tags Order
    * @param {PostOrder} request.body.required - Order infos
    * @return {array<GetOrder>} 200 - Success response - application/json
    * @return {ApiError} 400 - Bad request response - application/json
    * @return {ApiError} 404 - Order not found - application/json
    * @example request - example payload
    *{
    *  "reference": "OR_0078",
    *  "value": 104.48,
    *  "customer_id": 2
    *} 
    * @example response - 201 - example success response
    *{
    *  "data": [
    *    {
    *      "order_id": 15,
    *      "reference": "OR_0078",
    *      "date": "2024-06-18T14:42:57.362Z",
    *      "value": "104.48",
    *      "customer_id": 2,
    *      "created_at": "2024-06-18T14:42:57.362Z",
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
  .post(validationSchema(orderStoreSchema, ['body']), catchHandlerController(OrderController.store));

orderRouter.route('/:id(\\d+)')
// -> On donne le contexte à la fonction pour récupérer la propriété RADIX_PARSEINT à travers le this de la méthode
  /**
    * GET /api/order/{id}
    * @summary Get one order
    * @tags Order
    * @param {number} id.path.required
    * @return {array<GetOrder>} 200 - Success response - application/json
    * @return {ApiError} 400 - Bad request response - application/json
    * @return {ApiError} 404 - Order not found - application/json
    * @example response - 200 - example success response
    *{
    *  "data": [
    *    {
    *      "order_id": 2,
    *      "reference": "OR_8778",
    *      "date": "2024-06-02T06:33:57.160Z",
    *      "value": "10.298555",
    *      "customer_id": 2,
    *      "created_at": "2024-06-02T06:33:57.160Z",
    *      "updated_at": "2024-06-18T09:22:44.945Z"
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
  .get(validationSchema(orderShowSchema, ['params']), catchHandlerController(OrderController.show()))

  /**
    * PATCH /api/order/{id}
    * @summary Patch one order
    * @tags Order
    * @param {number} id.path.required - Order ID tço be updated
    * @param {PatchOrder} request.body.required - Order infos
    * @return {array<GetOrder>} 200 - Success response - application/json
    * @return {ApiError} 400 - Bad request response - application/json
    * @return {ApiError} 404 - Order not found - application/json
    * @example request - example payload
    * {
    * "value": 10.87
    * }
    * @example response - 201 - example success response
    *{
    *  "data": [
    *    {
    *      "order_id": 2,
    *      "reference": "OR_8778",
    *      "date": "2024-06-02T06:33:57.160Z",
    *      "value": "10.87",
    *      "customer_id": 2,
    *      "created_at": "2024-06-02T06:33:57.160Z",
    *      "updated_at": "2024-06-18T14:47:27.862Z"
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
  .patch(validationSchema(updateSchema(paramIdSchema, orderUpdateSchema), ['params', 'body'], 'update'), catchHandlerController(OrderController.update))

  /**
     * DELETE /api/order/{id}
     * @summary Delete one order
     * @tags Order
     * @param {number} id.path.required - Order ID to be deleted
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
  .delete(validationSchema(orderDestroySchema, ['params']), catchHandlerController(OrderController.destroy));



orderRouter.route('/article/:id(\\d+)')
  /**
    * GET /api/order/article/{id}
    * @summary Get all orders by one article
    * @tags Order
    * @param {number} id.path.required - Article ID to show their order
    * @return {array<GetOrderByArticle>} 200 - Success response - application/json
    * @return {ApiError} 400 - Bad request response - application/json
    * @return {ApiError} 404 - Invoice not found - application/json
    * @example response - 200 - example success response
    *{
    *  "data": [
    *    {
    *      "order_id": 1,
    *      "reference": "OR_8795",
    *      "date": "2024-06-02T06:33:57.160Z",
    *      "value": "10.298555",
    *      "customer_id": 1,
    *      "created_at": "2024-06-02T06:33:57.160Z",
    *      "updated_at": null,
    *      "item_id": 2,
    *      "article_id": 2,
    *      "quantity": 2
    *    },
    *    {
    *      "order_id": 2,
    *      "reference": "OR_8778",
    *      "date": "2024-06-02T06:33:57.160Z",
    *      "value": "10.87",
    *      "customer_id": 2,
    *      "created_at": "2024-06-02T06:33:57.160Z",
    *      "updated_at": null,
    *      "item_id": 4,
    *      "article_id": 2,
    *      "quantity": 2
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
  .get(validationSchema(orderShowArticleSchema, ['params']), catchHandlerController(OrderController.show('Article')));


orderRouter.route('/customer/:id(\\d+)')
  /**
    * GET /api/order/customer/{id}
    * @summary Get all orders by one article
    * @tags Order
    * @param {number} id.path.required - Customer ID to show their order 
    * @return {array<GetOrderByCustomer>} 200 - Success response - application/json
    * @return {ApiError} 400 - Bad request response - application/json
    * @return {ApiError} 404 - Invoice not found - application/json
    * @example response - 200 - example success response
    *{
    *  "data": [
    *    {
    *      "order_id": 4,
    *      "reference": "OR_7845",
    *      "date": "2024-06-02T07:19:25.366Z",
    *      "value": "6.04",
    *      "customer_id": 2,
    *      "created_at": "2024-06-02T07:19:25.366Z",
    *      "updated_at": null
    *    },
    *    {
    *      "order_id": 15,
    *      "reference": "OR_0078",
    *      "date": "2024-06-18T14:42:57.362Z",
    *      "value": "104.48",
    *      "customer_id": 2,
    *      "created_at": "2024-06-18T14:42:57.362Z",
    *      "updated_at": null
    *    },
    *    {
    *      "order_id": 2,
    *      "reference": "OR_8778",
    *      "date": "2024-06-02T06:33:57.160Z",
    *      "value": "10.87",
    *      "customer_id": 2,
    *      "created_at": "2024-06-02T06:33:57.160Z",
    *      "updated_at": "2024-06-18T14:47:27.862Z"
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
  .get(validationSchema(orderShowCustomerSchema, ['params']), catchHandlerController(OrderController.show('Customer')));

  

  export default orderRouter;
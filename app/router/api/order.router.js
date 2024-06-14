// EXTERNAL MODULES
import { Router } from "express";

// INTERNAL MODULES
import orderController from "../../controller/api/order.controller.js";
import catchHandlerController from "../../libraries/catchController.handler.js";
import validationSchema from "../../schema-validation/validation.schema.js";
import orderStoreSchema from "../../schema-validation/order/order.store.schema.js";
import orderShowSchema from "../../schema-validation/order/order.show.schema.js";
import orderUpdateSchema from "../../schema-validation/order/order.update.schema.js";
import orderDestroySchema from "../../schema-validation/order/order.destroy.schema.js";
import orderShowArticleSchema from "../../schema-validation/order/order.showArticle.schema.js";
import orderShowCustomerSchema from "../../schema-validation/order/order.showCustomer.schema.js";
import updateSchema from "../../schema-validation/update.schema.js";
import paramIdSchema from "../../schema-validation/paramId.schema.js";


const orderRouter = Router();

orderRouter.route('/')
  /**
   * GET /api/order
   * @summary Get all orders
   * @tags Order
   * @return {[GetOrder]} 200 - Success response - application/json
   */
  .get(catchHandlerController(orderController.index))

  /**
   * POST /api/order
   * @summary Post one order
   * @tags Order
   * @param {PostOrder} request.body.required - Order infos
   * @return {[GetOrder]} 200 - Success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - Order not found - application/json
   */
  .post(validationSchema(orderStoreSchema, ['body']), catchHandlerController(orderController.store));

orderRouter.route('/:id(\\d+)')
// -> On donne le contexte à la fonction pour récupérer la propriété RADIX_PARSEINT à travers le this de la méthode
  /**
   * GET /api/order/{id}
   * @summary Get one order
   * @tags Order
   * @param {number} id.path.required
   * @return {[GetOrder]} 200 - Success response - application/json
   */
  .get(validationSchema(orderShowSchema, ['params']), catchHandlerController(orderController.show.bind(orderController)))

  /**
   * PATCH /api/order/{id}
   * @summary Patch one order
   * @tags Order
   * @param {number} id.path.required - Order ID tço be updated
   * @param {PatchOrder} request.body.required - Order infos
   * @return {[GetOrder]} 200 - Success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - Order not found - application/json
   */
  .patch(validationSchema(updateSchema(paramIdSchema, orderUpdateSchema), ['params', 'body'], 'update'), catchHandlerController(orderController.update.bind(orderController)))

  /**
     * DELETE /api/order/{id}
     * @summary Delete one order
     * @tags Order
     * @param {number} id.path.required - Order ID to be deleted
     * @return {object} 200 - Success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Invoice not found - application/json
  */
  .delete(validationSchema(orderDestroySchema, ['params']), catchHandlerController(orderController.destroy.bind(orderController)));



orderRouter.route('/article/:id(\\d+)')
  /**
     * GET /api/order/article/{id}
     * @summary Get all orders by one article
     * @tags Order
     * @param {number} id.path.required - Article ID to show their order
     * @return {[GetOrderByArticle]} 200 - Success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Invoice not found - application/json
  */
  .get(validationSchema(orderShowArticleSchema, ['params']), catchHandlerController(orderController.showArticle.bind(orderController)));


orderRouter.route('/customer/:id(\\d+)')
  /**
     * GET /api/order/customer/{id}
     * @summary Get all orders by one article
     * @tags Order
     * @param {number} id.path.required - Customer ID to show their order 
     * @return {[GetOrderByCustomer]} 200 - Success response - application/json
     * @return {ApiError} 400 - Bad request response - application/json
     * @return {ApiError} 404 - Invoice not found - application/json
  */
  .get(validationSchema(orderShowCustomerSchema, ['params']), catchHandlerController(orderController.showCustomer.bind(orderController)));

  

  export default orderRouter;
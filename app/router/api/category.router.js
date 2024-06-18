// EXTERNAL MODULES
import { Router } from "express";
// INTERNAL MODULES
   // Controller
import Controller from "../../controller/api/controller.js";
   // Datamapper
import categoryDatamapper from "../../model/category.datamapper.js";
   // Errors handler
import catchHandlerController from "../../libraries/catchController.handler.js";
   // Schemas 
import validationSchema from "../../schema-validation/validation.schema.js";
import paramIdSchema from "../../schema-validation/paramId.schema.js";
import updateSchema from "../../schema-validation/update.schema.js";
import categoryShowSchema from "../../schema-validation/category/category.show.schema.js";
import categoryStoreSchema from "../../schema-validation/category/category.store.schema.js";
import categoryUpdateSchema from "../../schema-validation/category/category.update.schema.js";
import categoryDestroySchema from "../../schema-validation/category/category.destroy.schema.js";

/* --------------------------------------------------------------------------- */

const categoryRouter = Router();

const CategoryController = new Controller(categoryDatamapper);

categoryRouter.route('/')
  /**
     * GET /api/category/
     * @summary Get all categories
     * @tags Category
     * @return {array<GetCategory>} 200 - Success response - application/json
     * @example response - 200 - example success response
     *{
     *  "data": [
     *    {
     *      "category_id": 1,
     *      "name": "Alimentaire",
     *      "created_at": "2024-06-02T06:33:57.160Z",
     *      "updated_at": null
     *    },
     *    {
     *      "category_id": 2,
     *      "name": "Fouriture de bureau",
     *      "created_at": "2024-06-02T06:33:57.160Z",
     *      "updated_at": null
     *    },
     *    {
     *      "category_id": 6,
     *      "name": "jouets pour animaux",
     *      "created_at": "2024-06-18T09:56:28.504Z",
     *      "updated_at": null
     *    }
     *  ]
     *}
  */
  .get(catchHandlerController(CategoryController.index))

  /**
     * POST /api/category/
     * @summary Post a category
     * @tags Category
     * @param {PostCategory} request.body.required - Category infos 
     * @return {array<GetCategory>} 201 - Success response - application/json
     * @return {ApiError} 400 - Bad request - application/json
     * @return {ApiError} 404 - Category not found - application/json
     * @example request - example payload
     * {
     * "name": "jeu d'extérieur"
     * }
     * @example response - 201 - example success response
     *{
     *  "data": [
     *    {
     *      "category_id": 8,
     *      "name": "jeu d'extérieur",
     *      "created_at": "2024-06-18T13:25:32.595Z",
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
  .post(validationSchema(categoryStoreSchema, ['body']), catchHandlerController(CategoryController.store))

categoryRouter.route('/:id(\\d+)')
  /**
     * GET /api/category/{id}
     * @summary Get one category
     * @tags Category
     * @param {number} id.path.required - Category ID
     * @return {array<GetCategory>} 200 - Success response - application/json
     * @return {ApiError} 400 - Bad request - application/json
     * @return {ApiError} 404 - Category not found - application/json
     * @example response - 200 - success response
     *{
     *  "data": [
     *    {
     *      "category_id": 2,
     *      "name": "Fouriture de bureau",
     *      "created_at": "2024-06-02T06:33:57.160Z",
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
  .get(validationSchema(categoryShowSchema, ['params']), catchHandlerController(CategoryController.show()))

  /**
     * PATCH /api/category/{id}
     * @summary Patch one category
     * @tags Category
     * @param {number} id.path.required - Category ID
     * @param {PatchCategory} request.body.required - Category infos
     * @return {array<GetCategory>} 201 - Success response - application/json
     * @return {ApiError} 400 - Bad request - application/json
     * @return {ApiError} 404 - Category not found - application/json
     * @example request - example payload
     * {
     * "name": "ustensile de cuisine"
     * }
     * @example response - 201 - example success response
     * {
     *   "data": [
     *     {
     *       "category_id": 1,
     *       "name": "ustensile de cuisine",
     *       "created_at": "2024-06-02T06:33:57.160Z",
     *       "updated_at": "2024-06-18T14:26:49.158Z"
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
  .patch(validationSchema(updateSchema(paramIdSchema, categoryUpdateSchema), ['params', 'body'], 'update'), catchHandlerController(CategoryController.update))

  /**
     * DELETE /api/category/{id}
     * @summary Delete one category
     * @tags Category
     * @param {number} id.path.required - Category ID
     * @return {object} 204 - Success response - application/json
     * @return {ApiError} 400 - Bad request - application/json
     * @return {ApiError} 403 - Forbidden - application/json
     * @return {ApiError} 404 - Category not found - application/json
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
  .delete(validationSchema(categoryDestroySchema, ['params']), catchHandlerController(CategoryController.destroy));


  export default categoryRouter;
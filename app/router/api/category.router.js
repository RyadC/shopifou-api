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
     * @return {[GetCategory]} 200 - Success response - application/json
  */
  .get(catchHandlerController(CategoryController.index))

  /**
     * POST /api/category/
     * @summary Post a category
     * @tags Category
     * @param {PostCategory} request.body.required - Category infos 
     * @return {[GetCategory]} 201 - Success response - application/json
     * @return {ApiError} 400 - Bad request - application/json
     * @return {ApiError} 404 - Category not found - application/json
  */
  .post(validationSchema(categoryStoreSchema, ['body']), catchHandlerController(CategoryController.store))

categoryRouter.route('/:id(\\d+)')
  /**
     * GET /api/category/{id}
     * @summary Get one category
     * @tags Category
     * @param {number} id.path.required - Category ID
     * @return {[GetCategory]} 200 - Success response - application/json
     * @return {ApiError} 400 - Bad request - application/json
     * @return {ApiError} 404 - Category not found - application/json
  */
  .get(validationSchema(categoryShowSchema, ['params']), catchHandlerController(CategoryController.show()))

  /**
     * PATCH /api/category/{id}
     * @summary Patch one category
     * @tags Category
     * @param {number} id.path.required - Category ID
     * @param {PatchCategory} request.body.required - Category infos
     * @return {[GetCategory]} 201 - Success response - application/json
     * @return {ApiError} 400 - Bad request - application/json
     * @return {ApiError} 404 - Category not found - application/json
  */
  .patch(validationSchema(updateSchema(paramIdSchema, categoryUpdateSchema), ['params', 'body'], 'update'), catchHandlerController(CategoryController.update))

  /**
     * DELETE /api/category/{id}
     * @summary Delete one category
     * @tags Category
     * @param {number} id.path.required - Category ID
     * @return {object} 204 - Success response - application/json
     * @return {ApiError} 400 - Bad request - application/json
     * @return {ApiError} 404 - Category not found - application/json
  */
  .delete(validationSchema(categoryDestroySchema, ['params']), catchHandlerController(CategoryController.destroy));


  export default categoryRouter;
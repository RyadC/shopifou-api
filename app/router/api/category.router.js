import { Router } from "express";
import validationSchema from "../../schema/validation.schema.js";
import catchHandlerController from "../../libraries/catchController.handler.js";
import categoryShowSchema from "../../schema/category/category.show.schema.js";
import categoryStoreSchema from "../../schema/category/category.store.schema.js";
import categoryUpdateSchema from "../../schema/category/category.update.schema.js";
import categoryDestroySchema from "../../schema/category/category.destroy.schema.js";
import categoryController from "../../controller/api/category.controller.js";


const categoryRouter = Router();

categoryRouter.route('/')
  /**
     * GET /api/category/
     * @summary Get all categories
     * @tags Category
     * @return {[GetCategory]} 200 - Success response - application/json
  */
  .get(catchHandlerController(categoryController.index))

  /**
     * POST /api/category/
     * @summary Post a category
     * @tags Category
     * @param {PostCategory} request.body.required - Category infos 
     * @return {[GetCategory]} 201 - Success response - application/json
     * @return {ApiError} 400 - Bad request - application/json
     * @return {ApiError} 404 - Category not found - application/json
  */
  .post(validationSchema(categoryStoreSchema, ['body']), catchHandlerController(categoryController.store))

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
  .get(validationSchema(categoryShowSchema, ['params']), catchHandlerController(categoryController.show.bind(categoryController)))

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
  .patch(validationSchema(categoryUpdateSchema, ['params', 'body']), catchHandlerController(categoryController.update.bind(categoryController)))

  /**
     * DELETE /api/category/{id}
     * @summary Delete one category
     * @tags Category
     * @param {number} id.path.required - Category ID
     * @return {object} 204 - Success response - application/json
     * @return {ApiError} 400 - Bad request - application/json
     * @return {ApiError} 404 - Category not found - application/json
  */
  .delete(validationSchema(categoryDestroySchema, ['params']), catchHandlerController(categoryController.destroy.bind(categoryController)));


  export default categoryRouter;
import { Router } from "express";
import catchHandlerController from "../../libraries/catchController.handler.js";
import articleController from "../../controller/api/article.controller.js";
import articleStoreSchema from "../../schema-validation/article/article.store.schema.js";
import articleShowSchema from "../../schema-validation/article/article.show.schema.js";
import articleUpdateSchema from "../../schema-validation/article/article.upadte.schema.js";
import articleDestroySchema from "../../schema-validation/article/article.destroy.schema.js";
import validationSchema from "../../schema-validation/validation.schema.js";
import updateSchema from "../../schema-validation/update.schema.js";
import paramIdSchema from "../../schema-validation/paramId.schema.js";



const articleRouter = Router();

articleRouter.route('/')
  /**
     * GET /api/article/
     * @summary Get all articles
     * @tags Article
     * @return {[GetArticle]} 200 - Success response - application/json
  */
  .get(catchHandlerController(articleController.index))

  /**
     * POST /api/article/
     * @summary Post an article
     * @tags Article
     * @param {PostArticle} request.body.required - article infos 
     * @return {[GetArticle]} 201 - Success response - application/json
     * @return {ApiError} 400 - Bad request - application/json
     * @return {ApiError} 404 - Article not found - application/json
  */
  .post(validationSchema(articleStoreSchema, ['body']), catchHandlerController(articleController.store))

articleRouter.route('/:id(\\d+)')
  /**
     * GET /api/article/{id}
     * @summary Get one article
     * @tags article
     * @param {number} id.path.required - article ID
     * @return {[GetArticle]} 200 - Success response - application/json
     * @return {ApiError} 400 - Bad request - application/json
     * @return {ApiError} 404 - Article not found - application/json
  */
  .get(validationSchema(articleShowSchema, ['params']), catchHandlerController(articleController.show.bind(articleController)))

  /**
     * PATCH /api/article/{id}
     * @summary Patch one article
     * @tags Article
     * @param {number} id.path.required - article ID
     * @param {PatchArticle} request.body.required - article infos
     * @return {[GetArticle]} 201 - Success response - application/json
     * @return {ApiError} 400 - Bad request - application/json
     * @return {ApiError} 404 - Article not found - application/json
  */
  .patch(validationSchema(updateSchema(paramIdSchema, articleUpdateSchema), ['params', 'body'], 'update'), catchHandlerController(articleController.update.bind(articleController)))

  /**
     * DELETE /api/article/{id}
     * @summary Delete one article
     * @tags Article
     * @param {number} id.path.required - article ID
     * @return {object} 204 - Success response - application/json
     * @return {ApiError} 400 - Bad request - application/json
     * @return {ApiError} 404 - Article not found - application/json
  */
  .delete(validationSchema(articleDestroySchema, ['params']), catchHandlerController(articleController.destroy.bind(articleController)));


  export default articleRouter;
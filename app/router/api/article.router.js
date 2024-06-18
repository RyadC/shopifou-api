// EXTERNAL MODULES
import { Router } from "express";

// INTERNAL MODULES
   // Controller
import Controller from "../../controller/api/controller.js";
   // Datamapper
import articleDatamapper from "../../model/article.datamapper.js";
   // Errors handler
import catchHandlerController from "../../libraries/catchController.handler.js";
   // Schemas 
import validationSchema from "../../schema-validation/validation.schema.js";
import updateSchema from "../../schema-validation/update.schema.js";
import paramIdSchema from "../../schema-validation/paramId.schema.js";
import articleShowSchema from "../../schema-validation/article/article.show.schema.js";
import articleStoreSchema from "../../schema-validation/article/article.store.schema.js";
import articleUpdateSchema from "../../schema-validation/article/article.upadte.schema.js";
import articleDestroySchema from "../../schema-validation/article/article.destroy.schema.js";

/* --------------------------------------------------------------------------- */

const articleRouter = Router();

const ArticleController = new Controller(articleDatamapper);

articleRouter.route('/')
  /**
     * GET /api/article/
     * @summary Get all articles
     * @tags Article
     * @return {[GetArticle]} 200 - Success response - application/json
  */
  .get(catchHandlerController(ArticleController.index))

  /**
     * POST /api/article/
     * @summary Post an article
     * @tags Article
     * @param {PostArticle} request.body.required - article infos 
     * @return {[GetArticle]} 201 - Success response - application/json
     * @return {ApiError} 400 - Bad request - application/json
     * @return {ApiError} 404 - Article not found - application/json
  */
  .post(validationSchema(articleStoreSchema, ['body']), catchHandlerController(ArticleController.store))

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
  .get(validationSchema(articleShowSchema, ['params']), catchHandlerController(ArticleController.show))

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
  .patch(validationSchema(updateSchema(paramIdSchema, articleUpdateSchema), ['params', 'body'], 'update'), catchHandlerController(ArticleController.update))

  /**
     * DELETE /api/article/{id}
     * @summary Delete one article
     * @tags Article
     * @param {number} id.path.required - article ID
     * @return {object} 204 - Success response - application/json
     * @return {ApiError} 400 - Bad request - application/json
     * @return {ApiError} 404 - Article not found - application/json
  */
  .delete(validationSchema(articleDestroySchema, ['params']), catchHandlerController(ArticleController.destroy));


articleRouter.route('/category/:id(\\d+)')

   .get(ArticleController.show('Category'))

  export default articleRouter;
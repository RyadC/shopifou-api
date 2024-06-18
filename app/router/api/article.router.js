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
     * @return {array<GetArticle>} 200 - Success response - application/json
     * @example response - 200 - example success response
      *{
      *  "data": [
      *    {
      *      "article_id": 1,
      *      "barcode": "57954884154",
      *      "name": "stylo rouge XR collection",
      *      "brand": "Maped",
      *      "price": "2.63",
      *      "created_at": "2024-06-02T06:33:57.160Z",
      *      "updated_at": null,
      *      "item_id": 1,
      *      "category_id": 2
      *    },
      *    {
      *      "article_id": 3,
      *      "barcode": "57954899644",
      *      "name": "céréale pétale croquant",
      *      "brand": "Frosties",
      *      "price": "5.65",
      *      "created_at": "2024-06-14T14:43:41.613Z",
      *      "updated_at": null,
      *      "item_id": 3,
      *      "category_id": 2
      *    },
      *    {
      *      "article_id": 4,
      *      "barcode": "574584189964",
      *      "name": "confiture de fraise",
      *      "brand": "Belle maman",
      *      "price": "3.02",
      *      "created_at": "2024-06-14T14:43:41.613Z",
      *      "updated_at": null,
      *      "item_id": 4,
      *      "category_id": 2
      *    }
      *  ]
      *}
  */
  .get(catchHandlerController(ArticleController.index))

  /**
     * POST /api/article/
     * @summary Post an article
     * @tags Article
     * @param {PostArticle} request.body.required - article infos 
     * @return {array<GetArticle>} 201 - Success response - application/json
     * @return {ApiError} 400 - Bad request - application/json
     * @return {ApiError} 404 - Article not found - application/json
     * @example request - example payload
     * {
     * "barcode": "5475712045780",
     * "brand": "home",
     * "name": "slippers",
     * "price": 25.95
     * }
     * @example response - 201 - example success response
     *{
     *   "data": [
     *     {
     *       "article_id": 9,
     *       "barcode": "9475312045780",
     *       "name": "slippers",
     *       "brand": "home",
     *       "price": "10.25",
     *       "created_at": "2024-06-10T14:54:41.701Z",
     *       "updated_at": "2024-06-18T12:54:43.318Z"
     *     }
     *   ]
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
  .post(validationSchema(articleStoreSchema, ['body']), catchHandlerController(ArticleController.store))

articleRouter.route('/:id(\\d+)')
  /**
     * GET /api/article/{id}
     * @summary Get one article
     * @tags Article
     * @param {number} id.path.required - article ID
     * @return {array<GetArticle>} 200 - Success response -  application/json
     * @return {ApiError} 400 - Bad request - application/json
     * @return {ApiError} 404 - Article not found - application/ json
     * @example response - 200 - example success response
     *{
     *   "data": [
     *     {
     *       "article_id": 9,
     *       "barcode": "9475312045780",
     *       "name": "slippers",
     *       "brand": "home",
     *       "price": "10.25",
     *       "created_at": "2024-06-10T14:54:41.701Z",
     *       "updated_at": "2024-06-18T12:54:43.318Z"
     *     }
     *   ]
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
  .get(validationSchema(articleShowSchema, ['params']), catchHandlerController(ArticleController.show()))

  /**
     * PATCH /api/article/{id}
     * @summary Patch one article
     * @tags Article
     * @param {number} id.path.required - article ID
     * @param {PatchArticle} request.bodyrequired - Article properties
     * @return {array<GetArticle>} 201 - Success response - application/json
     * @return {ApiError} 400 - Bad request - application/json
     * @return {ApiError} 404 - Article not found - application/json
     * @example request - example payload with one property
     * {
     * "brand": "sport"
     * }
     * @example request - example payload withmultiples properties
     * {
     * "barcode": "5475712045780",
     * "brand": "home",
     * "name": "slippers",
     * "price": 25.95
     * }
     * @example response - 201 - example success response
     * {
     *   "data": [
     *     {
     *       "article_id": 9,
     *       "barcode": "9475312045780",
     *       "name": "slippers",
     *       "brand": "home",
     *       "price": "10.25",
     *       "created_at": "2024-06-10T14:54:41.701Z",
     *       "updated_at": "2024-06-18T12:54:43.318Z"
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
  .patch(validationSchema(updateSchema(paramIdSchema, articleUpdateSchema), ['params', 'body'], 'update'), catchHandlerController(ArticleController.update))

  /**
     * DELETE /api/article/{id}
     * @summary Delete one article
     * @tags Article
     * @param {number} id.path.required - article ID
     * @return {object} 204 - Success response - application/json
     * @return {ApiError} 400 - Bad request - application/json
     * @return {ApiError} 403 - Forbidden - application/json
     * @return {ApiError} 404 - Article not found - application/json
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
  .delete(validationSchema(articleDestroySchema, ['params']), catchHandlerController(ArticleController.destroy));


articleRouter.route('/category/:id(\\d+)')
  /**
     * GET /api/article/category/{id}
     * @summary Get one article by catgeory
     * @tags Article
     * @param {number} id.path.required - category ID
     * @return {array<GetArticleByCategory>} 200 - Success response - application/json
     * @return {ApiError} 400 - Bad request - application/json
     * @return {ApiError} 404 - Article not found - application/json
     * @example response - 200 - example success response
      *{
      *  "data": [
      *    {
      *      "article_id": 1,
      *      "barcode": "57954884154",
      *      "name": "stylo rouge XR collection",
      *      "brand": "Maped",
      *      "price": "2.63",
      *      "created_at": "2024-06-02T06:33:57.160Z",
      *      "updated_at": null,
      *      "item_id": 1,
      *      "category_id": 2
      *    },
      *    {
      *      "article_id": 3,
      *      "barcode": "57954899644",
      *      "name": "céréale pétale croquant",
      *      "brand": "Frosties",
      *      "price": "5.65",
      *      "created_at": "2024-06-14T14:43:41.613Z",
      *      "updated_at": null,
      *      "item_id": 3,
      *      "category_id": 2
      *    },
      *    {
      *      "article_id": 4,
      *      "barcode": "574584189964",
      *      "name": "confiture de fraise",
      *      "brand": "Belle maman",
      *      "price": "3.02",
      *      "created_at": "2024-06-14T14:43:41.613Z",
      *      "updated_at": null,
      *      "item_id": 4,
      *      "category_id": 2
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
   .get(validationSchema(articleShowSchema, ['params']), catchHandlerController(ArticleController.show('Category')));

  export default articleRouter;
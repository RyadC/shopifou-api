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

  .get(catchHandlerController(categoryController.index))


  .post(validationSchema(categoryStoreSchema, ['body']), catchHandlerController(categoryController.store))

categoryRouter.route('/:id(\\d+)')

  .get(validationSchema(categoryShowSchema, ['params']), catchHandlerController(categoryController.show.bind(categoryController)))


  .patch(validationSchema(categoryUpdateSchema, ['params', 'body']), catchHandlerController(categoryController.update.bind(categoryController)))

  
  .delete(validationSchema(categoryDestroySchema, ['params']), catchHandlerController(categoryController.destroy.bind(categoryController)));


  export default categoryRouter;
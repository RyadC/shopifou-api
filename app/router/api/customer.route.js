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

  .get(catchHandlerController(CustomerController.index))

  .post(validationSchema(customerStoreSchema, ['body']), catchHandlerController(CustomerController.store))
;

customerRouter.route('/:id(\\d+)')

  .get(validationSchema(customerShowSchema), catchHandlerController(CustomerController.show()))

  .patch(validationSchema(updateSchema(paramIdSchema, customerUpdateSchema), ['body','params'], 'update'), CustomerController.update)

  .delete(validationSchema(customerDestroySchema, ['params']), CustomerController.destroy)
;

  export default customerRouter;
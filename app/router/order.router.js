// EXTERNAL MODULES
import { Router } from "express";

// INTERNAL MODULES
import orderController from "../controller/order.controller.js";
import catchHandlerController from "../libraries/catchController.handler.js";


const orderRouter = Router();

orderRouter.route('/')
  .get(catchHandlerController(orderController.index))
  .post(catchHandlerController(orderController.store));

orderRouter.route('/:id(\\d+)')
// -> On donne le contexte à la fonction pour récupérer la propriété RADIX_PARSEINT à travers le this de la méthode
  .get(catchHandlerController(orderController.show.bind(orderController)))
  .patch(catchHandlerController(orderController.update.bind(orderController)))
  .delete(catchHandlerController(orderController.destroy.bind(orderController)));

orderRouter.route('/article/:id(\\d+)')
  .get(catchHandlerController(orderController.showArticle.bind(orderController)));

orderRouter.route('/customer/:id(\\d+)')
  .get(catchHandlerController(orderController.showCustomer.bind(orderController)));

  

  export default orderRouter;
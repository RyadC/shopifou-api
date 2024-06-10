// EXTERNAL IMPORTS
import { Router } from "express";

// INTERNAL IMPORTS
import invoiceRouter from "./invoice.router.js";
import orderRouter from "./order.router.js";



const apiRouter = Router()

/**
 * @route   GET /api/invoice/…
 */
apiRouter.use('/invoice', invoiceRouter);

/**
 * @route   GET /api/order/…
 */
apiRouter.use('/order', orderRouter);

export default apiRouter;
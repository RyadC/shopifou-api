// EXTERNAL IMPORTS
import { Router } from "express";

// INTERNAL IMPORTS
import invoiceRouter from "./invoice.router.js";
import orderRouter from "./order.router.js";
import categoryRouter from "./category.router.js";
import articleRouter from "./article.router.js";



const apiRouter = Router()

/**
 * @route   GET /api/invoice/...
 */
apiRouter.use('/invoice', invoiceRouter);

/**
 * @route   GET /api/order/...
 */
apiRouter.use('/order', orderRouter);

/**
 * @route   GET /api/category/... 
 */
apiRouter.use('/category', categoryRouter);

/**
 * @route   GET /api/article/... 
 */
apiRouter.use('/article', articleRouter);

export default apiRouter;
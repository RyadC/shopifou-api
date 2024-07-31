// EXTERNAL IMPORTS
import { Router } from "express";

// INTERNAL IMPORTS
import invoiceRouter from "./invoice.router.js";
import orderRouter from "./order.router.js";
import categoryRouter from "./category.router.js";
import articleRouter from "./article.router.js";
import customerRouter from "./customer.route.js";
import signinRouter from "./signin.router.js";
import authenticationCheck from "../../middleware/authentication-check.middleware.js";

const apiRouter = Router();
/**
 *
 */
apiRouter.use("/signin", signinRouter);

/**
 * @route   GET /api/invoice/...
 */
apiRouter.use("/invoice", invoiceRouter);

/**
 * @route   GET /api/order/...
 */
apiRouter.use("/order", authenticationCheck, orderRouter);

/**
 * @route   GET /api/category/...
 */
apiRouter.use("/category", authenticationCheck, categoryRouter);

/**
 * @route   GET /api/article/...
 */
apiRouter.use("/article", authenticationCheck, articleRouter);

/**
 * @route   GET /api/customer/...
 */
apiRouter.use("/customer", authenticationCheck, customerRouter);

export default apiRouter;

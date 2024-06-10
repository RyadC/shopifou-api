import { Router } from "express";
import websiteController from "../../controller/website/website.controller.js";


const websiteRouter = Router();

websiteRouter.get('/', websiteController.index);

export default websiteRouter;
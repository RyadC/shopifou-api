import { Router } from "express";
import signinController from "../../controller/api/signin.controller.js";

const signinRouter = Router();

signinRouter
  .route("/")
  // For check user identity with his email and password
  .post(signinController.login);

export default signinRouter;

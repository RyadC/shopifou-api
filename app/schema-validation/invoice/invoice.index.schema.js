import Joi from "joi";

const invoiceIndexSchema = Joi.any()
  .id()
  .required();

export default invoiceIndexSchema;
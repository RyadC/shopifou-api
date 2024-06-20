import Joi from "joi";


const invoiceShowSchema = Joi.object({
  id: Joi.number()
    .min(1)
    .positive()
    .required()
});

export default invoiceShowSchema;

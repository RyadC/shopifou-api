import Joi from "joi";


const invoiceShowCustomerSchema = Joi.object({
  id: Joi.number()
    .min(1)
    .positive()
    .required()
});

export default invoiceShowCustomerSchema;

import Joi from "joi";


const invoiceDestroySchema = Joi.object({
  id: Joi.number()
    .min(1)
    .positive()
    .required()
});

export default invoiceDestroySchema;

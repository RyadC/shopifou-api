import Joi from "joi";

const orderShowCustomerSchema = Joi.object({
  id: Joi.number()
    .min(1)
    .positive()
    .required()
})


export default orderShowCustomerSchema;
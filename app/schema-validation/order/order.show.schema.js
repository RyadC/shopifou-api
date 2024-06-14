import Joi from "joi";

const orderShowSchema = Joi.object({
  id: Joi.number()
    .min(1)
    .positive()
    .required()
})


export default orderShowSchema;
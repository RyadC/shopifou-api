import Joi from "joi";

const orderShowArticleSchema = Joi.object({
  id: Joi.number()
    .min(1)
    .positive()
    .required()
})


export default orderShowArticleSchema;
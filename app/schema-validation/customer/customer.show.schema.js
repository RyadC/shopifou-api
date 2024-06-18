import Joi from "joi";

const customerShowSchema = Joi.object({
  id: Joi.number()
    .min(1)
    .positive()
    .required()
});

export default customerShowSchema;
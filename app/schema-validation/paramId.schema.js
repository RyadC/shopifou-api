import Joi from "joi";

const paramIdSchema = Joi.object({
  id: Joi.number()
    .min(1)
    .positive()
    .required()
});

export default paramIdSchema;
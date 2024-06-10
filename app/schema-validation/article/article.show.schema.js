import Joi from "joi";

const articleShowSchema = Joi.object({
  id: Joi.number()
    .min(1)
    .positive()
    .required()
});

export default articleShowSchema;
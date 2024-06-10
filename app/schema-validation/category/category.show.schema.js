import Joi from "joi";

const categoryShowSchema = Joi.object({
  id: Joi.number()
    .min(1)
    .positive()
    .required()
});

export default categoryShowSchema;
import Joi from "joi";

const categoryUpdateSchema = Joi.object()
  .pattern(/^/,
    Joi.alternatives().try(
      Joi.string().min(2),
      Joi.number().min(1).positive()
    )
);



export default categoryUpdateSchema;
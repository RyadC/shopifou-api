import Joi from "joi";

const categoryUpdateSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .required()
});



export default categoryUpdateSchema;
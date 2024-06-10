import Joi from "joi";

const categoryDestroySchema = Joi.object({
  id: Joi.number()
    .min(1)
    .positive()
    .required()
});




export default categoryDestroySchema;
import Joi from "joi";

const customerDestroySchema = Joi.object({
  id: Joi.number()
    .min(1)
    .positive()
    .required()
});




export default customerDestroySchema;
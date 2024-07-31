import Joi from "joi";


const orderDestroySchema = Joi.object({
  id: Joi.number()
    .min(1)
    .positive()
    .required()
});

export default orderDestroySchema;
import Joi from "joi";

const customerStoreSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .required(),

  address: Joi.string()
    .min(2)
    .required(),

  phone: Joi.string()
    .length(10)
    .required(),

  email: Joi.string()
    .email()
    .required(),
});

export default customerStoreSchema;
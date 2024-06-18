import Joi from "joi";

const customerUpdateSchema = Joi.object({
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
})
.min(1)
.max(4)
.or('name', 'address', 'phone', 'email');



export default customerUpdateSchema;
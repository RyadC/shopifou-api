import Joi from "joi";

const customerUpdateSchema = Joi.object({
  name: Joi.string()
    .min(2),

  address: Joi.string()
    .min(2),

  phone: Joi.string()
    .length(10),

  email: Joi.string()
    .email()
})
.min(1)
.max(4)
.or('name', 'address', 'phone', 'email');



export default customerUpdateSchema;
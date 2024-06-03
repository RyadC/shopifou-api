import Joi from "joi";


const invoiceUpdateSchema = Joi.object({

  total_value: Joi.number()
    .precision(2)
    .required(),
})

export default invoiceUpdateSchema;

import Joi from "joi";

const invoiceStoreSchema = Joi.object({
    reference: Joi.string()
      .pattern(/^(INV_){1}[0-9]{4}$/)
      .required(),

    total_value: Joi.number()
      .precision(2)
      .required(),
    
    customer_id: Joi.any()
      .id()
      .required(),

    order_id: Joi.any()
      .id()
      .required(),
});

export default invoiceStoreSchema;


/*
{
  "reference": "INV_0001",
  "total_value": 6.04,
  "customer_id": 2,
  "order_id": 4
} 
*/
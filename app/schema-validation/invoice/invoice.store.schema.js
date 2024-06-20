import Joi from "joi";

const invoiceStoreSchema = Joi.object({
    reference: Joi.string()
      .pattern(/^(INV_){1}[0-9]{4}$/)
      .required(),

    total_value: Joi.number()
      .precision(2)
      .min(0.01) // Une facture doit être positive, les gifts sont seulment si une vente est effectuée
      .required(),
    
    customer_id: Joi.number()
      .min(1)
      .positive()
      .required(),

    order_id: Joi.number()
      .min(1)
      .positive()
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
import Joi from "joi";

const orderStoreSchema = Joi.object({
  reference: Joi.string()
    .pattern(/^(OR_){1}[0-9]{4}$/)
    .required(),
  
  value: Joi.number()
    .precision(2)
    .min(0.01) // Une facture doit être positive, les gifts sont seulment si une vente est effectuée
    .required(),

  customer_id: Joi.number()
    .min(1)
    .positive()
    .required(),
});

export default orderStoreSchema;


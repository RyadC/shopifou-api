import Joi from "joi";


const invoiceUpdateSchema = Joi.object({
  total_value: Joi.number()
    .precision(2)
    .positive()
    .min(0.01) // Une facture doit être positive, les gifts sont seulment si une vente est effectuée
    .required() 
});


export default invoiceUpdateSchema;

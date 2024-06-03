import Joi from "joi";


const invoiceUpdateSchema = Joi.object()
  .pattern(/^/, 
  Joi.alternatives().try(
    Joi.number().precision(2),
        Joi.number().min(1).positive()
      )
  );


export default invoiceUpdateSchema;

import Joi from "joi";

const articleStoreSchema = Joi.object({
  barcode: Joi.alternatives()
    .try(
      Joi.string().length(13).pattern(/^[0-9]{13,}$/),
      Joi.string().length(8).pattern(/^[0-9]{8,}$/)
    )
    .required(),

  name: Joi.string()
    .min(2)
    .required(),

  brand: Joi.string()
    .min(2)
    .required(),

  price: Joi.number()
    .precision(2)
    .positive()
    // .min(0.01) // ? Ne pourrait-on pas avoir d'article à 0€ en gift ?
    .required()
});

export default articleStoreSchema;
import Joi from "joi";

const articleUpdateSchema = Joi.object({
  barcode: Joi.alternatives()
    .try(
      Joi.string().length(13).pattern(/^[0-9]{13,}$/),
      Joi.string().length(8).pattern(/^[0-9]{8,}$/)
    ),

  name: Joi.string()
    .min(2),

  brand: Joi.string()
    .min(2),

  price: Joi.number()
    .precision(2)
    .positive()
    // .min(0.01) // ? Ne pourrait-on pas avoir d'article à 0€ en gift ? 
  })
  .min(1)
  .max(4)
  .or('barcode', 'name', 'brand', 'price');



export default articleUpdateSchema;
import Joi from "joi";

const updateSchema = (paramsValidation, bodyValidation) => Joi.object({
  params: paramsValidation,
  body: bodyValidation
})
.unknown(true) // req est fournis avec d'autres propriétés


export default updateSchema;
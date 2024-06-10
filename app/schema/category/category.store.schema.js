import Joi from "joi";

const categoryStoreSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .required(),
});

export default categoryStoreSchema;
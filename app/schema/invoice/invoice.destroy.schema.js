import Joi from "joi";


const invoiceDestroySchema = Joi.any()
.id()
.required();

export default invoiceDestroySchema;

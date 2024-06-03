const validationSchema = (schema, reqProperty) => async (req, res, next
) => {
  console.log(reqProperty);
  try {
    for (const property of reqProperty) {
       await schema.validateAsync(req[property]);
    }
    next();
  } catch (err) {
    console.log('dans le validator', err.name, err.message);
    next(err);
  }
}

export default validationSchema;
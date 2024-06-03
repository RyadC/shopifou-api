const validationSchema = (schema, reqProperty) => async (req, res, next) => {
  try {
    await schema.validateAsync(req[reqProperty]);
    next();
  } catch (err) {
    console.log('dans le validator', err.name, err.message);
    next(err);
  }
}

export default validationSchema;
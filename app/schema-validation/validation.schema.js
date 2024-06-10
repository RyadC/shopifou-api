const validationSchema = (schema, reqProperty, method = undefined) => async (req, res, next
) => {
  console.log(reqProperty);
  try {
    for (const property of reqProperty) {
      if(method === 'update') {
        await schema.validateAsync(req);
      } else {
        await schema.validateAsync(req[property]);
      }
    }
    next();
  } catch (err) {
    console.log('dans le validator', err.name, err.message);
    next(err);
  }
}

export default validationSchema;
export function validateSchema(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(422).send(error.details.map((e) => e.message));
    }
    next();
  };
}

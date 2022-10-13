import { STATUS_CODE } from '../enums/statusCodes.js';

export function validateSchema(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res
        .status(STATUS_CODE.UNPROCESSABLE)
        .send(error.details.map((e) => e.message));
    }
    next();
  };
}

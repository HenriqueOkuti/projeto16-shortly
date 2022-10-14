import joi from 'joi';

const userSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  confirmPassword: joi.ref('password'),
});

const userLoginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

export { userSchema, userLoginSchema };

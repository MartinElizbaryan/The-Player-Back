import Joi from "joi"

export default {
  createUserSchema: {
    body: Joi.object({
      username: Joi.string()
        .min(3)
        .max(50)
        .pattern(/^[a-zA-Z]+$/)
        .required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(8).max(25).alphanum().required(),
      rePassword: Joi.string().required().valid(Joi.ref("password")),
    }),
  },
  findUserSchema: {
    body: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).max(25).alphanum().required(),
    }),
  },
//   forgotPasswordSchema: {
//     body: Joi.object({
//       email: Joi.string().email().required(),
//     }),
//   },
//   verifyCodeSchema: {
//     body: Joi.object({
//       code: Joi.string()
//         .pattern(/^[0-9]+$/)
//         .length(6)
//         .required(),
//     }),
//   },
//   changePasswordSchema: {
//     body: Joi.object({
//       password: Joi.string().min(8).max(15).alphanum().required(),
//       confirmPassword: Joi.string().required().valid(Joi.ref("password")),
//       code: Joi.string()
//         .pattern(/^[0-9]+$/)
//         .length(6)
//         .required(),
//     }),
//   },
}

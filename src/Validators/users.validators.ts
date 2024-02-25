import joi from 'joi'

export const registerUserSchema = joi.object({
  f_name: joi.string().min(3).required(),
  l_name: joi.string().min(3).required(),
  cohort_no:joi.string().required(),
  password: joi.string().required()
});
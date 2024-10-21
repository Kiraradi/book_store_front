import * as yup from "yup";

export const SingUpSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/)
      .required(),
    passwordReplay: yup
      .string()
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/)
      .required(),
  })
  .test(
    "test passwords",
    "passwords don't match",
    ({ email, password, passwordReplay }) => {
      return password !== passwordReplay;
    }
  )
  .required();

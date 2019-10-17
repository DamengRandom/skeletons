import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email address (eg: xxx@xxx.xxx)')
    .max(50, 'Must not beyond 50 characters')
    .required(),
  message: Yup.string()
    .min(2, 'Must have at least two characters')
    .max(500, 'Must not beyond 500 characters')
    .required()
});

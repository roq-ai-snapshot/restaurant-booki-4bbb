import * as yup from 'yup';

export const menuValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().integer().required(),
  availability: yup.boolean().required(),
  restaurant_id: yup.string().nullable().required(),
  billing_id: yup.string().nullable(),
});

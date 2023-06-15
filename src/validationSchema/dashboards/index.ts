import * as yup from 'yup';

export const dashboardValidationSchema = yup.object().shape({
  company_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});

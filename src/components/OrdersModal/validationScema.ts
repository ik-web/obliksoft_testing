import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  order: Yup.string()
    .required('Required'),
  fullName: Yup.string()
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  fieldValue: Yup.string()
    .required('Required'),
});

export default validationSchema;

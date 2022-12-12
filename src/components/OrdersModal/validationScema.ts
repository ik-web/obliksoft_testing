import * as Yup from 'yup';

const phoneRegExp = /^\+?[1-9][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{3}$/;

const validationSchema = Yup.object().shape({
  order: Yup.string()
    .required('Required'),
  fullName: Yup.string()
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Required'),
  usersGroup: Yup.string()
    .required('Required'),
  language: Yup.string()
    .required('Required'),
  newField: Yup.string()
    .required('Required'),
  fieldValue: Yup.string()
    .required('Required'),
});

export default validationSchema;

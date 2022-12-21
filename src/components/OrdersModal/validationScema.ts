import * as Yup from 'yup';
import parsePhoneNumber from 'libphonenumber-js'

const validationSchema = Yup.object().shape({
  order: Yup.string()
    .required('Required'),
  fullName: Yup.string()
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  phoneNumber: Yup.string()
    .test('phone', 'phoneNumber is not valid', (value) => (
      !!parsePhoneNumber(`+${value}`)?.isValid()
    ))
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

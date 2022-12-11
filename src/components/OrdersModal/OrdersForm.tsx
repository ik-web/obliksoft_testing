import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Formik, Form } from 'formik';

import { formFields } from './FormFields/formFields';
import { setIsModal } from '../../store/reducers/modalSlice';
import { useAppDispatch } from '../../hooks/customHooks';
import validationSchema from './validationScema';
import { CustomTextField } from './FormFields/CustomTextFields';

export interface FormValues {
  order: string;
  fullName: string;
  email: string;
  fieldValue: string;
}

const initialValues: FormValues = {
  order: '',
  fullName: '',
  email: '',
  fieldValue: '',
};

const StyledSubmitButton = styled(Button)(({ theme }) => ({
  padding: '10px 16px',
  fontSize: '16px',
  lineHeight: 1.25,
  fontWeight: 500,
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: '4px',
  '&:hover': {
    color: theme.palette.common.white,
    background: theme.palette.primary.main,
  },
}));

const OrdersForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const hundleSubmit = (values: FormValues) => {
    console.log('Submit', values);
    dispatch(setIsModal());
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={hundleSubmit}
      validationSchema={validationSchema}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Box sx={{ p: '10px 16px 22px' }}>
            <Grid container sx={{ gap: '10px 23px' }}>
              {formFields.map((field) => (
                <Grid item key={field.label}>
                  <CustomTextField
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    label={field.label}
                  />
                </Grid>
              ))}
            </Grid>

            <Box textAlign={'right'} sx={{ mt: '120px' }}>
              <StyledSubmitButton
                variant='outlined'
                type='submit'
                disabled={isSubmitting}
                onClick={submitForm}
              >
                Додати користувача
              </StyledSubmitButton>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default OrdersForm;

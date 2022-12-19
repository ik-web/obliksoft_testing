import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Formik, Form } from "formik";

import validationSchema from "./validationScema";
import { FormFields } from "./FormFields/FormFields";
import { useNavigate } from "react-router-dom";

export interface FormValues {
  order: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  usersGroup: string;
  language: string;
  newField: string;
  fieldValue: string;
};

const initialValues: FormValues = {
  order: "",
  fullName: "",
  email: "",
  phoneNumber: "",
  usersGroup: "",
  language: "",
  newField: "",
  fieldValue: "",
};

const StyledSubmitButton = styled(Button)(({ theme }) => ({
  padding: "10px 16px",
  fontSize: "16px",
  lineHeight: 1.25,
  fontWeight: 500,
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: "4px",
  "&:hover": {
    color: theme.palette.common.white,
    background: theme.palette.primary.main,
  },
}));

const OrdersForm: React.FC = () => {
  const navigate = useNavigate();

  const hundleSubmit = (values: FormValues) => {
    console.log("Submit", values);
    navigate("/table");
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={hundleSubmit}
      validationSchema={validationSchema}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Box sx={{ p: "10px 16px 22px" }}>
            <Grid container sx={{ gap: "10px 23px" }}>
              {FormFields.map(({ id, component }) => (
                <Grid item key={id}>
                  {component}
                </Grid>
              ))}
            </Grid>

            <Box textAlign={"right"} sx={{ mt: "120px" }}>
              <StyledSubmitButton
                variant="outlined"
                type="submit"
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

import React from "react";
import { styled, TextField } from "@mui/material";
import { FormLabel, Typography } from "@mui/material";
import { useField } from "formik";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.divider,
  },
  "& .MuiOutlinedInput-input": {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: 1.7,
    boxSizing: "border-box",
    height: 40,
    width: "275px",
    padding: "8px 12px",
    "&::placeholder": {
      fontStyle: "italic",
      fontWeight: 300,
      color: theme.palette.grey[100],
    },
  },
  "& .MuiFormHelperText-root": {
    display: "none",
  },
}));

export const CustomTextField: React.FC<any> = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const isValid = meta.touched && !meta.error;
  const isInvalid = meta.touched && !!meta.error;
  
  const handleFocus = () => {
    if (!meta.touched) {
      helpers.setTouched(true);
    }
  }

  return (
    <>
      <FormLabel sx={{ m: 0 }}>
        <Typography variant="h3">{label}</Typography>
      </FormLabel>

      <StyledTextField
        {...field}
        {...props}
        error={isInvalid}
        color={isValid ? 'success' : ''}
        onFocus={handleFocus}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: isValid && '#28A745',
          }
        }}
      />
    </>
  );
};

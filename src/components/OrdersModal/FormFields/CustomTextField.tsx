import React, { ChangeEvent } from "react";
import { styled, TextField } from "@mui/material";
import { FormLabel, Typography, FormControl } from "@mui/material";
import { useField } from "formik";

export const StyledTextField = styled(TextField)(({ theme }) => ({
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
  "& fieldset": {
    borderColor: theme.palette.divider,
  },
  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
    borderWidth: "1px",
  },
  "& .MuiFormHelperText-root": {
    display: "none",
  },
}));

export const CustomTextField: React.FC<any> = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const isValid = meta.touched && !meta.error;
  const isInvalid = meta.touched && !!meta.error;

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue: string = e.target.value;

    if (!meta.touched) {
      helpers.setTouched(true);
    }

    if (field.onChange !== null) {
      helpers.setValue(inputValue);
      field.onChange(inputValue);
    }
  };

  return (
    <FormControl>
      <FormLabel htmlFor={field.name} sx={{ m: 0 }}>
        <Typography variant="h3">{label}</Typography>
      </FormLabel>

      <StyledTextField
        {...field}
        {...props}
        id={field.name}
        error={isInvalid}
        color={isValid ? "success" : ""}
        onChange={handleValueChange}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: isValid && "#28A745",
          },
        }}
      />
    </FormControl>
  );
};

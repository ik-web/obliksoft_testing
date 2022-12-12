import React from "react";
import { FormLabel, Typography, FormControl } from "@mui/material";
import { useField } from "formik";
import PhoneInput from "react-phone-input-2";
import { theme } from "../../../theme";
import "react-phone-input-2/lib/style.css";
import "./CustomPhoneField.scss";

const classes = {
  container: {
    border: `1px solid ${theme.palette.divider}`,
  },
  isInvalid: {
    borderColor: theme.palette.error.main,
  },
  isValid: {
    borderColor: theme.palette.success.main,
  }
};

const getBorderColorByValidation = (
  isValid: boolean,
  isInvalid: boolean
): {} => {
  if (isValid) return { ...classes.container, ...classes.isValid };
  if (isInvalid) return { ...classes.container, ...classes.isInvalid };
  return classes.container;
};

const CustomPhoneField: React.FC<any> = (props) => {
  const [field, meta, helpers] = useField(props);
  const isValid = meta.touched && !meta.error;
  const isInvalid = meta.touched && !!meta.error;

  const handleFocus = () => {
    if (!meta.touched) {
      helpers.setTouched(true);
    }
  };

  const handleValueChange = (phoneNumber: string) => {
    helpers.setTouched(true);
    helpers.setValue(phoneNumber);

    if (field.onChange !== null) {
      field.onChange(phoneNumber);
    }
  };

  return (
    <FormControl>
      <FormLabel htmlFor={field.name} sx={{ m: 0 }}>
        <Typography variant="h3">{props.label}</Typography>
      </FormLabel>
      
      <PhoneInput
        {...props}
        {...field}
        id={field.name}
        name={field.name}
        containerStyle={getBorderColorByValidation(isValid, isInvalid)}
        onFocus={handleFocus}
        onChange={handleValueChange}
        onlyCountries={["ua", "ge", "gb", "br", "br"]}
        prefix=""
        inputProps={{ name: field.name }}
        autocompleteSearch={true}
      />
    </FormControl>
  );
};

export default CustomPhoneField;

import React, { useRef, useState } from "react";
import { FormLabel, Typography, FormControl } from "@mui/material";
import { useField } from "formik";
import PhoneInput from "react-phone-input-2";
import { theme } from "../../../theme";
import "react-phone-input-2/lib/style.css";
import "./CustomPhoneField.scss";
import Inputmask from "inputmask";

const classes = {
  container: {
    border: `1px solid ${theme.palette.divider}`,
  },
  isInvalid: {
    borderColor: theme.palette.error.main,
  },
  isValid: {
    borderColor: theme.palette.success.main,
  },
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
  const inputRef = useRef();
  const input: any = inputRef.current;
  const [inputMask, setInputMask] = useState<string>("");
  const [field, meta, helpers] = useField(props);
  const isValid = meta.touched && !meta.error;
  const isInvalid = meta.touched && !!meta.error;

  const handleValueChange = (phoneNumber: string, country: any) => {
    if (country.format) {
      const maskFormat = country.format
        .split("")
        .map((el: string) => (el === "." ? "9" : el))
        .join("");

      if (maskFormat !== inputMask) {
        setInputMask(maskFormat);
      }
    }

    if (!meta.touched) {
      helpers.setTouched(true);
    }

    if (field.onChange !== null) {
      helpers.setValue(phoneNumber);
      field.onChange(phoneNumber);
    }
  };

  if (input) {
    Inputmask(inputMask).mask(input);
  }

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
        onChange={handleValueChange}
        prefix=""
        inputProps={{
          name: field.name,
          ref: inputRef,
          placeholder: !field.value ? props.placeholder : "",
        }}
        containerStyle={getBorderColorByValidation(isValid, isInvalid)}
      />
    </FormControl>
  );
};

export default CustomPhoneField;

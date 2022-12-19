import React, { ChangeEvent } from "react";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import { styled } from "@mui/material/styles";
import { useField } from "formik";
import { FormLabel, MenuItem, Typography, FormControl } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { theme } from "../../../theme";

const StyledSelect = styled(Select)(({ theme }) => ({
  "& .MuiOutlinedInput-input": {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: 1.7,
    boxSizing: "border-box",
    height: 40,
    width: "275px",
    padding: "8px 12px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.divider,
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderWidth: "1px",
  },
  "& .MuiFormHelperText-root": {
    display: "none",
  },
  "& .MuiSelect-icon": {
    color: theme.palette.primary.main,
    marginRight: "4px",
  },
  "& .MuiSelect-iconOpen": {
    transform: "none",
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  height: 40,
  padding: "8px 14px 8px 4px",
  borderBottom: `1px solid ${theme.palette.divider}`,
  "&:first-of-type": {
    padding: "8px 10px 8px 14px",
    "&:hover": {
      borderRadius: "4px 4px 0 0",
      background: "none",
    },
  },
  "&:last-of-type": {
    borderBottom: "none",
    "&:hover": {
      borderRadius: "0 0 4px 4px",
    },
  },
  "&.Mui-selected": {
    background: "none",
  },
}));

const StyledRadio = styled(Radio)(({ theme }) => ({
  width: 40,
  height: 40,
  color: theme.palette.primary.main,
}));

const StyledSelectedOptionIcon = styled(TripOriginIcon)(({ theme }) => ({
  stroke: theme.palette.primary.main,
  strokeWidth: 3,
  width: 20,
}));

const CustomSelect: React.FC<any> = ({ label, ...props }) => {
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

      <StyledSelect
        {...field}
        {...props}
        id={field.name}
        error={isInvalid}
        color={isValid ? "success" : ""}
        onChange={handleValueChange}
        IconComponent={ExpandMoreIcon}
        renderValue={(selected) => (selected ? selected : props.hint)}
        displayEmpty
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: isValid && theme.palette.success.main,
          },
        }}
        MenuProps={{
          sx: {
            top: "-41px",
          },
          MenuListProps: {
            sx: {
              border: `1px solid ${theme.palette.divider}`,
            },
          },
        }}
      >
        <StyledMenuItem
          value={meta.value}
          sx={{ justifyContent: "space-between" }}
        >
          <ListItemText primary={props.hint} />
          <KeyboardArrowUpIcon color="primary" />
        </StyledMenuItem>

        {props.options.map((option: string) => (
          <StyledMenuItem key={option} value={option}>
            <StyledRadio
              checked={meta.value.indexOf(option) > -1}
              checkedIcon={<StyledSelectedOptionIcon />}
            />
            <ListItemText primary={option} />
          </StyledMenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

export default CustomSelect;

import React, { useState, ChangeEvent } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import ForwardOutlinedIcon from "@mui/icons-material/ForwardOutlined";
import { styled } from "@mui/material/styles";

import {
  selectTotalPages,
  setCurrentPage,
} from "../../store/reducers/ordersSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/customHooks";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    boxSizing: "border-box",
    display: "block",
    width: 52,
    height: 30,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "4px 0 0 4px",
    padding: "7px 8px",
    fontSize: "14px",
    color: "#2F2525",

    outline: "none",
    "&::placeholder": {
      position: "relative",
      right: "2px",
      color: theme.palette.grey[100]
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    display: "none",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  minWidth: 30,
  height: 30,
  padding: 0,
  background: theme.palette.primary.main,
  borderRadius: "0 4px 4px 0",
  boxShadow: "none",
}));

const PaginationInput: React.FC = () => {
  const { currentPage } = useAppSelector((state) => state.ordersReducer);
  const totalPages = useAppSelector(selectTotalPages);
  const dispatch = useAppDispatch();

  const [page, setPage] = useState<string>("");

  const handleClick = (): void => {
    if (+page > 0 && +page <= totalPages) {
      dispatch(setCurrentPage(+page));
    }

    setPage("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const page: string = e.target.value;
    if (+page > 0 && +page <= totalPages) {
      setPage(page);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography sx={{ mr: "9px" }}>Перейти на сторінку</Typography>

      <StyledTextField
        onChange={handleChange}
        value={page}
        placeholder="|"
        type="number"
      />

      <StyledButton variant="contained" onClick={handleClick} disableElevation>
        <ForwardOutlinedIcon />
      </StyledButton>

      <Typography sx={{ ml: "24px" }}>
        Сторінка <Typography variant="overline">{currentPage}</Typography> з{" "}
        {totalPages}
      </Typography>
    </Box>
  );
};

export default PaginationInput;

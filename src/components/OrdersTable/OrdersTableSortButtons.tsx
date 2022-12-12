import React from "react";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled } from "@mui/material/styles";

import { sortASC } from "../../store/reducers/ordersSlice";
import { sortDESC } from "../../store/reducers/ordersSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/customHooks";

const StyledButtonsContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "2px",
  marginLeft: "20px",
});

const StyledIconButton = styled(IconButton)({
  width: 8,
  height: 8,
  padding: 0,
});

const OrdersTableSortButtons: React.FC = () => {
  const isSortBy = useAppSelector((state) => state.ordersReducer.sortDateBy);
  const dispatch = useAppDispatch();

  const getIconColor = (sortType: "asc" | "desc") =>
    isSortBy === sortType ? "primary" : "secondary";

  const onSortASC = () => {
    dispatch(sortASC());
  };
  const onSortDesc = () => {
    dispatch(sortDESC());
  };

  return (
    <StyledButtonsContainer>
      <StyledIconButton onClick={onSortASC}>
        <KeyboardArrowUpIcon
          sx={{ width: 14, height: 14 }}
          color={getIconColor("asc")}
        />
      </StyledIconButton>

      <StyledIconButton onClick={onSortDesc}>
        <KeyboardArrowDownIcon
          sx={{ width: 14, height: 14 }}
          color={getIconColor("desc")}
        />
      </StyledIconButton>
    </StyledButtonsContainer>
  );
};

export default OrdersTableSortButtons;

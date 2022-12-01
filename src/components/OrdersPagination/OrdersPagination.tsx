import React from "react";
import { Box } from "@mui/material";

import PaginationInput from "./PaginationInput";
import PaginationButtons from "./PaginationButtons";
import { useAppSelector } from "../../hooks/customHooks";
import { selectTotalPages } from "../../store/reducers/ordersSlice";

const OrdersPagination: React.FC = () => {
  const totalPages = useAppSelector(selectTotalPages);

  return (
    <Box
      id="pagination"
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "20px 12px 42px",
      }}
    >
      {totalPages > 1 && (
        <>
          <PaginationButtons />
          <PaginationInput />
        </>
      )}
    </Box>
  );
};

export default OrdersPagination;

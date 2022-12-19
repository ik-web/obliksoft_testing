import React from "react";
import { Box, styled } from "@mui/material";

import OrdersPagination from "./OrdersPagination/OrdersPagination";
import OrdersTable from "./OrdersTable/OrdersTable";

const StyledPageContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "1200px",
  height: "100vh",
  margin: "0 auto",
  padding: "0 3px",
});

const OrdersPage = () => {
  return (
    <StyledPageContainer>
      <OrdersTable />
      <OrdersPagination />
    </StyledPageContainer>
  );
};

export default OrdersPage;

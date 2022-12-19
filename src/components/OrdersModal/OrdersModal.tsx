import React from "react";
import { Box, styled } from "@mui/material";

import OrdersModalTop from "./OrdersModalTop";
import OrdersForm from "./OrdersForm";

const StyledBackdrop = styled(Box)({
  backgroundColor: "background.default",
});

const StyledModalWindow = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "606px",
  backgroundColor: theme.palette.background.paper,
  boxShadow: "0px 4px 30px rgba(4, 20, 32, 0.1)",
  borderRadius: "4px",
}));

const OrdersModal: React.FC = () => {
  return (
    <div>
      <StyledBackdrop>
        <StyledModalWindow>
          <OrdersModalTop />
          <OrdersForm />
        </StyledModalWindow>
      </StyledBackdrop>
    </div>
  );
};

export default OrdersModal;

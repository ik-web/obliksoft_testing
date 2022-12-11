import React from "react";
import Box from "@mui/material/Box";

import OrdersTable from "./components/OrdersTable/OrdersTable";
import OrdersPagination from "./components/OrdersPagination/OrdersPagination";
import OrdersModal from "./components/OrdersModal/OrdersModal";

const App: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "1200px",
        height: "100vh",
        margin: "0 auto",
        padding: "0 3px",
      }}
    >
      <OrdersModal />
      <OrdersTable />
      <OrdersPagination />
    </Box>
  );
};

export default App;

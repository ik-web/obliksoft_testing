import { createHashRouter as createRouter, Navigate } from "react-router-dom";
import OrdersModal from "../components/OrdersModal/OrdersModal";
import OrdersPage from "../components/OrdersPage/OrdersPage";

export const router = createRouter([
  {
    path: "/",
    element: <Navigate to="/table" />,
  },
  {
    path: "/table",
    element: <OrdersPage />,
  },
  {
    path: "/modal",
    element: <OrdersModal />,
  },
]);

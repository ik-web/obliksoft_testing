import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";

import OrdersRow from "./OrdersRow";
import OrdersTableSortButtons from "./OrdersTableSortButtons";
import {
  selectOrders,
  setTotalOrdersOnPage,
} from "../../../store/reducers/ordersSlice";
import { sortASC } from "../../../store/reducers/ordersSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/customHooks";
import { getTotalOrdersOnPage } from "../../../helpers/getTotalOrdersOnPage";

const StyledTable = styled(Table)(({ theme }) => ({
  tableLayout: "fixed",
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    ...theme.typography.h2,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.grey[100],
    "&:last-child": {
      display: "flex",
    },
  },
}));

const StyledTableBody = styled(TableBody)(({ theme }) => ({
  borderLeft: "26px solid transparent",
  borderRight: "26px solid transparent",
  boxShadow: `0 0 0 1px ${theme.palette.divider}`,
}));

const OrdersTable: React.FC = () => {
  const orders = useAppSelector(selectOrders);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const totalOrdersOnPage: number = getTotalOrdersOnPage();

    dispatch(sortASC());
    dispatch(setTotalOrdersOnPage(totalOrdersOnPage));
  }, []);

  return (
    <TableContainer sx={{ flexGrow: 1, pt: "10px" }}>
      <StyledTable>
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ width: "50px" }}>
              {/* Order menu */}
            </StyledTableCell>

            <StyledTableCell sx={{ width: "259px" }}>Назва</StyledTableCell>
            <StyledTableCell sx={{ width: "457px" }}>URL</StyledTableCell>
            <StyledTableCell sx={{ width: "250px" }}>Автор</StyledTableCell>

            <StyledTableCell>
              Створено
              <OrdersTableSortButtons />
            </StyledTableCell>
          </TableRow>
        </TableHead>

        <StyledTableBody>
          {orders.map((order) => (
            <OrdersRow
              key={order.id}
              id={order.id}
              name={order.name}
              url={order.url}
              author={order.author}
              date={order.date}
              time={order.time}
            />
          ))}
        </StyledTableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default OrdersTable;

import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import {
  TableCell,
  tableCellClasses,
  TableRow,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import OrderMenu from "./OrderMenu";
import { OrderInterface } from "../../../react-app-env";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    paddingRight: "32px",
    lineHeight: "1.2",
    background: theme.palette.common.white,
    "&:first-of-type, &:last-of-type": {
      paddingRight: 0,
    }
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&:last-of-type': {
    borderBottom: 'none'
  }
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.secondary,
}));

const OrdersRow: React.FC<OrderInterface> = ({
  id,
  name,
  url,
  author,
  date,
  time,
}) => {
  return (
    <StyledTableRow sx={{ height: "65px" }}>
      <StyledTableCell>
        <OrderMenu id={id} />
      </StyledTableCell>

      <StyledTableCell>
        <Typography noWrap variant="h2">{name}</Typography>
      </StyledTableCell>

      <StyledTableCell>
        <StyledLink href={url} target={"_blank"}>
          <Typography noWrap>{url}</Typography>
        </StyledLink>
      </StyledTableCell>

      <StyledTableCell>
        <Typography noWrap>{author}</Typography>
      </StyledTableCell>

      <StyledTableCell>
        <Typography>{date}</Typography>
        <Box color='grey.100'>{time}</Box>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default OrdersRow;

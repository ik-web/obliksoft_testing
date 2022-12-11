import React from "react";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

type Props = {
  handleClose: () => void;
};

const StyledWrapperBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: 48,
  padding: "0 8px",
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const StyledCloseIcon = styled(CloseIcon)(({ theme }) => ({
  width: "20px",
  height: "20px",
  fill: theme.palette.grey[100],
}));

const OrdersModalTop: React.FC<Props> = ({ handleClose }) => {
  return (
    <StyledWrapperBox>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton aria-label="delete">
          <AddIcon color="primary" />
        </IconButton>

        <Typography variant="h2">Редагувати сутність</Typography>
      </Box>

      <IconButton aria-label="delete" onClick={handleClose}>
        <StyledCloseIcon />
      </IconButton>
    </StyledWrapperBox>
  );
};

export default OrdersModalTop;

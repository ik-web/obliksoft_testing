import React from "react";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const StyledModalTopContainer = styled(Box)(({ theme }) => ({
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

const OrdersModalTop: React.FC = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/table");
  };

  return (
    <StyledModalTopContainer>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton>
          <AddIcon color="primary" />
        </IconButton>

        <Typography variant="h2">Редагувати сутність</Typography>
      </Box>

      <IconButton onClick={handleClose}>
        <StyledCloseIcon />
      </IconButton>
    </StyledModalTopContainer>
  );
};

export default OrdersModalTop;

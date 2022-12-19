import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useNavigate } from "react-router-dom";

import { removeOrder } from "../../../store/reducers/ordersSlice";
import { useAppDispatch } from "../../../hooks/customHooks";

type Props = {
  id: number;
};

interface MenuItemInterface {
  name: string;
  icon: JSX.Element;
  handler: () => void;
};

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiMenu-list": {
    width: "272px",
    border: `1px solid ${theme.palette.divider}`,
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  width: "100%",
  gap: "13px",
  height: 50,
  padding: "0 13px",
  borderBottom: `1px solid ${theme.palette.divider}`,
  "&:last-of-type": {
    borderBottom: "none",
  },
}));

const StyledMenuIcon = styled(MoreVertIcon)(({ theme }) => ({
  fill: theme.palette.grey[50],
  width: "27px",
  height: "27px",
}));

const OrderMenu: React.FC<Props> = ({ id }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleEditMode = () => {
    navigate("/modal");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    dispatch(removeOrder(id));
    setAnchorEl(null);
  };

  const menuItems: MenuItemInterface[] = [
    {
      name: "Редагувати",
      icon: <EditOutlinedIcon color="primary" />,
      handler: handleEditMode,
    },
    {
      name: "Зберегти як файл",
      icon: <SaveAltIcon color="primary" />,
      handler: handleClose,
    },
    {
      name: "Видалити",
      icon: <DeleteOutlineIcon color="primary" />,
      handler: handleDelete,
    },
  ];

  return (
    <div>
      <IconButton
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ p: "4px" }}
      >
        <StyledMenuIcon />
      </IconButton>

      <StyledMenu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {menuItems.map((item: MenuItemInterface) => (
          <StyledMenuItem onClick={item.handler} key={item.name}>
            {item.icon}
            <Typography>{item.name}</Typography>
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </div>
  );
};

export default OrderMenu;

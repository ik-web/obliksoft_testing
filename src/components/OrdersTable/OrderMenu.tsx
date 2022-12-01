import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { removeOrder } from '../../store/reducers/ordersSlice';
import { useAppDispatch } from '../../hooks/customHooks';
import { setIsModal } from '../../store/reducers/modalSlice';

type Props = {
  id: number;
};

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiMenu-list': {
    width: '272px',
    padding: 0,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '4px',
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  width: '100%',
  gap: '13px',
  height: 50,
  padding: '0 13px',
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&:last-child': {
    borderBottom: 'none',
  },
}));

const StyledMenuIcon = styled(MoreVertIcon)(({ theme }) => ({
  fill: theme.palette.grey[50],
  width: '24px',
  height: '27px',
  '&:hover': {
    fill: theme.palette.grey[600],
  },
}));

const OrderMenu: React.FC<Props> = ({ id }) => {
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    dispatch(setIsModal());
    setAnchorEl(null);
  };

  const handleSave = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    dispatch(removeOrder(id));
    setAnchorEl(null);
  };

  const menuItems = [
    {
      name: 'Редагувати',
      icon: <EditOutlinedIcon color='primary' />,
      handler: handleEdit,
    },
    {
      name: 'Зберегти як файл',
      icon: <SaveAltIcon color='primary' />,
      handler: handleSave,
    },
    {
      name: 'Видалити',
      icon: <DeleteOutlineIcon color='primary' />,
      handler: handleDelete,
    },
  ];

  return (
    <div>
      <IconButton
        id='fade-button'
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          padding: '10px 0',
          '&:hover': { background: 'none' }
        }}
      >
        <StyledMenuIcon />
      </IconButton>

      <StyledMenu
        id='fade-menu'
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {menuItems.map((item) => (
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

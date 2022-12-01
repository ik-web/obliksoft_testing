import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { useAppDispatch, useAppSelector } from "../../hooks/customHooks";
import { setIsModal } from "../../store/reducers/modalSlice";

const OrdersModal: React.FC = () => {
  const { isModal } = useAppSelector((state) => state.modalReducer);
  const dispatch = useAppDispatch();
  const handleClose = () => dispatch(setIsModal());

  return (
    <div>
      <Modal
        open={isModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "606px",
            bgcolor: "background.paper",
            boxShadow: "0px 4px 30px rgba(4, 20, 32, 0.1)",
            borderRadius: "4px",
          }}
        >
        </Box>
      </Modal>
    </div>
  );
};

export default OrdersModal;

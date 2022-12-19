import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import usePagination from "@mui/material/usePagination";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { styled } from "@mui/material/styles";

import { useAppDispatch, useAppSelector } from "../../../hooks/customHooks";
import {
  selectTotalPages,
  setCurrentPage,
} from "../../../store/reducers/ordersSlice";

const StyledButton = styled(Button)(({ theme }) => ({
  padding: 0,
  border: `1px solid ${theme.palette.primary.main}`,
  "& .MuiButtonGroup-root": {
    width: "30px",
  },
}));

const PaginationButtons: React.FC = () => {
  const { currentPage } = useAppSelector((state) => state.ordersReducer);
  const totalPages = useAppSelector(selectTotalPages);
  const dispatch = useAppDispatch();

  const getSiblingCount = () =>
    currentPage < totalPages - 2 && currentPage > 3 ? 2 : 1.5;
  const getBoundaryCount = () =>
    currentPage < totalPages - 2 && currentPage > 3 ? -1 : 0;

  const { items } = usePagination({
    count: totalPages,
    page: currentPage,
    showFirstButton: true,
    showLastButton: true,
    siblingCount: getSiblingCount(),
    boundaryCount: getBoundaryCount(),
    onChange: (e, page) => {
      dispatch(setCurrentPage(page));
    },
  });

  useEffect(() => {
    if (currentPage > totalPages) {
      dispatch(setCurrentPage(totalPages));
    }
  }, [totalPages]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <ButtonGroup
        sx={{
          m: "0 38px 0 80px",
          height: 30,
          "& .MuiButtonGroup-grouped": { minWidth: "30px" },
        }}
      >
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          switch (type) {
            case "first":
              children = (
                <StyledButton type="button" {...item}>
                  <KeyboardDoubleArrowLeftIcon />
                </StyledButton>
              );
              break;

            case "last":
              children = (
                <StyledButton type="button" {...item}>
                  <KeyboardDoubleArrowRightIcon />
                </StyledButton>
              );
              break;

            case "start-ellipsis":
              children = <StyledButton sx={{ display: "none" }} />;
              break;

            case "end-ellipsis":
              children = <StyledButton sx={{ display: "none" }} />;
              break;

            case "previous":
              children = (
                <StyledButton type="button" {...item}>
                  <KeyboardArrowLeftIcon />
                </StyledButton>
              );
              break;

            case "next":
              children = (
                <StyledButton type="button" {...item}>
                  <KeyboardArrowRightIcon />
                </StyledButton>
              );
              break;
            default:
              children = (
                <StyledButton
                  type="button"
                  variant={selected ? "contained" : "outlined"}
                  disableElevation
                  {...item}
                >
                  {page}
                </StyledButton>
              );
          }

          return <React.Fragment key={index}>{children}</React.Fragment>;
        })}
      </ButtonGroup>
    </Box>
  );
};

export default PaginationButtons;

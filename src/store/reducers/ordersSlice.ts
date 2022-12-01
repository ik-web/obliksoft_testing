import { RootState } from './../index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import orders from '../../mock/orders';
import { OrderInterface } from '../../react-app-env';

export interface ordersState {
  allOrders: OrderInterface[],
  pageOrders: OrderInterface[],
  currentPage: number,
  totalPages: number,
  totalOrdersOnPage: number,
  sortDateBy: 'asc' | 'desc'
};

const initialState: ordersState = {
  allOrders: orders,
  pageOrders: [],
  currentPage: 1,
  totalPages: 0,
  totalOrdersOnPage: 0,
  sortDateBy: 'asc'
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setTotalOrdersOnPage: (state, action: PayloadAction<number>) => {
      state.totalOrdersOnPage = action.payload;
    },

    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },

    removeOrder: (state, action: PayloadAction<number>) => {
      state.allOrders = state.allOrders
        .filter(order => order.id !== action.payload);
    },

    sortASC: (state) => {
      state.allOrders = state.allOrders.sort((a, b) => (
        Date.parse(a.date) - (Date.parse(b.date))
      ));
      state.sortDateBy = 'asc';
    }, 

    sortDESC: (state) => {
      state.allOrders = state.allOrders.sort((a, b) => (
        Date.parse(b.date) - (Date.parse(a.date))
      ));
      state.sortDateBy = 'desc';
    }
  },
});

export const {
  removeOrder,
  sortASC,
  sortDESC,
  setTotalOrdersOnPage,
  setCurrentPage
} = ordersSlice.actions;

export const selectOrders = (state: RootState) => {
  const currentPage = state.ordersReducer.currentPage;
  const totalOrdersOnPage = state.ordersReducer.totalOrdersOnPage;
  const endOrder = currentPage * totalOrdersOnPage;
  const startOrder = endOrder - totalOrdersOnPage;

  return state.ordersReducer.allOrders.slice(startOrder, endOrder);
};

export const selectTotalPages = (state: RootState) => {
  const allOrdersLength = state.ordersReducer.allOrders.length;
  const totalOrdersOnPage = state.ordersReducer.totalOrdersOnPage;
  
  if (totalOrdersOnPage) {
    return Math.ceil(allOrdersLength / totalOrdersOnPage);
  }

  return 0;
};

export default ordersSlice.reducer;

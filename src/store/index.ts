import { configureStore } from '@reduxjs/toolkit';
import ordersReducer  from './reducers/ordersSlice';
import modalReducer  from './reducers/modalSlice';

export const store = configureStore({
  reducer: {
    ordersReducer,
    modalReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit';
import ordersReducer  from './reducers/ordersSlice';

export const store = configureStore({
  reducer: {
    ordersReducer  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;

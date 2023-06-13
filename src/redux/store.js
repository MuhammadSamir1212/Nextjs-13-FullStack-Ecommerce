'use client';

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Slices/cartSlice';
import shippingReducer from './Slices/shippingSlice';

export const store = configureStore({
  reducer: {
    cartStore: cartReducer,
    shippingStore: shippingReducer,
  },
});

'use client';
import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

//cookies
const shippingItems = Cookies.get('shipping') ? JSON.parse(Cookies.get('shipping')) : {};

const setItemFun = (item) => {
  Cookies.set('shipping', JSON.stringify(item));
};

//data
const initialState = {
  shipping: shippingItems,
};

export const shippingSlice = createSlice({
  name: 'shipping',
  initialState,
  reducers: {
    saveShipping: (state, action) => {
      return{
        ...state,
        ...state.shipping,
        ...action.payload,
      }
      //cookies
      setItemFun(state.shipping.map((item) => item));
    },
  },
});

export const {
  saveShipping,
} = shippingSlice.actions;
export default shippingSlice.reducer;

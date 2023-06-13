'use client';
import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

//cookies
const cartItems = Cookies.get('cart') ? JSON.parse(Cookies.get('cart')) : [];

const setItemFun = (item) => {
  Cookies.set('cart', JSON.stringify(item));
};

//data
const initialState = {
  cart: cartItems,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      const newItem = action.payload;
      const existItem = state.cart.findIndex((item) => item._id === newItem._id);
      if (existItem >= 0) {
        state.cart[existItem].quantity += 1;
      } else {
        const cartCount = { ...newItem, quantity: 1 };
        state.cart.push(cartCount);
      }
      //cookies
      setItemFun(state.cart.map((item) => item));
    },
    deleteCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
      //cookies
      setItemFun(state.cart.map((item) => item));
    },
    IncreaseItemQuantity: (state, action) => {
      const existItem = state.cart.findIndex(
        (item) => item._id === action.payload
      );
      state.cart[existItem].quantity += 1;
      //cookies
      setItemFun(state.cart.map((item) => item));
    },
    decreaseItemQuantity: (state, action) => {
      const existItem = state.cart.findIndex(
        (item) => item._id === action.payload
      );
      state.cart[existItem].quantity -= 1;
      //cookies
      setItemFun(state.cart.map((item) => item));
    },
  },
});

export const {
  addCart,
  deleteCart,
  IncreaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;

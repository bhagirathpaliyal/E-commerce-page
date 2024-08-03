// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './feature/cartSlice';
import authReducer from './feature/authSlice'
import productReducer from './feature/productSlice'
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth:authReducer,
    product:productReducer
  },
});

// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './feature/cartSlice';
import authReducer from './feature/authSlice'
import productReducer from './feature/productSlice'
import orderReducer from './feature/orderSlice'
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth:authReducer,
    product:productReducer,
    order:orderReducer
  },
});

// cartSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { db } from './firebaseConfig';

export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async (userId) => {
    const cartRef = db.collection('carts').doc(userId);
    const doc = await cartRef.get();
    return doc.exists ? doc.data().items : [];
  }
);

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ userId, item }, { getState }) => {
    const cartRef = db.collection('carts').doc(userId);
    const doc = await cartRef.get();
    if (doc.exists) {
      await cartRef.update({
        items: firebase.firestore.FieldValue.arrayUnion(item),
      });
    } else {
      await cartRef.set({
        items: [item],
      });
    }
    return item;
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default cartSlice.reducer;

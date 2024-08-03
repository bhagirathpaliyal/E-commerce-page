
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../../context/firebase';
import { collection, setDoc, doc, getDoc, addDoc, updateDoc, arrayUnion } from "firebase/firestore";



export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async (userId) => {
    const cartRef = db.collection('users').doc(userId);
    const doc = await cartRef.get();
    return doc.exists() ? doc.data().cart : [];
  }
);

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ userId, item }, { getState }) => {
    const cartRef = doc(db, "users", userId);
    const docc = await getDoc(cartRef);
    if (docc.exists()) {
      await updateDoc(cartRef, {
        cart: arrayUnion(item),
      });
    } else {
      await setDoc(cartRef, {
        cart: [item],
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
      })
      .addCase(addToCart.rejected, (state, action) => {
        console.log(action)
      });
  },
});

export default cartSlice.reducer;

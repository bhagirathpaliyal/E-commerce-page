
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../../context/firebase';
// import { collection, setDoc, doc, getDoc, addDoc, updateDoc, arrayUnion } from "firebase/firestore";



export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async (userId) => {
    const cartRef = db.collection('products').doc(userId);
    const doc = await cartRef.get();
    return doc.exists() ? doc.data().items : [];
  }
);

export const addProduct = createAsyncThunk(
  'product/addProduct',
  async ({ userId, item }, { getState }) => {
    const productRef = doc(db, "products", userId);
    const docc = await getDoc(productRef);
    if (docc.exists()) {
      await updateDoc(productRef, {
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

const productSlice = createSlice({
  name: 'product',
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        console.log(action)
      });
  },
});

export default productSlice.reducer;

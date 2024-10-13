
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../context/firebase';
import { collection, setDoc, doc, getDoc, addDoc, updateDoc, arrayUnion, getDocs } from "firebase/firestore";


export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async (userId) => {

    const cartRef = doc(db,'users',userId);

    const userObj = await getDoc(cartRef);
   const cart=userObj.data().cart ;
    const cartitem = [];
    for (const item of cart) {
      const productDoc = await getDoc(item)
      const productData = await productDoc.data()
      cartitem.push({
        ...productData,
        productRef: productDoc.ref
      })
    }  

    return cartitem;
  }
);

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ userId ,productRef}, { getState }) => {
    const cartRef = doc(db, "users", userId);
  
      await updateDoc(cartRef, {
        cart: arrayUnion(productRef),
      });
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
      .addCase(fetchCartItems.rejected, (state, action) => {
        console.log(action)
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

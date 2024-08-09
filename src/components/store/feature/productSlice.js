
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../../context/firebase';
import { collection, setDoc, doc, getDoc, addDoc, updateDoc, arrayUnion, getDocs } from "firebase/firestore";



export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async (userId) => {
    const productRef = collection(db,'products');

    const docs = await getDocs(productRef);
    const products = []
    for (const item of docs.docs) {
      const mainData = await item.data()
      const merchantData = await getDoc(mainData.merchantId)
      products.push({...mainData,
        merchant: await merchantData.data(),
        productRef: item.ref.path
      })
    }  
    return products;
  }
);

export const addProduct = createAsyncThunk(
  'product/addProduct',
  async ({ userId, item }, { getState }) => {
    const productsCollection = collection(db, "products");
      await addDoc(productsCollection, {
        ...item,
        merchantId: doc(db, "merchants", userId)
      });
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
      .addCase(fetchProduct.pending, (state, action) => {
       // state.items = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        //state.items = action.payload;
        console.log(action)
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        // state.items.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        console.log(action)
      });
  },
});

export default productSlice.reducer;

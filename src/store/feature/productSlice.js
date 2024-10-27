import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../context/firebase";
import {
  collection,
  setDoc,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  arrayUnion,
  getDocs,
} from "firebase/firestore";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const productRef = collection(db, "products");

    const docs = await getDocs(productRef);
    const products = [];
    let loopStartTime = Date.now();
    await new Promise((resolve, reject) => {
      let totalCount = docs.size;
      let intCount = 0;
      docs.forEach(async (item) => {
        console.log("Loop Start At => ", Date.now());
        const mainData = await item.data();
        const merchantData = await getDoc(mainData.merchantId);
        let merch = await merchantData.data();
        products.push({ ...mainData, merchant: merch, productRef: item.ref });
        intCount ++;
        if(intCount >= totalCount) {
          resolve();
        }
      })
    })

    console.log("Loop time => ", Date.now() - loopStartTime);
    return products;
  }
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async ({ userId, item }, { getState }) => {
    const productsCollection = collection(db, "products");
    await addDoc(productsCollection, {
      ...item,
      merchantId: doc(db, "merchants", userId),
    });
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      })
      .addCase(fetchProduct.pending, (state, action) => {
        // state.items = action.payload;
        state.status = "loading";
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        //state.items = action.payload;
        console.log(action);
        state.status = "error";
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        // state.items.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        console.log(action);
      });
  },
});

export default productSlice.reducer;

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
  query, where,

} from "firebase/firestore";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async ({userId}) => {
    const productRef = collection(db, "products");


    let docs = undefined;
    if(userId) {
      const merchantRef = doc(db,'merchants',userId);
      docs = await getDocs(query(productRef, where("merchantId", "==", merchantRef)))
    } else {
      docs = await getDocs(productRef)
    }


    const products = [];
    let loopStartTime = Date.now();
    let docss = await docs.docs
    for(const item of docss) {
      const mainData = await item.data();
      products.push({ ...mainData, merchantIdRef: mainData.merchantId, productRef: item.ref });
    }

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
    myItems: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.fulfilled, (state, action) => {
        if(action.meta?.arg?.userId) {
          state.myItems = action.payload;
        } else {
        state.items = action.payload;
        }
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

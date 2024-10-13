
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../context/firebase';
import { collection, setDoc, doc, getDoc, addDoc, updateDoc, arrayUnion, getDocs } from "firebase/firestore";



export const fetchOrder = createAsyncThunk(
  'order/fetchOrder',
  async () => {
    const orderRef = collection(db,'orders');

    const docs = await getDocs(orderRef);
    const orders = []
    for (const item of docs.docs) {
      const mainData = await item.data()
      const merchantData = await getDoc(mainData.merchantId)
      const userData = await getDoc(mainData.userId)
      const orderProduct = await getDoc(mainData.productRef)
     

      orders.push({orderedProducts: await orderProduct.data(),
        merchant: await merchantData.data(),
        user: await userData.data(),
        orderId: item.ref.id,
         status:mainData.status
     
      })
    }  
    return orders;
  }
);


export const createOrder = createAsyncThunk(
  'order/createOrder',
  async ({ userId,merchantId , productRef ,status}, { getState }) => {
    const ordersCollection = collection(db, "orders");
      await addDoc(ordersCollection, {
        userId:doc(db, "users", userId) ,
        merchantId,
        productRef,
        status
      });
  }
);




export const ChangeOrderStatus = createAsyncThunk(
  'order/ChangeOrderStatus',
  async ({  OrderId ,status}, { getState }) => {
    const ordersCollection = doc(db,'orders',OrderId);
 
    await updateDoc(ordersCollection, {
      status: status,
    });
  }
);

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchOrder.pending, (state, action) => {
        console.log(action)
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        
        console.log(action)
      })
      .addCase(createOrder.fulfilled, (state, action) => {
     
      })
      .addCase(createOrder.pending, (state, action) => {
        console.log(action)
      })
      .addCase(createOrder.rejected, (state, action) => {
        console.log(action)
      })
      .addCase(ChangeOrderStatus.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(ChangeOrderStatus.pending, (state, action) => {
        console.log(action)
      })
      .addCase(ChangeOrderStatus.rejected, (state, action) => {
        console.log(action)
      });
  },
});

export default orderSlice.reducer;

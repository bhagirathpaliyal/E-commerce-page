
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db, useFirebase } from '../../context/firebase';
import { collection, setDoc, doc, getDoc, addDoc, updateDoc, arrayUnion } from "firebase/firestore";


//LogIn User

export const logInUser = createAsyncThunk(
  'auth/logInUser',
  async ({ isMerchant, email, password, loginUserWithEmailAndPassword }, { getState }) => {

    const user = (await loginUserWithEmailAndPassword(email, password)).user
    const collectionName = isMerchant ? "merchants" : "users"
    const userRef = doc(db, collectionName, user.uid);
    const docc = await getDoc(userRef);
    if (docc.exists()) {
      return { ...user, isMerchant }
    } else {

      throw Error(`${isMerchant ? "Merchant" : "User"} not exist with this email`)
    }
  }
);



//Add user 

export const addUser = createAsyncThunk(
  'auth/adduser',
  async ({ isMerchant, name, email, password, signupUserWithEmailAndPassword }, { getState }) => {

    const user = await signupUserWithEmailAndPassword(email, password)
    const collectionName = isMerchant ? "merchants" : "users"
    const userRef = doc(db, collectionName, user.uid);
    const docc = await getDoc(userRef);
    if (docc.exists()) {
      throw Error(`${isMerchant ? "Merchant" : "User"} already exist with this email`)
    } else {
      await setDoc(userRef, {
        email,
        name
      });
    }
    return { ...user, isMerchant };
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    error: "",
    status: 'idle',
    user: undefined
  },
  reducers: {
    logOut(state) {
      state.user = null;

    },
    setUser(state, input) {
      state.user = input.payload
    }
  },
  extraReducers: (builder) => {
    builder
      //   .addCase(fetchCartItems.fulfilled, (state, action) => {
      //     state.items = action.payload;
      //   })
      .addCase(addUser.fulfilled, (state, action) => {
        state.error = ""
        state.user = action.payload
        localStorage.setItem('user', JSON.stringify(state.user))
      })
      .addCase(addUser.pending, (state, action) => {
        state.error = ""


      })
      .addCase(addUser.rejected, (state, action) => {
        state.error = action.error.message
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.error = ""
        state.user = action.payload
        localStorage.setItem('user', JSON.stringify(state.user))

      })
      .addCase(logInUser.rejected, (state, action) => {
        state.error = action.error.message
      })
  },
});
export const { logOut, setUser } = authSlice.actions;
export default authSlice.reducer;

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Men from './components/Men/Men';
import Home from './components/Home/Home';
import Women from './components/Women/Women';
import Jewelery from './components/Jewelery/Jewelery';
import Electronics from './components/Electronics/Electronics';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Profile from './components/Profile';
import AllProducts from './components/AllProducts';
import Products from './components/Products';
import Cart from './components/Cart';
import { useDispatch } from 'react-redux';
import { setUser } from "./components/store/feature/authSlice";
import { UserTypeSelector } from './components/UserTypeSelecctor';
import { UserTypeSelectorLogin } from './components/UserTypeSelecctorLogin';
import AddProducts from './components/AddProducts';
import Order from './components/Order/Order';
import OrderDetails from './components/Order/OrderDetails';


function App() {
const dispatch =useDispatch()

useEffect(()=>{

  dispatch(setUser(JSON.parse(localStorage.getItem('user'))))
  
},[])
  return (
   
      <BrowserRouter basename='E-commerce-page'>
        <div className="mx-auto">
          <Header />
          <Routes >
            <Route path="/" element={<Home />} />
            
            <Route path="/Login" element={<UserTypeSelectorLogin />} />
            <Route path="/SignUp" element={<UserTypeSelector />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Products" element={<Products/>} >
            <Route path="/Products/AllProducts" element={<AllProducts/>} />
            <Route path="/Products/Men" element={<Men />} />
            <Route path="/Products/Women" element={<Women />} />
            <Route path="/Products/Jewelery" element={<Jewelery />} />
            <Route path="/Products/Electronics" element={<Electronics />} />
            </Route>
            <Route path="/cart" element={<Cart />} />

            <Route path="/AddProducts" element={<AddProducts />} />
            <Route path="/Order" element={<Order />} />
            <Route path="/OrderDetails" element={<OrderDetails />} />
          </Routes>
        </div>
      </BrowserRouter>

  );
}

export default App;

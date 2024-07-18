import React from 'react';
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
import { FirebaseProvider } from './components/context/firebase';
import AllProducts from './components/AllProducts';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  return (
    <FirebaseProvider>
      <BrowserRouter basename='E-commerce-page'>
        <div className="mx-auto">
          <Header />
          <Routes >
            <Route path="/" element={<Home />} />
            
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Products" element={<Products/>} >
               <Route path="/Products/AllProducts" element={<AllProducts/>} />
               <Route path="/Products/Men" element={<Men />} />
               <Route path="/Products/Women" element={<Women />} />
               <Route path="/Products/Jewelery" element={<Jewelery />} />
               <Route path="/Products/Electronics" element={<Electronics />} />
            </Route>
            <Route path="/cart" element={<Cart />} />

          </Routes>
        </div>
      </BrowserRouter>
    </FirebaseProvider>
  );
}

export default App;

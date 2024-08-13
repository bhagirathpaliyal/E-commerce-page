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

function App() {
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    dispatch(setUser(JSON.parse(localStorage.getItem('user'))));
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <BrowserRouter basename='E-commerce-page'>
      <div className={`mx-auto ${darkMode ? 'dark' : ''}`}>
        <Header />
        <button onClick={toggleDarkMode} className="fixed top-[74px] right-2 p-2 bg-gray-800 text-white rounded ">
          Dark Mode
        </button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<UserTypeSelectorLogin />} />
          <Route path="/SignUp" element={<UserTypeSelector />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Products" element={<Products />}>
            <Route path="/Products/AllProducts" element={<AllProducts />} />
            <Route path="/Products/Men" element={<Men />} />
            <Route path="/Products/Women" element={<Women />} />
            <Route path="/Products/Jewelery" element={<Jewelery />} />
            <Route path="/Products/Electronics" element={<Electronics />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/AddProducts" element={<AddProducts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

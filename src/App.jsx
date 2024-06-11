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

function App() {
  return (
    <FirebaseProvider>
      <BrowserRouter>
        <div className="mx-auto">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Men" element={<Men />} />
            <Route path="/Women" element={<Women />} />
            <Route path="/Jewelery" element={<Jewelery />} />
            <Route path="/Electronics" element={<Electronics />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </FirebaseProvider>
  );
}

export default App;

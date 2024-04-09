import Men from "./components/Men/Men"
import Home from "./components/Home/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Women from "./components/Women/Women"
import Jewelery from "./components/Jewelery/Jewelery"
import Electronics from "./components/Electronics/Electronics"
import Header from "./components/Header/Header"
import Login from "./components/Login/Login"
import { useEffect, useState } from "react"  
import SignUp from "./components/SignUp/SignUp"

function App() {

  
 

  return (
    <> <BrowserRouter>
     <div className=" mx-auto ">
     <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Men" element={<Men />}/>
        <Route path="/Women" element={<Women />}/>
        <Route path="/Jewelery" element={<Jewelery />}/>
        <Route path="/Electronics" element={<Electronics  />}/>      
        <Route path="/Login" element={<Login/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
         
          
      </Routes>
      
      
    </div> </BrowserRouter>
    </>
  )
}

export default App;

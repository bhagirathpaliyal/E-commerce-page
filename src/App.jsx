import Men from "./components/Men/Men"
import Home from "./components/Home/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Women from "./components/Women/Women"
import Jewelery from "./components/Jewelery/Jewelery"
import Electronics from "./components/Electronics/Electronics"
import Header from "./components/Header/Header"
import Login from "./components/Login/Login"
import { useEffect, useState } from "react"  
import Footer from "./components/Footer/Footer"

function App() {

  
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, []);

// const [data, setdata] = useState('bp')
  return (
    <> <BrowserRouter>
     <div className=" mx-auto ">
     <Header/>
      <Routes>
        <Route path="/" element={<Home product={product}/>}/>
        <Route path="Men" element={<Men product={product}/>}/>
        <Route path="Women" element={<Women product={product}/>}/>
        <Route path="Jewelery" element={<Jewelery product={product}/>}/>
        <Route path="Electronics" element={<Electronics product={product} />}/>      
        <Route path="Login" element={<Login/>}/>  
      </Routes>
      
      
    </div> </BrowserRouter>
    </>
  )
}

export default App;

import Man from "./components/Man/Man"
import Home from "./components/Home/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Women from "./components/Women/Women"
import Jewelery from "./components/Jewelery/Jewelery"
import Electronics from "./components/Electronics/Electronics"
import Header from "./components/Header/Header"

function App() {


  return (
    <> <BrowserRouter>
     <h1 className="mx-auto  border-[2px] border-solid border-black">
     <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Man" element={<Man/>}/>
        <Route path="Women" element={<Women/>}/>
        <Route path="Jewelery" element={<Jewelery/>}/>
        <Route path="Electronics" element={<Electronics/>}/>      
      </Routes>
     
      
    </h1> </BrowserRouter>
    </>
  )
}

export default App;

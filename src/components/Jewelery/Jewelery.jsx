import { useEffect, useState } from "react";
import H_section0 from "../Home/H_section0";
import Footer from "../Footer/Footer";
import Item from "../Men/Item";

function Jewelery(){


            const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, []);
    return(
        <div className="bg-[#F1F1F1] flex flex-col gap-[50px]">
            <H_section0/>



          
            <div className="flex  justify-evenly ">
              
            <Item image={product[1].image}/>
            <Item image={product[2].image}/>
            <Item image={product[3].image}/>
            <Item image={product[4].image}/>
            <Item image={product[5].image}/>
            </div>

            
            <Footer/>
        
        
        </div>
    )
}

export default Jewelery;


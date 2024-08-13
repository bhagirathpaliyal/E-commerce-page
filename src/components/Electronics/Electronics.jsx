
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import H_section0 from "../Home/H_section0";
import Item from "../Item";

function Electronics(){

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((data) => {
        
        setProduct(data);
      });
  }, []);

    return(
        <div className="bg-primary flex flex-col gap-[50px] ">
      <H_section0 />

      <div className="flex flex-wrap gap-[20px] justify-center">
        {product.length > 0 &&
          product.slice(0, 10).map((item, index) => (
            <Item key={index} index={index+20} data={item} />
          ))}
      </div>

     <Footer/>
    </div>
    )
}

export default Electronics;
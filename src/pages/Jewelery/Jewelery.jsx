import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";

import Item from "../../components/Item";

function Jewelery() {


  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((data) => {
        
        setProduct(data);
      });
  }, []);


  

  return (
    <div className="bg-secondary flex flex-col gap-[50px] ">

      <div className="flex flex-wrap gap-[20px] justify-center">
        {product?.length > 0 &&
          product?.slice(0, 10).map((item, index) => (  
            <Item key={index} index={index+20} data={item} />
          ))}
      </div>

     <Footer/>
    </div>
  );
}

export default Jewelery;

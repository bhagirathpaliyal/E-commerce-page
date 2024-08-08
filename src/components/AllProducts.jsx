import { useEffect, useState } from "react";
import Footer from "./Footer/Footer";
import H_section0 from "./Home/H_section0";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./store/feature/productSlice";

function AllProducts(){

  // const [product, setProduct] = useState([]);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => {
        
  //       setProduct(data);
  //     });
  // }, []);
  const user = useSelector((state) =>  {
    return state.auth.user
  });

  const product = useSelector((state) => state.product.items);
const dispatch =useDispatch()

  useEffect(() => {
    if (user) {
      dispatch(fetchProduct(user.uid));
    }
  }, [user, dispatch]);

    return(
        <div className="bg-[#0055E9] flex flex-col gap-[50px] ">
            <H_section0/>
           

      <div className="flex flex-wrap gap-[20px] justify-center">
        {product.length > 0 &&
          product.slice(0, 100).map((item, index) => (
            <Item key={index} index={index+20} data={item} name={item.merchant.name}/>
          ))}
      </div>

     <Footer/>
    </div>
           
    )
}

export default AllProducts;
import { Link } from "react-router-dom";
import man from "./../../assets/man.jpg";
import women from "./../../assets/women.jpg";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";


function H_section2() {

  const [dataa, setdataa] = useState(['Electronics','Jewelery','Man','Women']);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
       
        setdataa(data);
      });
  }, []);

  return (
    <div id="section2" className="bg-primary flex flex-col gap-[50px] items-center justify-center text-white p-[50px]">
      <div className="text-[30px] md:text-[40px] ">Our collection</div>
      <div className="flex w-[100%] justify-evenly flex-wrap">

        
{/* 1 */}


{dataa?.map((data,index)=>

  (
    <Link key={index} to={data==="men's clothing" ?"/Products/Men":data ==="women's clothing"?"/Products/Women":`/Products/${data}`}>
<div  className="max-w-[200px]  pb-[20px] flex flex-col items-center gap-[10px] ">
  <div className="w-[100%] rounded-[10px] overflow-hidden"><img src={man} alt="image" /></div>
  <div>
    <h2 >{data}</h2>
  </div>

</div></Link>
  )
)}
  





 </div>

<Link to={'/Products/AllProducts'}><Button  
color="inherit" >See All Products</Button></Link>


    </div>
  );
}

export default H_section2;

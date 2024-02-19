import { Link } from "react-router-dom";
import man from "./../../assets/man.jpg";
import women from "./../../assets/women.jpg";
import { useEffect, useState } from "react";


function H_section2() {

  const [dataa, setdataa] = useState(['Electronics','Jewelery','Man','Women']);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setdataa(data);
      });
  }, []);

  return (
    <div className="bg-[#0055E9] flex flex-col gap-[50px] items-center justify-center text-white p-[50px]">
      <div className="text-[40px] ">Our collection</div>
      <div className="flex w-[100%] justify-evenly flex-wrap">

        
{/* 1 */}


{dataa?.map((data,index)=>

  (
    <Link key={index} to={data==="men's clothing" ?"men":data ==="women's clothing"?"women":data}>
<div  className=" max-w-[200px] pb-[20px] flex flex-col items-center gap-[10px]">
  <div className="w-[100%] rounded-[10px] overflow-hidden"><img src={man} alt="image" /></div>
  <div>
    <h2 >{data}</h2>
  </div>

</div></Link>
  )
)}
  





{/* 2 */}
{/* 
<Link to='women'>
<div className=" max-w-[200px] pb-[20px] flex flex-col items-center gap-[10px]">
  <div className="w-[100%] rounded-[10px] overflow-hidden"><img src={man} alt="image" /></div>
  <div>
    <h2>{dataa[3]}</h2>
  </div>

</div>
</Link> */}




{/* 3 */}

{/* <Link to='jewelery'>
<div className=" max-w-[200px] pb-[20px] flex flex-col items-center gap-[10px]">
  <div className="w-[100%] rounded-[10px] overflow-hidden"><img src={man} alt="image" /></div>
  <div>
    <h2>{dataa[1]}</h2>
  </div>

</div>
</Link> */}




{/* 4 */}
{/* <Link to='electronics'>
<div className=" max-w-[200px] pb-[20px] flex flex-col items-center gap-[10px]">
  <div className="w-[100%] rounded-[10px] overflow-hidden"><img src={man} alt="image" /></div>
  <div>
    <h2>{dataa[0]}</h2>
  </div>

</div></Link> */}




       





      
      </div>
    </div>
  );
}

export default H_section2;

import { useEffect, useState } from "react";
import H_section0 from "../Home/H_section0";

function Jewelery(){
const [data, setdata] = useState("")
    useEffect(() => {
         
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(dataa=>setdata(dataa))
    
    
    }, [])
    
 
            console.log(data);
    return(
        <div>
            <H_section0/>
         {/* {data.Map((data)=>{
            <div>{data}</div>
         })} */}
         jewelery
        </div>
    )
}

export default Jewelery;
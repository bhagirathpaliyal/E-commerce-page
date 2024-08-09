import { useState } from "react";
import { useSelector } from "react-redux";


function Item(prop){
    const user = useSelector((state) =>  {
        return state.auth.user
      });

    return(
        <div key={prop.index} className="flex flex-col gap-[10px] border-[2px] border-solid border-brown-900  w-[200px] bg-[#F1F1F1] rounded-[6px] overflow-hidden p-[10px] relative">
            <div><img src={`https://picsum.photos/id/${prop.index}/200/300`} alt="Image"  className='bg-cover w-full  h-[200px] rounded-[6px]'/></div>
            <div className=' flex flex-col h-[100%] justify-between'>

                <h2 className='text-[12px] md:text-[15px] font-medium'>{prop.data.name}</h2>
                <p className="text-[12px] md:text-[15px] font-medium">{prop?.name}</p>
            <h2 className='text-[12px] md:text-[15px]font-bold  '>Price : {prop.data.price }</h2>
           
          { !user?.isMerchant &&<button className="bg-[#0055E9] text-white rounded-[5px] ">Add To Cart</button>}

          
            </div>
            
                  
        </div>
    )
}

export default Item;
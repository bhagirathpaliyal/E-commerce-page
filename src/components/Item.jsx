import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store/feature/cartSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Item(prop){
    const user = useSelector((state) =>  {
        return state.auth.user
      });
      const products = useSelector((state) => state.product.items);

      const dispatch =useDispatch()
console.log(window.location.href.includes('Cart'))
    return(
        <div key={prop.index} className="flex flex-col gap-[10px] border-[2px] border-solid border-brown-900  w-[200px] bg-[#F1F1F1] rounded-[6px] overflow-hidden p-[10px] relative">
            <div><LazyLoadImage src={prop.data?.image ? prop.data?.image:`https://picsum.photos/id/${prop.index}/200/300`} alt="Image"  className='bg-cover w-full  h-[200px] rounded-[6px]'/></div>
            <div className=' flex flex-col h-[100%] justify-between'>

                <h2 className='text-[12px] md:text-[15px] font-medium'>{prop.data?.name}</h2>
                <p className="text-[12px] md:text-[15px] font-medium">{prop?.name}</p>
            <h2 className='text-[12px] md:text-[15px]font-bold  '>Price : {prop.data?.price }</h2>
           
          { !user?.isMerchant && !prop.isCart ?<button onClick={()=>{dispatch(addToCart({userId: user.uid,productRef: prop.reference}))}} className="bg-[#0055E9] text-white rounded-[5px] ">Add To Cart</button>:''}

          
            </div>
            
                  
        </div>
    )
}

export default Item;
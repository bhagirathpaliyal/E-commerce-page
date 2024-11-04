import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartItems } from '../store/feature/cartSlice';
import Item from './Item'; 
import ItemSkeleton from './ItemSkeleton';


const Cart = () => {
  // const [loading, setLoading] = useState(true); 
  
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const status = useSelector((state) => state.cart.status);
  const skeleton=[...Array(12).keys()]
  const loading = !status || status == 'loading' || status == 'idle'

useEffect(() => {
  if ((!status || status == 'error' || status == 'idle')) {
    dispatch(fetchCartItems(user.uid));
  }
}, [user,dispatch]);
console.log(cartItems)
  return (
    <div className='mt-[66px] flex flex-col gap-4 items-center'>
      <h2>Your Cart</h2>
      
      {loading ? (
       <div className=' flex gap-[20px] flex-wrap mx-[50px]'>
    {  skeleton.map((data,index) => (
      <ItemSkeleton key={index}/>
    ))}
       </div>
      ) : (
        <>
         
          <div className='flex flex-wrap gap-[20px] justify-center '>
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <Item key={index} index={index + 20}  data={item} isCart={true} />
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

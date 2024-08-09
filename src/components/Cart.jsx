
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartItems, addToCart } from './store/feature/cartSlice';
import Item from './Item';


const Cart = () => {
  const user = useSelector((state) =>  {
    return state.auth.user
  });
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartStatus = useSelector((state) => state.cart.status);

  useEffect(() => {
    if (user) {
      dispatch(fetchCartItems(user.uid));
    }
  }, [user, dispatch]);

  
console.log(cartItems)
  return (
    <div className='mt-[66px] flex flex-col gap-4 items-center '>
      <h2>Your Cart</h2>
      {cartStatus === 'loading' && <p>Loading...</p>}
      <ul>
        {cartItems.map((item, index) => (
          <Item key={index}  index={index+20} data={item} isCart={true}/>
        ))}
      </ul>
    


   

    </div>
  );
};

export default Cart;

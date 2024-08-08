
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartItems, addToCart } from './store/feature/cartSlice';


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

  const handleAddToCart = (item) => {
    if (user) {
      dispatch(addToCart({ userId: user.uid, item }));
    }
  };

  return (
    <div className='mt-[66px] flex flex-col gap-4 items-center text-[50px]'>
      {/* <h2>Your Cart</h2>
      {cartStatus === 'loading' && <p>Loading...</p>}
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} - {user.email}</li>
        ))}
      </ul> */}
      {/* <button onClick={() =>{ handleAddToCart({ name: 'Sample Item 123 dfkjh' })}}>
        Add Sample Item to Cart
      </button>


    {cartItems?'Go and Add Items':<ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} - {user.email}</li>
        ))}
      </ul> } */}

      <h4>Cart</h4>
      <p className='text-[26px]'>Working on it...</p>

    </div>
  );
};

export default Cart;

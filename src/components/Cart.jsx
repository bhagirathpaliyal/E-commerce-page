
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartItems, addToCart } from './store/feature/cartSlice';

import {useFirebase } from './context/firebase';

const Cart = () => {
  const { user } = useFirebase();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartStatus = useSelector((state) => state.cart.status);
console.log(user)
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
    <div className='mt-[66px]'>
      <h2>Your Cart</h2>
      {cartStatus === 'loading' && <p>Loading...</p>}
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <button onClick={() =>{ handleAddToCart({ name: 'Sample Item' }),console.log('added')}}>
        Add Sample Item to Cart
      </button>
    </div>
  );
};

export default Cart;

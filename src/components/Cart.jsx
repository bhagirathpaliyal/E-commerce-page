
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartItems, addToCart } from './store/feature/cartSlice';

import { firebaseAuth } from './context/firebase';

const Cart = () => {
  const { currentUser } = firebaseAuth();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartStatus = useSelector((state) => state.cart.status);

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchCartItems(currentUser.uid));
    }
  }, [currentUser, dispatch]);

  const handleAddToCart = (item) => {
    if (currentUser) {
      dispatch(addToCart({ userId: currentUser.uid, item }));
    }
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartStatus === 'loading' && <p>Loading...</p>}
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <button onClick={() => handleAddToCart({ name: 'Sample Item' })}>
        Add Sample Item to Cart
      </button>
    </div>
  );
};

export default Cart;

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartItems } from './store/feature/cartSlice';
import Item from './Item';
import Loader from 'react-js-loader'; 
import ItemSkeleton from './ItemSkeleton';


const Cart = () => {
  const [loading, setLoading] = useState(true); 
  
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartStatus = useSelector((state) => state.cart.status);
const skeleton=[1,2,3,4,5,6,7,8,9,10,11,12];
  useEffect(() => {
    if (user) {
      dispatch(fetchCartItems(user.uid))
        .finally(() => setLoading(false)); 
    }
  }, [user, dispatch]);

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
          {cartStatus === 'loading' && <p>Loading...</p>}
          <div className='flex flex-wrap gap-[20px] justify-center '>
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <Item key={index} index={index + 20} data={item} isCart={true} />
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

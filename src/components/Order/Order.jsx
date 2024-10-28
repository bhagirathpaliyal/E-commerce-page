import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrder } from '../../store/feature/orderSlice';
import ItemSkeleton from '../ItemSkeleton';
import OrderCard from './OrderCard';


const Order = () => {
  // const [loading, setLoading] = useState(true); 
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const orderItems = useSelector((state) => state.order.items);
  const status = useSelector((state) => state.order.status);
const skeleton=[...Array(10).keys()]
const loading = !status || status == 'loading' || status == 'idle'

useEffect(() => {
  if ((!status || status == 'error' || status == 'idle')) {
    dispatch(fetchOrder());
  }
}, [user,dispatch]);

  
console.log(orderItems)
  return (
    <div className='mt-[66px] flex flex-col gap-4 items-center'>
      <h2>Your order</h2>
      
      {loading ? (
       <div className=' flex flex-col gap-[20px]  mx-[50px]'>
    {  skeleton.map((data,index) => (
      <ItemSkeleton key={index}/>
    ))}
       </div>
      ) : (
        <>
  
          <div className='flex flex-col gap-[20px] justify-center '>
            {orderItems.length > 0 ? (
              orderItems.map((item, index) => (
                item?.user.email === user?.email && ( <OrderCard key={index}  data={item
                }  />)
              ))
            ) : (
              <p>Your order is empty.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Order;

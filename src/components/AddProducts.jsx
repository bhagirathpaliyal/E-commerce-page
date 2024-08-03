
        
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartItems, addToCart } from './store/feature/cartSlice';
import { addProduct, fetchProduct } from './store/feature/productSlice';


const AddProducts = () => {
  const user = useSelector((state) =>  {
    return state.auth.user
  });

  const [name, setName] = useState('')
  const [price ,setPrice]=useState(0)

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.items);
  const productstatus = useSelector((state) => state.product.status);

  useEffect(() => {
    if (user) {
      dispatch(fetchProduct(user.uid));
    }
  }, [user, dispatch]);

  

  const handleAddToCart = (item) => {
    if (user) {
      dispatch(addProduct({ userId: user.uid, item })).then(function(){dispatch(fetchProduct(user.uid))});
    }
  };

console.log(products)
console.log(user)
  return (
    <div className='mt-[66px] w-[100dvw] h-[100dvh] flex flex-col  justify-center items-center gap-2' >
      <h2>Add Your Product</h2>
      <label htmlFor="Product">Product Name</label>
      <input className='border p-1 rounded-[5px]' type="text" id='Product' onChange={(e)=>setName(e.target.value)} value={name}/>

      <label htmlFor="Price">Product Price</label>
      <input className='border p-1 rounded-[5px]' type="text" id='Price' onChange={(e) => setPrice(e.target.value)} value={price}/>

      <button onClick={() =>{ handleAddToCart({ name: name,price:price }),setName(''),setPrice(0)}}>
        Add Product
      </button>


      <div className='mt-[30px]'>
      <ul className='flex gap-6'>
        {products.map((item, index) => (
            <div className='border p-2 rounded-[5px]'>
            
          <li> {item.merchant.name}</li>
          <li key={index}>{item.name} </li>
          <li>{item.price} </li>
          
          </div>
        ))}
      </ul>
      </div>

      

    </div>
  );
};

export default AddProducts;

   
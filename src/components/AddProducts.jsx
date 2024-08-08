
        
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartItems, addToCart } from './store/feature/cartSlice';
import { addProduct, fetchProduct } from './store/feature/productSlice';
import Item from './Item';


const AddProducts = () => {
  const user = useSelector((state) =>  {
    return state.auth.user
  });

  const [name, setName] = useState('')
  const [price ,setPrice]=useState(null)

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.items);
  const productstatus = useSelector((state) => state.product.status);

  useEffect(() => {
    if (user) {
      dispatch(fetchProduct(user.uid));
    }
  }, [user, dispatch]);

  

  const handleAddProducts = (item) => {
    if (user) {
      dispatch(addProduct({ userId: user.uid, item })).then(()=>dispatch(fetchProduct(user.uid)));
    }
  };

console.log(products)
console.log(user)
  return (
    <div className='mt-[66px] w-[100dvw] h-[100dvh] flex flex-col  justify-center items-center gap-2' >
      <div className='border flex flex-col gap-2 p-4 rounded-[5px]'>
      <h2 className='text-center'>Add Your Product</h2>
      <label htmlFor="Product">Product Name</label>
      <input className='border p-1 rounded-[5px]' type="text" id='Product' onChange={(e)=>setName(e.target.value)} value={name}/>

      <label htmlFor="Price">Product Price</label>
      <input className='border p-1 rounded-[5px]' type="number" id='Price' onChange={(e) => setPrice(e.target.value)} value={price}/>

      <button className='border p-1 rounded-[5px]' onClick={() =>{ handleAddProducts({ name: name,price:price }),setName(''),setPrice(0)}}>
        Add Product
      </button>
      </div>

      <div className='mt-[30px] flex flex-col items-center gap-5'>
      <div>Your poducts</div>
      <ul className='flex gap-6 flex-wrap'>
      {products.map((item, index) => (
        item.merchant.email==user.email ?
        <Item key={index} index={index+20} data={item} name={item.merchant.name}/>:''
        ))}
      </ul>
      </div>



      

    </div>
  );
};

export default AddProducts;

   
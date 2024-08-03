
        
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

console.log(cartItems)
console.log(user)
  return (
    <div className='mt-[66px] w-[100dvw] h-[100dvh] flex flex-col  justify-center items-center gap-2' >
      <h2>Add Your Product</h2>
      <label htmlFor="Product">Product Name</label>
      <input type="text" id='Product' onChange={(e)=>setName(e.target.value)} value={name}/>

      <label htmlFor="Price">Product Price</label>
      <input type="text" id='Price' onChange={(e) => setPrice(e.target.value)} value={price}/>

      <button onClick={() =>{ handleAddToCart({ name: name,price:price }),setName(''),setName(0)}}>
        Add Product
      </button>


      <div>
      <ul>
        {cartItems.map((item, index) => (
            <div>
                <li> {user.email}</li>
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

   
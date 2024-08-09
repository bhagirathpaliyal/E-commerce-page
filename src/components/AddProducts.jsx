import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct, addProduct } from './store/feature/productSlice';
import Item from './Item';
import { Checkbox, TextField, Button, FormControlLabel, FormGroup } from '@mui/material';

const AddProducts = () => {
  const user = useSelector((state) => state.auth.user);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [isChecked, setIsChecked] = useState(false);

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
      dispatch(addProduct({ userId: user.uid, item })).then(() => dispatch(fetchProduct(user.uid)));
    }
  };

  const handleSubmit = () => {
    handleAddProducts({ name, price, image });
    setName('');
    setPrice('');
    setImage('');
  };

  return (
    <div className='mt-[166px] flex flex-col justify-center items-center gap-2'>
      <div className='border flex flex-col gap-2 p-4 rounded-[5px]'>
        <h2 className='text-center'>Add Your Product</h2>
        
        <TextField
          label="Product Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <TextField
          label="Product Price"
          variant="outlined"
          type="number"
          fullWidth
          margin="normal"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
            }
            label="Random Image"
          />
        </FormGroup>

        {!isChecked && (
          <TextField
            label="Product Image URL"
            variant="outlined"
            fullWidth
            margin="normal"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder='Enter image URL'
          />
        )}

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ marginTop: 2 }}
        >
          Add Product
        </Button>
      </div>

      <div className='mt-[30px] flex flex-col items-center gap-5'>
        <div>Your Products</div>
        <ul className='flex gap-6 flex-wrap'>
          {products.map((item, index) => (
            item.merchant.email === user.email ? (
              <Item key={index} index={index + 20} data={item} name={item.merchant.name} />
            ) : null
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddProducts;

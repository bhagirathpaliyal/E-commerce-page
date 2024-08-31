import React, { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import OrderDetails from './OrderDetails';


const OrderCard = ({ data }) => {
  const handleDetailsClick = () => {
    // Handle button click here
    console.log('Order Details clicked');
  };
  const [isPopupOpen, setIsPopupOpen] = useState(false);

 

  return (
    <Card className="flex flex-col sm:flex-row items-center p-5 rounded-lg shadow-lg">
      <img
        src={data.orderedProducts.image}
        alt="Product"
        className="h-auto w-[250px] sm:w-[200px] mb-4 sm:mb-0 sm:mr-4 rounded-lg object-cover"
      />
      <CardContent className="flex flex-col">
        <Typography variant="h6" gutterBottom>
          OrderId: <span className="font-bold">{data.orderId}</span>
        </Typography>
        <Typography variant="body1">
          Product Name: <span className="font-bold">{data.orderedProducts.name}</span>
        </Typography>
        <Typography variant="body1">
          Product Price: <span className="font-bold">${data.orderedProducts.Price}</span>
        </Typography>
        <Typography variant="body1">
          Merchant Name: <span className="font-bold">{data.merchant?.name}</span>
        </Typography>
      
       
      <Button variant="contained" color="primary" className="p-4" onClick={() => setIsPopupOpen(true)}>
        Show Order Details
      </Button>
      <OrderDetails
        open={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        order={data.orderId}
        orderStatus={data.orderStatus}
      />
  
      </CardContent>
    </Card>
  );
};

export default OrderCard;

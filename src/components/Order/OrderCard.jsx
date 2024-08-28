import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '10px',
  padding: theme.spacing(2),
  boxShadow: theme.shadows[3],
}));

const OrderCard = ({ data }) => {
  return (
    <StyledCard className="border p-5 rounded-[10px] flex  items-center">
      <img
        src={data.orderedProducts.image}
        alt="Product"
        className="h-[300px] w-auto mb-4"
      />
      <CardContent>
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
      </CardContent>
    </StyledCard>
  );
};

export default OrderCard;

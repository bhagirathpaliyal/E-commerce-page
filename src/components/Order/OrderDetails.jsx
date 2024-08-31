import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import { CheckCircle, LocalShipping, Cancel } from '@mui/icons-material';

const OrderDetails = ({ open, onClose, order,orderStatus }) => {
  // Status icons
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Ordered':
        return <CheckCircle color="primary" />;
      case 'Shipped':
        return <LocalShipping color="action" />;
      case 'Delivered':
        return <CheckCircle color="success" />;
      default:
        return <Cancel color="error" />;
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle className="bg-blue-500 text-white">Order Details</DialogTitle>
      <DialogContent>
        <div className="space-y-4">
          <Typography variant="h6" className="font-bold">
            Order ID: <span className="font-normal">{order}</span>
          </Typography>
          <Typography variant="body1">
            Status: <span className="font-bold">{orderStatus}</span>
          </Typography>
          <div className="flex items-center space-x-2">
            {['Ordered', 'Shipped', 'Delivered'].map((stage) => (
              <div key={stage} className="flex items-center space-x-1">
                {getStatusIcon(stage)}
                <Typography variant="body2">{stage}</Typography>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderDetails;

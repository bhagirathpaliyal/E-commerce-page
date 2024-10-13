import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Stepper, Step, StepLabel } from '@mui/material';
import { CheckCircle, LocalShipping, Cancel } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { ChangeOrderStatus } from '../../store/feature/orderSlice';

const OrderDetails = ({ open, onClose, order, orderStatus }) => {
  const steps = ['Ordered', 'Shipped', 'Delivered'];

  const dispatch = useDispatch();
  const [status, setStatus] = useState('delivered')
  const getActiveStep = (status) => {
    switch (status) {
      case 'Ordered':
        return 0;
      case 'Shipped':
        return 1;
      case 'Delivered':
        return 2;
      default:
        return -1; 
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
            Status: <span className="font-bold">{status}</span>
          </Typography>
          <Stepper activeStep={getActiveStep(orderStatus)} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>
                  <div className="flex items-center space-x-4">
                    {label === 'Delivered' ? (
                      <CheckCircle color="success" />
                    ) : label === 'Shipped' ? (
                      <LocalShipping color="action" />
                    ) : (
                      <CheckCircle color="primary" />
                    )}
                    <Typography variant="body2">{label}</Typography>
                  </div>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
        <Button  color="primary"    onClick={() => {
              dispatch(
                ChangeOrderStatus({OrderId:order,status})
              );
            }}>
        ChangeOrderStatus
        </Button>
        
      </DialogActions>
    </Dialog>
  );
};

export default OrderDetails;

import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { ChangeOrderStatus } from "../../store/feature/orderSlice";

const OrderDetails = ({ open, onClose, order, orderStatus }) => {
  const steps = ["Ordered", "Shipped", "Delivered"];
  const dispatch = useDispatch();
  const [status, setStatus] = useState(orderStatus);

  const user = useSelector((state) => {
    return state.auth.user;
  });

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

  const handleChangeStatus = () => {
    if (status !== orderStatus) {
      dispatch(ChangeOrderStatus({ OrderId: order, status }));
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle className="bg-blue-500 text-white">
        Order Details
      </DialogTitle>
      <DialogContent>
        <div className="space-y-4">
          <Typography variant="h6" className="font-bold">
            Order ID: <span className="font-normal">{order}</span>
          </Typography>
          <Typography variant="body1">
            Status:
            {user?.isMerchant ? (
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="border p-2 rounded"
              >
                <option value="Ordered">Ordered</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
              </select>
            ) : (
              <span className="font-bold">{orderStatus}</span>
            )}
          </Typography>
          <Stepper activeStep={getActiveStep(orderStatus)} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
        {user?.isMerchant && (
          <Button color="primary" onClick={handleChangeStatus}>
            Change Order Status
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default OrderDetails;

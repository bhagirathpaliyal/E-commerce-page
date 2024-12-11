import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";

function ConfirmationDialog({ open, title, content, onConfirm, onCancel }) {
  return (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button variant="contained" color="primary" onClick={onConfirm}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmationDialog;

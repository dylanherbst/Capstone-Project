import React, { useState } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ProductModal = ({ open, handleClose, product, onUpdate }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const handleChange = (event) => {
    setUpdatedProduct({
      ...updatedProduct,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdate = () => {
    onUpdate(updatedProduct);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <TextField
          label="Name"
          name="name"
          fullWidth
          value={updatedProduct.name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          label="Description"
          name="desc"
          fullWidth
          value={updatedProduct.desc}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          label="Price"
          name="price"
          fullWidth
          value={updatedProduct.price}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          label="Stock"
          name="stock"
          fullWidth
          value={updatedProduct.stock}
          onChange={handleChange}
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleUpdate}>
          Update
        </Button>
      </Box>
    </Modal>
  );
};

export default ProductModal;

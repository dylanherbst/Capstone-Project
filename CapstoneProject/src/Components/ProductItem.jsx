import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Modal,
  Box,
  TextField,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ProductItem = ({ product, onUpdate, onDelete }) => {
  const [open, setOpen] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState({
    ...product,
  });

  const handleOpen = () => {
    setUpdatedProduct({ ...product });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleUpdate = () => {
    onUpdate(updatedProduct);
    handleClose();
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{updatedProduct.name}</Typography>
        <Typography variant="body1">{updatedProduct.desc}</Typography>
        <Typography variant="body2">Price: ${updatedProduct.price}</Typography>
        <Typography variant="body2">Stock: {updatedProduct.stock}</Typography>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Update
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => onDelete(product.id)}
        >
          Delete
        </Button>
      </CardContent>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update Product
          </Typography>
          <TextField
            label="Name"
            name="name"
            value={updatedProduct.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Description"
            name="desc"
            value={updatedProduct.desc}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            name="price"
            type="number"
            value={updatedProduct.price}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Stock"
            name="stock"
            type="number"
            value={updatedProduct.stock}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Box>
      </Modal>
    </Card>
  );
};

export default ProductItem;

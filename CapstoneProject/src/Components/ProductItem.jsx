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
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ImageNotSupportedIcon from "@mui/icons-material/ImageNotSupported";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 550,
  bgcolor: "background.paper",
  borderRadius: "15px",
  boxShadow: 14,
  p: 8,
};

const ProductItem = ({ product, onUpdate, onDelete }) => {
  const [open, setOpen] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });
  const imageUrl = `http://localhost:8081/${product.img}`;

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
    onUpdate(updatedProduct.id, updatedProduct);
    handleClose();
  };

  return (
    <>
      <TableRow>
        <TableCell sx={{ borderRight: "none", borderLeft: "none" }}>
          <Box
            sx={{
              width: 50,
              height: 50,
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "4px",
            }}
          >
            {product.img ? (
              <img
                src={imageUrl}
                alt={product.name}
                style={{ width: "100%", height: "auto" }}
              />
            ) : (
              <ImageNotSupportedIcon />
            )}
          </Box>
        </TableCell>
        <TableCell sx={{ borderRight: "none", borderLeft: "none" }}>
          {product.name}
        </TableCell>
        <TableCell sx={{ borderRight: "none", borderLeft: "none" }}>
          {product.stock}
        </TableCell>
        <TableCell sx={{ borderRight: "none", borderLeft: "none" }}>
          ${product.price}
        </TableCell>
        <TableCell sx={{ borderRight: "none", borderLeft: "none" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpen}
            size="small"
            sx={{
              marginRight: "10px",
              padding: "4px 8px",
              minWidth: "auto",
              fontSize: "0.75rem",
            }}
          >
            <EditIcon />
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onDelete(product.id)}
            size="small"
            sx={{
              marginRight: "10px",
              padding: "4px 8px",
              minWidth: "auto",
              fontSize: "0.75rem",
              "&:hover": {
                backgroundColor: "#d32f2f",
              },
            }}
          >
            <DeleteIcon />
          </Button>
        </TableCell>
      </TableRow>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            marginBottom="20px"
          >
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
            multiline
            rows={3}
            sx={{
              ".MuiInputLabel-root": { fontSize: "0.8rem" },
              ".MuiInputBase-input": { fontSize: "0.8rem" },
            }}
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
    </>
  );
};
export default ProductItem;

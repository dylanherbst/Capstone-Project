import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "../Components/ProductItem";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Modal,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import CreateProductModal from "../Components/CreateProductModal";
import { Link } from "react-router-dom";

const style = {
  width: 900,
  bgcolor: "background.paper",
  p: 2,
  margin: "auto",
  marginBottom: "50px",
  //   height: "100%",
};

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false); // State for managing the visibility of the Create Product modal

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8081/api/products");
      setProducts(response.data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const updateProduct = async (id) => {
    try {
      console.log("Update product with id:", id);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8081/api/products/${id}`
      );
      fetchProducts(); // Refresh the product list
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 40px", // Adjust the padding as needed
          marginBottom: "20px",
        }}
      >
        <Typography variant="h5">Products</Typography>
        <Button
          variant="contained"
          color="primary"
          size="small"
          component={Link}
          to="/create" // Adjust the path to match your route for the Create Product page
        >
          Add Product
        </Button>
      </Box>

      <Box sx={style}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ borderLeft: "none", borderRight: "none" }}
                ></TableCell>
                <TableCell sx={{ borderLeft: "none", borderRight: "none" }}>
                  Product Name
                </TableCell>
                <TableCell sx={{ borderLeft: "none", borderRight: "none" }}>
                  Inventory
                </TableCell>
                <TableCell sx={{ borderLeft: "none", borderRight: "none" }}>
                  Price
                </TableCell>
                <TableCell sx={{ borderLeft: "none", borderRight: "none" }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <ProductItem
                  key={product.id}
                  product={product}
                  onUpdate={updateProduct}
                  onDelete={deleteProduct}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default ProductPage;

{
  /* {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onUpdate={updateProduct}
          onDelete={deleteProduct}
        />
      ))}
    </div>
  );
}; */
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "../Components/ProductItem";
import { Button } from "@mui/material";
import CreateProductModal from "../Components/CreateProductModal";

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

  const handleCreateProduct = () => {
    // Logic for creating a new product
    console.log("Creating new product...");
  };

  const handleAddProduct = () => {
    setOpen(false);
    fetchProducts(); // Refresh the product list
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Create New Product
      </Button>
      <CreateProductModal
        open={open}
        onClose={() => setOpen(false)}
        onAdd={handleAddProduct}
      />
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onUpdate={updateProduct}
          onDelete={deleteProduct}
        />
      ))}
    </div>
  );
};

export default ProductPage;

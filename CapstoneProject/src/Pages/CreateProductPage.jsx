import { useState } from "react";
import { useUserContext } from "../Context/UserContext";
import Button from "@mui/material/Button";
import { Card, CardContent, Typography, Box } from "@mui/material";
import NewProductForm from "../Components/CreateProductForm";
import CreateProductForm from "../Components/CreateProductForm";

export default function CreateProductPage() {
  const handleAdd = (newProduct) => {
    // Code to handle the addition of a new product
    console.log("Product added:", newProduct);
    // You can also update the state or perform other actions here
  };
  return (
    <>
      <CreateProductForm onAdd={handleAdd} />
    </>
  );
}

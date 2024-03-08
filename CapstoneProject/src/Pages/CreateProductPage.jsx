import { useState } from "react";
import { useUserContext } from "../Context/UserContext";
import Button from "@mui/material/Button";
import { Card, CardContent, Typography, Box } from "@mui/material";
import NewProductForm from "../Components/CreateProductForm";
import CreateProductForm from "../Components/CreateProductForm";
import NavBar from "../Components/NavBar";

export default function CreateProductPage() {
  const handleAdd = (newProduct) => {
    console.log("Product added:", newProduct);
  };
  return (
    <>
      <NavBar />
      <CreateProductForm onAdd={handleAdd} />
    </>
  );
}

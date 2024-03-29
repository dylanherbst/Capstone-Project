import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import axios from "axios";

const style = {
  width: 700,
  bgcolor: "background.paper",
  p: 2,
  margin: "auto",

  marginBottom: "60px",
  borderRadius: "20px",
};

const fieldStyle = {
  bgcolor: "background.paper",
  marginTop: "30px",
  marginBottom: "30px",
};

const CreateProductForm = ({ onAdd }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    desc: "",
    price: 0,
    stock: 0,
  });
  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => {
      const updatedProduct = { ...prevProduct, [name]: value };
      console.log(`Updated product state 2:`, updatedProduct);
      return updatedProduct;
    });
  };

  const handleAddProduct = async () => {
    const formData = new FormData();
    formData.append("name", newProduct.name);
    formData.append("desc", newProduct.desc);
    formData.append("price", newProduct.price);
    formData.append("stock", newProduct.stock);
    if (imageFile) {
      formData.append("img", imageFile);
    }
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    console.log("New product state before API call:", newProduct);
    try {
      const response = await axios.post(
        "http://localhost:8081/api/products",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      onAdd(response.data);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await handleAddProduct();
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 40px",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h5">Add Product</Typography>
      </Box>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          Information
        </Typography>

        <Box sx={{ ...fieldStyle, height: "80px" }}>
          <Typography variant="h10" component="h5" sx={{ marginBottom: "8px" }}>
            Product Name
          </Typography>
          <TextField
            id="name"
            label="Name"
            name="name"
            value={newProduct.name}
            onChange={handleChange}
            fullWidth
            sx={{
              ".MuiInputLabel-root": { fontSize: "0.8rem" },
            }}
          />
        </Box>
        <Box sx={{ ...fieldStyle, height: "140px" }}>
          <Typography variant="h10" component="h5">
            Product Description
          </Typography>
          <TextField
            id="description"
            label="Description"
            name="desc"
            value={newProduct.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={3}
            margin="normal"
            sx={{
              ".MuiInputLabel-root": { fontSize: "0.8rem" },
              ".MuiInputBase-input": { fontSize: "0.8rem" },
            }}
          />
        </Box>

        {/* IMAGE ADD */}
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <Box sx={{ ...fieldStyle, height: "220px" }}>
            <Typography
              variant="h10"
              component="h5"
              sx={{ marginBottom: "8px" }}
            >
              Product Image
            </Typography>

            <Box
              sx={{
                border: "1px dashed #bbb",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "40px",
                gap: "10px",
              }}
            >
              <Typography>Image URL</Typography>
              <Button
                variant="contained"
                component="label"
                color="primary"
                size="small"
                sx={{
                  marginRight: "10px",
                  padding: "4px 8px",
                  minWidth: "auto",
                  fontSize: "0.75rem",
                }}
              >
                Add File
                <input
                  type="file"
                  name="img"
                  hidden
                  onChange={handleFileChange}
                />
              </Button>
              {previewImage && (
                <Box
                  component="img"
                  src={previewImage}
                  alt="Preview"
                  sx={{
                    maxWidth: "100%",
                    maxHeight: "100px",
                    objectFit: "contain",
                    marginTop: "10px",
                  }}
                />
              )}
            </Box>
          </Box>
        </form>
        {/* IMAGE ADD >>>> */}
        <Box sx={{ ...fieldStyle, height: "100px" }}>
          <Typography variant="h10" component="h5">
            Product Price
          </Typography>
          <TextField
            id="price"
            label="Price"
            name="price"
            type="number"
            value={newProduct.price}
            onChange={handleChange}
            fullWidth
            margin="normal"
            sx={{
              ".MuiInputLabel-root": { fontSize: "0.8rem" },
              ".MuiInputBase-input": { fontSize: "0.8rem" },
            }}
          />
        </Box>
        <Box sx={{ ...fieldStyle, height: "100px" }}>
          <Typography variant="h10" component="h5">
            Available Stock
          </Typography>
          <TextField
            id="stock"
            label="Stock"
            name="stock"
            type="number"
            value={newProduct.stock}
            onChange={handleChange}
            fullWidth
            margin="normal"
            sx={{
              ".MuiInputLabel-root": { fontSize: "0.8rem" },
              ".MuiInputBase-input": { fontSize: "0.8rem" },
            }}
          />
        </Box>
        <Box sx={{ ...fieldStyle, height: "120px" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddProduct}
          >
            Add Product
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateProductForm;

import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Card, Typography } from "@mui/material";
import { margin } from "@mui/system";
import { Box } from "@mui/system";
import axios from "axios";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8081/api/products");
        // Assuming the API returns an array of products
        setProducts(response.data.data.slice(0, 5)); // Get only the first 5 products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: "10px",
      }}
    >
      {/* <TrendingUpIcon fontSize="large" />
      <Typography sx={{ margin: "20px", fontWeight: "bold" }}>
        Trending Products
      </Typography> */}
      <Box sx={{ display: "flex", alignItems: "center", margin: "20px" }}>
        <TrendingUpIcon fontSize="large" />
        <Typography sx={{ marginLeft: "10px", fontWeight: "bold" }}>
          Trending Products
        </Typography>
      </Box>

      <List sx={{ width: "100%" }}>
        {products.map((product, index) => (
          <ListItem key={index} divider>
            <ListItemText
              primary={product.name}
              secondary={`Stock: ${product.stock}`}
            />
            <ListItemText secondary={`Price: ${product.price}`} />
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

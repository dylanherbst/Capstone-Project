import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export default function ProductList() {
  const products = [
    { name: "Product 1", sales: "$500", profit: "$200" },
    { name: "Product 2", sales: "$300", profit: "$100" },
    { name: "Product 3", sales: "$400", profit: "$150" },
  ];

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {products.map((product, index) => (
        <ListItem key={index} divider>
          <ListItemText
            primary={product.name}
            secondary={`Sales: ${product.sales}`}
          />
          <ListItemText secondary={`Profit: ${product.profit}`} />
        </ListItem>
      ))}
    </List>
  );
}

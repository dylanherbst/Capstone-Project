import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";

function TotalOrderCard({ totalOrders }) {
  return (
    <Card
      variant="outlined"
      sx={{
        background: "linear-gradient(45deg, #4AFAA8 0%, #02DB93 100%)", // Gradient from lighter to darker green
        borderRadius: "10px",
        color: "white",
      }}
    >
      <CardContent>
        <LocalMallIcon />
        <Typography variant="h4" component="h2" fontWeight="bold">
          447
        </Typography>
        <Typography gutterBottom>Total Orders {totalOrders}</Typography>
      </CardContent>
    </Card>
  );
}

export default TotalOrderCard;

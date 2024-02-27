import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function TotalOrderCard({ totalOrders }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Order Summary
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Total Orders: {totalOrders}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TotalOrderCard;

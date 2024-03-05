import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import PaymentsIcon from "@mui/icons-material/Payments";

function TotalEarnedCard({ totalEarned }) {
  return (
    <Card
      variant="outlined"
      sx={{
        background: "linear-gradient(45deg, #00B9E8 0%, #009ACB 100%)", // Gradient from light to dark blue
        borderRadius: "10px",
        color: "white",
      }}
    >
      <CardContent>
        <PaymentsIcon />
        <Typography variant="h4" component="h2" fontWeight="bold">
          $25k
        </Typography>
        <Typography gutterBottom>Total Earning {totalEarned}</Typography>
      </CardContent>
    </Card>
  );
}

export default TotalEarnedCard;

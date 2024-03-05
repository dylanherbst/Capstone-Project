import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";

function IncomeCard({ incomeTotal }) {
  return (
    <Card
      variant="outlined"
      sx={{
        background: "linear-gradient(45deg, #A020F0 0%, #9370DB 100%)", // Gradient from dark purple to medium purple
        borderRadius: "10px",
        color: "white",
      }}
    >
      <CardContent>
        <StorefrontIcon />
        <Typography variant="h4" component="h2" fontWeight="bold">
          $203k
        </Typography>
        <Typography gutterBottom>Total Income {incomeTotal}</Typography>
      </CardContent>
    </Card>
  );
}

export default IncomeCard;

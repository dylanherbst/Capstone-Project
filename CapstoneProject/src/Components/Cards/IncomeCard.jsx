import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function IncomeCard({ incomeTotal }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Income Summary
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Total Income: {incomeTotal}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default IncomeCard;

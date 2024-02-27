import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function TotalEarnedCard({ totalEarned }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Earnings Summary
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Total Earned: {totalEarned}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TotalEarnedCard;

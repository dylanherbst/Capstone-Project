import React from "react";
import { useEffect } from "react";
import { useUserContext } from "../Context/UserContext";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TotalEarnedCard from "../Components/Cards/TotalEarningCard";
import TotalOrderCard from "../Components/Cards/TotalOrdersCard";
import IncomeCard from "../Components/Cards/IncomeCard";
import ProductList from "../Components/Cards/ProductsListCard";
import EarningsSalesGraph from "../Components/Cards/EarningsSalesGraph";

const DashBoardPage = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={3}>
          {/* First row */}
          <Grid item xs={4}>
            <TotalEarnedCard></TotalEarnedCard>
          </Grid>
          <Grid item xs={4}>
            <TotalOrderCard></TotalOrderCard>
          </Grid>
          <Grid item xs={4}>
            <IncomeCard></IncomeCard>
          </Grid>

          {/* Second and third row */}
          <Grid item xs={8} md={8} lg={8}>
            <EarningsSalesGraph></EarningsSalesGraph>
          </Grid>
          <Grid item xs={4} md={4} lg={4}>
            <ProductList></ProductList>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DashBoardPage;

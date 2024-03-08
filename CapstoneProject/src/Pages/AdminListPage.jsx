import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import { Typography, Box } from "@mui/material";
import AdminList from "../Components/AdminList";
import AdminManagement from "../Components/AdminManger";
const AdminPage = () => {
  const style = {
    p: 2,
    margin: "auto",
    marginBottom: "50px",
  };
  return (
    <div>
      <Box sx={style}>
        <NavBar />
        <Typography variant="h5" marginBottom="20px">
          Admin Accounts
        </Typography>
        <AdminManagement />
      </Box>
    </div>
  );
};

export default AdminPage;

// CreateProfilePage.js

import { useState } from "react";
import { useUserContext } from "../Context/UserContext";
import Button from "@mui/material/Button";
import { Card, CardContent, Typography, Box } from "@mui/material";
import Form from "../Components/CreateProfileComponent";
import Navbar from "../Components/NavBar";

export default function UserAccountPage() {
  const { currentUser, handleUpdateUser, handleLogOut } = useUserContext();

  return (
    <>
      <Navbar></Navbar>
      <Typography sx={{ margin: "25px" }} variant="h5">
        Your Porfile
      </Typography>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 0,
          margin: 0,
          boxSizing: "border-box",
        }}
      >
        <Card
          sx={{
            width: "70%",
            margin: "20px auto",
            maxWidth: "1800px",
            borderRadius: "15px",
          }}
        >
          <CardContent
            sx={{
              width: "80%",
              margin: "10px",
              boxSizing: "border-box",
            }}
          >
            <Typography variant="h7" sx={{ fontWeight: "bold" }}>
              <h3>Name:</h3>
              <h4>{currentUser.userName}</h4>
              <h3>Email:</h3>
              <h4> {currentUser.email}</h4>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: "20px" }}
                onClick={() => handleLogOut({})}
              >
                Log Out
              </Button>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

import { useState } from "react";
import { useUserContext } from "../Context/UserContext";
import Button from "@mui/material/Button";
import { Card, CardContent, Typography, Box } from "@mui/material";
import NavBar from "../Components/NavBar";

export default function ProfilePage() {
  const { currentUser, handleUpdateUser, handleLogOut } = useUserContext();

  return (
    <>
      <NavBar />
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
        <h1>Your Account</h1>

        <Card sx={{ width: "90%", margin: "20px auto", maxWidth: "1800px" }}>
          <CardContent
            sx={{
              width: "80%",
              margin: "10px",
              boxSizing: "border-box",
            }}
          >
            <Typography variant="h7" sx={{ fontWeight: "bold" }}>
              <h2>{currentUser.userName}</h2>
              <h3>{currentUser.email}</h3>
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

import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Link,
  Avatar,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useUserContext } from "../Context/UserContext";
import theme from "../Themes/theme"; // Importing the default theme export
import { useNavigate } from "react-router-dom";

function LoginForm() {
  // Your component logic...

  return (
    <>
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
        <ThemeProvider theme={theme}>
          {" "}
          {/* Using the imported theme */}
          {/* Your component JSX... */}
        </ThemeProvider>
      </Box>
    </>
  );
}

export default LoginForm;

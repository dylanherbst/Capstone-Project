import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Link,
  Checkbox,
  FormControlLabel,
  Avatar,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useUserContext } from "../Context/UserContext";
import theme from "../Themes/theme";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");
  const navigate = useNavigate();

  const { currentUser, handleUpdateUser, handleLogOut } = useUserContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 chars long");
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
    } else {
      setSubmitResult("Successful login.");
      handleUpdateUser({ email: userEmail, userName: userName });
    }
  };

  if (currentUser && currentUser.email) {
    navigate("/");
    return (
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
          <Container sx={{ marginTop: "40px", marginLeft: "40px" }}>
            <Typography variant="h6">
              Welcome {currentUser.userName}!
            </Typography>

            <Button
              variant="contained"
              color="primary"
              onClick={() => handleLogOut({})}
            >
              Log Out
            </Button>
          </Container>
        </ThemeProvider>
      </Box>
    );
  }

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
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "#1a73e8" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
                <Typography component="h1" variant="h5"></Typography>

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: "#1a73e8" }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
          <Box mt={8} mb={4} align="center">
            <Typography variant="body2" color="text.secondary">
              {"Copyright © "}
              <Link color="inherit" href="https://mui.com/">
                Dylan Herbst CapStone
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </ThemeProvider>
      </Box>
    </>
  );
}

export default LoginForm;

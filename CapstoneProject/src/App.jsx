import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import { UserProvider } from "./Context/UserContext";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppRoutes from "./Routes/AppRoutes";
import theme from "./Themes/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UserProvider>
          <NavBar></NavBar>
          <AppRoutes></AppRoutes>
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import NavBar from "./Components/NavBar";
import { UserProvider } from "./Context/UserContext";
import { ThemeProvider } from "@mui/material/styles";
import AppRoutes from "./Routes/AppRoutes";
import theme from "./Themes/theme";
import SideBar from "./Components/SideBar";
import { Box } from "@mui/system";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserProvider>
        {/* <NavBar /> */}

        <AppRoutes />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;

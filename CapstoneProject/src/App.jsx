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

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <UserProvider>
          <div style={{ width: "100vw", height: "80vh" }}>
            <NavBar></NavBar>
            {/* Add padding to the top of AppRoutes container */}
            <div
              style={{
                paddingTop: "20px",
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
            >
              {/* Adjust the padding based on the height of your NavBar */}
              <AppRoutes></AppRoutes>
            </div>
          </div>
        </UserProvider>
      </ThemeProvider>
    </>
  );
}
export default App;

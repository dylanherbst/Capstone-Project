import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import theme from "./Themes/theme";
import { ThemeProvider } from "@mui/material/styles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    {/* </React.StrictMode> */}
  </BrowserRouter>
);

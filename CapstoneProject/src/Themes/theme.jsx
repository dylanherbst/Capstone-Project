import React, { createContext, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Define your color palette here
const colors = {
  primary: "rgb(208, 209, 213, 0.6)",
  secondary: "#4cceac",
  error: "#db4f4a",
  warning: "#e99592",
  info: "#1a73e8",
  success: "#70d8bd",
};

// Create a theme instance
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: "none",
        },
        contained: {
          backgroundColor: "#007FFF",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#0059B2",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
  },
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    error: {
      main: colors.error,
    },
    warning: {
      main: colors.warning,
    },
    info: {
      main: colors.info,
    },
    success: {
      main: colors.success,
    },
    background: {
      default: "	rgb(0, 191, 255, 0.07)", // Set your desired background color here
    },
  },
  typography: {
    fontFamily: "sans-serif;",
  },
  text: {
    primary: "#202124", // Dark gray for text
    secondary: "#5f6368", // Medium gray for secondary text
  },
});

export default theme;

// const theme = createTheme({
//   palette: {
//     mode: "light",
//     primary: {
//       main: "#1a73e8", // Google Blue '#1a73e8' Google Purple '#673AB7'
//     },
//     secondary: {
//       main: "#fbbc05", // Google Yellow
//     },
//     error: {
//       main: "#ea4335", // Google Red
//     },
//     warning: {
//       main: "#fbbc05", // Google Yellow
//     },
//     info: {
//       main: "#34a853", // Google Green
//     },
//     success: {
//       main: "#34a853", // Google Green
//     },
//     background: {
//       default: "#fff", // White background
//       paper: "#fff",
//     },
//     text: {
//       primary: "#202124", // Dark gray for text
//       secondary: "#5f6368", // Medium gray for secondary text
//     },
//   },
//   typography: {
//     fontFamily: "Google Sans, Roboto, Arial, sans-serif", // Google's font
//   },
//   shape: {
//     borderRadius: 16,
//   },
// });

// export default theme;

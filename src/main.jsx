import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, baseTheme} from "@chakra-ui/react";
import App from "./App.jsx";
import "./index.css";

// Create a custom theme
const theme ={
  // Override the default styles for components here
  ...baseTheme,
  styles: {
    global: {
      // Remove default body margin and padding
      body: {
        margin: 0,
        padding: 0,
      },
    },
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

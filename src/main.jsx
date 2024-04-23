import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UseContext from "./UseContext/UseContext.jsx";
import { ThemeProvider } from "./ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <UseContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UseContext>
    </ThemeProvider>
  </React.StrictMode>
);

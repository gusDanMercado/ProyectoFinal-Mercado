import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import { CartProvider } from "./components/CartContext.jsx";
//import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
);

//import "./uploadProducts"; // comento todo lo anterior y lo ejecute una unica vez para agregar mis productos al FireStore (los agrego bien)

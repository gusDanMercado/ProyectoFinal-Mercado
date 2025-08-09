import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import "./App.css";

import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";

import React from "react";
import { Routes, Route } from "react-router-dom";
//import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import NotFound from "./components/NotFound";

import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer saludo="¡Bienvenido a nuestra tienda!" />}
        />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

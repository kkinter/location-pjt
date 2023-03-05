import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import "./App.css";

// Compo
import Testing from "./Components/Testing";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Listings from "./Components/Listings";

// const theFruits = [
//   { id: 1, name: "Apple", color: "red" },
//   { id: 2, name: "Orange", color: "orange" },
//   { id: 3, name: "Banana", color: "yellow" },
//   { id: 4, name: "Kiwi", color: "green" },
//   { id: 5, name: "Mango", color: "red" },
//   { id: 6, name: "Avocado", color: "green" },
// ];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/listings" element={<Listings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

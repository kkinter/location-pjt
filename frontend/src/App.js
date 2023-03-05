import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import "./App.css";

// Compo
import Testing from "./Components/Testing";
import SecondComponent from "./Components/SecondComponent";
import Fruit from "./Components/Fruit";

const theFruits = [
  { id: 1, name: "Apple", color: "red" },
  { id: 2, name: "Orange", color: "orange" },
  { id: 3, name: "Banana", color: "yellow" },
  { id: 4, name: "Kiwi", color: "green" },
  { id: 5, name: "Mango", color: "red" },
  { id: 6, name: "Avocado", color: "green" },
];

function App() {
  function MyComponent() {
    return (
      <>
        <h1>John has {1} apples </h1>
      </>
    );
  }
  return (
    <BrowserRouter>
      {theFruits.map(fruit => {
        // console.log(fruit, typeof fruit)
        return (
          <Fruit key={fruit.id} name={fruit.color} color={fruit.name} />
          // <h5>
          //   This is a {fruit.color} {fruit.name}
          // </h5>
        );
      })}
      <MyComponent />
      <SecondComponent />
      <Routes>
        <Route path="/testing" element={<Testing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

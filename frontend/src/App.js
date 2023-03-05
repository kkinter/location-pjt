import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import "./App.css";

// Compo
import Testing from "./Components/Testing";
import SecondComponent from "./Components/SecondComponent";

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
      <MyComponent />
      <SecondComponent />
      <Routes>
        <Route path="/testing" element={<Testing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

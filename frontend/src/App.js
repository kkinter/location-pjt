import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import "./App.css";
import Testing from "./Components/Testing";

function App() {
  // fetch("http://127.0.0.1:8000/api/listings/")
  //   .then(response => response.json())
  //   .then(data => console.log(data));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/testing" element={<Testing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

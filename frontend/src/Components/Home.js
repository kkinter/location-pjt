import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <br></br>
      <Link to="/login">Login</Link>
      <br></br>
      <Link to="/listings">Listings</Link>
    </div>
  );
}

export default Home;

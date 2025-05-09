import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import AsCarousel from "../src/components/as-Roma/AsCarousel"
import NavbarAsRoma from "./components/as-Roma/NavbarAsRoma";

function App() {
  return <div className="App">
    <NavbarAsRoma />
    <AsCarousel />
  </div>;
}

export default App;

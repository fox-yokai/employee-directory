import React from "react";
import './App.css';
import Navbar from "./components/Navbar"
import Banner from "./components/Banner";
import Directory from "./components/Directory"

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Directory />
    </div>
  );
}

export default App;

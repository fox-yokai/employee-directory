import React from "react";
import Navbar from "../components/Navbar"
import Banner from "../components/Banner";
import Directory from "../components/Directory"

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Directory />
    </div>
  );
}

export default Home;
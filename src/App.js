import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import FirstSection from "./components/FirstSection"
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FirstSection/>
      <Newsletter/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App;

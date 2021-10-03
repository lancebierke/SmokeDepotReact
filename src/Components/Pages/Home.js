import React from "react";
import "../../App.css";
import Cards from "../Cards";
import Deals from "../Deals";
// import Footer from "../Footer";
import HeroSection from "../HeroSection";

function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <Cards />
      <Deals />
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default Home;

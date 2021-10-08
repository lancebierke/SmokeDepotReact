import React from "react";
import "../../App.css";
import Cards from "../Cards";
import SmallPipes from "../SmallPipes";
import HeroSection from "../HeroSection";
import CBD from "../CBD";
import RechargableVapes from "../RechargableVapes";
import DisposableVapes from "../DisposableVapes";
import Hookahs from "../Hookahs";
import OtherPipes from "../OtherPipes";

function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <Cards />
      <SmallPipes />
      <Hookahs />
      <OtherPipes />
      <RechargableVapes />
      <DisposableVapes />
      <CBD />
    </React.Fragment>
  );
}

export default Home;

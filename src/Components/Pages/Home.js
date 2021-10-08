import React, { useEffect } from "react";
import "../../App.css";
import Cards from "../Cards";
import SmallPipes from "../SmallPipes";
import HeroSection from "../HeroSection";
import CBD from "../CBD";
import RechargableVapes from "../RechargableVapes";
import DisposableVapes from "../DisposableVapes";
import Hookahs from "../Hookahs";
import OtherPipes from "../OtherPipes";
import { withRouter } from "react-router-dom";

function Home(props) {
  console.log(props.history.location);
  const elementToScrollTo = props.history.location.state
    ? props.history.location.state.detail
    : null;
  useEffect(() => {
    if (elementToScrollTo) {
      console.log("Hello", elementToScrollTo);
      const element = document.getElementById(elementToScrollTo);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [elementToScrollTo]);

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

export default withRouter(Home);

import React from "react";
import { Button } from "./Button";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src="../public/smokedepotPImgs/video-1" autoPlay loop muted /> */}
      {/* <img src=".."  alt="water" /> */}
      <h1>Smoke Depot</h1>
      <p>Smoke Something Betch!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET DEALS!
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          *Pending Usage*
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

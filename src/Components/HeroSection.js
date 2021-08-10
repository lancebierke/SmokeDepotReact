import React from "react";
import { Button } from "./Button";
import "../App.css";
import "./HeroSection.css";
import LOGO from "../Images/logo_trn-bg.png";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src="../public/smokedepotPImgs/video-1" autoPlay loop muted /> */}
      {/* <img src=".."  alt="water" /> */}
      <h1>Smoke Depot</h1>
      <div style={{width: "90vw", height: "40vh", backgroundColor: "rgba(0,0,0,.7)", display: "flex", justifyContent: "center", transform: "skew(-15deg)"}}>
      <img img src={LOGO} style={{height: "100%", width: "auto", transform: "skew(15deg)"}} alt="logo"></img>
      </div>
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

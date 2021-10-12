import React from "react";
import { Button } from "./Button";
import "../App.css";
import "./HeroSection.css";
import LOGO from "../Images/logo_trn-bg.png";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src="../public/smokedepotPImgs/video-1" autoPlay loop muted /> */}
      <div style={{ position: "relative", width: "90vw", height: "40vh" }}>
        <div
          style={{
            position: "absolute",
            left: "2.5vw",
            width: "85vw",
            height: "50vh",
            backgroundColor: "rgba(0,0,0,.4)",
            display: "flex",
            justifyContent: "center",
            transform: "skew(-20deg, -20deg)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            left: "2.5vw",
            width: "85vw",
            height: "50vh",
            backgroundColor: "rgba(0,0,0,.4)",
            display: "flex",
            justifyContent: "center",
            transform: "skew(20deg, 20deg)",
          }}
        >
          <img
            img
            src={LOGO}
            style={{
              left: "2.5vw",
              height: "100%",
              width: "auto",
              transform: "skew(-20deg, -20deg)",
            }}
            alt="logo"
          ></img>
        </div>
      </div>
      <p style={{ marginTop: "200px" }}>Smoke Something!</p>
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
          Deal of the Day!
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

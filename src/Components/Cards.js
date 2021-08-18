import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import bluePipe from "../Images/bluePipe.jfif";
import blueChromePipe from "../Images/blueChromePipe.jfif";
import blueShortyPipe from "../Images/blueShortyPipe.jfif";
import blueWavePipe from "../Images/blueWavePipe.jfif";
import burntPipe from "../Images/burntPipe.jfif";
import clearBluePipe from "../Images/clearBluePipe.jfif";

function Cards() {
  return (
    <div className="cards">
      <h1>Available Inventory</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={blueChromePipe}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            <CardItem
              src={blueShortyPipe}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            <CardItem
              src={blueWavePipe}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            {/* </ul> */}
            {/* <ul className="cards__items"> */}
            <CardItem
              src={burntPipe}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            <CardItem
              src={clearBluePipe}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            <CardItem
              src={bluePipe}
              text="Explore our Items"
              label="About"
              path="/home"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

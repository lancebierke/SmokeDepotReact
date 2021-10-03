import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import blueShortyPipe from "../Images/blueShortyPipe.jfif";

function Deals() {
  return (
    <div className="cards merch">
      <h1>Merchandise</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={blueShortyPipe}
              text="$50.00*"
              label="About"
              path="/home"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Deals;

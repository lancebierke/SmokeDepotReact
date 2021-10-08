import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import blueShortyPipe from "../Images/blueShortyPipe.jfif";

function Hookahs() {
  return (
    <div className="cards merch">
      <h1>Hookahs</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={blueShortyPipe}
              text="$50.00*"
              label="About"
              path="/hookahs"
            />
          </ul>
        </div>
      </div>
      <h6>**plus tax on all purchases</h6>
    </div>
  );
}

export default Hookahs;
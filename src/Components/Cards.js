import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import bluePipe from "../Images/bluePipe.jfif";

function Cards() {
  return (
    <div className="cards">
      <h1>Available Inventory</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={bluePipe}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            <CardItem
              src={bluePipe}
              text="Explore our Items"
              label="About"
              path="/home"
            /><CardItem
            src={bluePipe}
            text="Explore our Items"
            label="About"
            path="/home"
          />
                </ul>
            <ul className="cards__items">
              <CardItem
                src={bluePipe}
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

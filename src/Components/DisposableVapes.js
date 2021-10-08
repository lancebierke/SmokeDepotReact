import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import blueShortyPipe from "../Images/blueShortyPipe.jfif";

function DisposableVapes() {
  return (
    <div className="cards merch" id="disposablevapes">
      <h1>Disposable Vapes</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={blueShortyPipe}
              text="$50.00*"
              label="About"
              path="/disposablevapes"
            />
          </ul>
        </div>
      </div>
      <h6>**plus tax on all purchases</h6>
    </div>
  );
}

export default DisposableVapes;

import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import image1 from "../Images/image1.jpg";

function CBD() {
  return (
    <div className="cards merch" id="cbd">
      <h1>CBD Products</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem src={image1} text="$50.00*" label="About" path="/cbd" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CBD;

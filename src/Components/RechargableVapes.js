import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import flumpods from "../Images/flumpods.jpg";
import image29 from "../Images/image29.jpg";
import puffpods from "../Images/puffpods.jpg";

function RechargableVapes() {
  return (
    <div className="cards merch" id="rechargablevapes">
      <h1>Rechargable Vapes</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={flumpods}
              text="$50.00*"
              label="rechargableVapes"
              path="/rechargablevapes"
            />
            <CardItem
              src={image29}
              text="Various*"
              label="recharableVapes"
              path="/rechargablevapes"
            />
            <CardItem
              src={puffpods}
              text="Various*"
              label="recharabpuffpodsleVapes"
              path="/rechargablevapes"
            />
          </ul>
        </div>
      </div>
      <h6>**plus tax on all purchases</h6>
    </div>
  );
}

export default RechargableVapes;

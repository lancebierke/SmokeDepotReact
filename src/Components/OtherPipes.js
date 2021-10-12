import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import smallpipes1 from "../Images/smallpipes1.jpg";
import smallpipes2 from "../Images/smallpipes2.jpg";
import smallpipes3 from "../Images/smallpipes3.jpg";
import smallpipes4 from "../Images/smallpipes4.jpg";
import supremedabpieces from "../Images/supremedabpieces.jpg";
import yellowdabpieces from "../Images/yellowdabpieces.jpg";

function OtherPipes() {
  return (
    <div className="cards merch" id="otherpipes">
      <h1>All Other Pipes</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={smallpipes1}
              text="$50.00*"
              label="Small Pipes"
              path="/otherpipes"
            />
            <CardItem
              src={smallpipes2}
              text="$50.00*"
              label="Small Pipes"
              path="/otherpipes"
            />
            <CardItem
              src={smallpipes3}
              text="$50.00*"
              label="Small Pipes"
              path="/otherpipes"
            />
            <CardItem
              src={smallpipes4}
              text="$50.00*"
              label="Small Pipes"
              path="/otherpipes"
            />
            <CardItem
              src={supremedabpieces}
              text="$50.00*"
              label="Small Pipes"
              path="/otherpipes"
            />
            <CardItem
              src={yellowdabpieces}
              text="$50.00*"
              label="Small Pipes"
              path="/otherpipes"
            />
          </ul>
        </div>
      </div>
      <h6>**plus tax on all purchases</h6>
    </div>
  );
}

export default OtherPipes;

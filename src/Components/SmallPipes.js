import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import smallpipe1 from "../Images/smallpipe1.jfif";
import smallpipe2 from "../Images/smallpipe2.jpg";
import smallpipe3 from "../Images/smallpipe3.jfif";
// import smallpipe4 from "../Images/smallpipe1.jfif";
import smallpipe5 from "../Images/smallpipe5.jfif";
import smallpipe6 from "../Images/smallpipe6.jfif";
import smallpipe7 from "../Images/smallpipe7.jfif";
import smallpipe8 from "../Images/smallpipe8.jpg";
import smallpipe9 from "../Images/smallpipe9.jfif";
import smallpipe10 from "../Images/smallpipe10.jfif";
import smallpipe11 from "../Images/smallpipe11.jpg";
import smallpipe12 from "../Images/smallpipe12.jpg";
import smallpipe13 from "../Images/smallpipe13.jfif";
import smallpipe14 from "../Images/smallpipe14.jfif";
import smallpipe15 from "../Images/smallpipe15.jfif";
import smallpipe16 from "../Images/smallpipe16.jpg";
import smallpipe17 from "../Images/smallpipe1.jfif";

function SmallPipes() {
  return (
    <div className="cards merch" id="smallwaterpipes">
      <h1>Small Water Pipes</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={smallpipe1}
              text="$50.00*"
              label="About"
              path="/smallwaterpipes"
            />
            <CardItem
              src={smallpipe2}
              text="$50.00*"
              label="About"
              path="/smallwaterpipes"
            />
            <CardItem
              src={smallpipe3}
              text="$50.00*"
              label="About"
              path="/smallwaterpipes"
            />
            <CardItem
              src={smallpipe13}
              text="$50.00*"
              label="About"
              path="/smallwaterpipes"
            />
            <CardItem
              src={smallpipe5}
              text="$50.00*"
              label="About"
              path="/smallwaterpipes"
            />
            <CardItem
              src={smallpipe6}
              text="$50.00*"
              label="About"
              path="/smallwaterpipes"
            />
            <CardItem
              src={smallpipe7}
              text="$50.00*"
              label="About"
              path="/smallwaterpipes"
            />
            <CardItem
              src={smallpipe8}
              text="$50.00*"
              label="About"
              path="/smallwaterpipes"
            />
            <CardItem
              src={smallpipe9}
              text="$50.00*"
              label="About"
              path="/smallwaterpipes"
            />
            <CardItem
              src={smallpipe10}
              text="$50.00*"
              label="About"
              path="/smallwaterpipes"
            />
            <CardItem
              src={smallpipe11}
              text="$50.00*"
              label="About"
              path="/smallwaterpipes"
            />
            <CardItem
              src={smallpipe12}
              text="$50.00*"
              label="About"
              path="/smallwaterpipes"
            />
            <CardItem
              src={smallpipe14}
              text="$50.00*"
              label="About"
              path="/smallwaterpipes"
            />
            <CardItem
              src={smallpipe15}
              text="$50.00*"
              label="About"
              path="/smallwaterpipes"
            />
            <CardItem
              src={smallpipe16}
              text="$50.00*"
              label="About"
              path="/smallwaterpipes"
            />
            <CardItem
              src={smallpipe17}
              text="$50.00*"
              label="About"
              path="/smallwaterpipes"
            />
          </ul>
        </div>
      </div>
      <h6>**plus tax on all purchases</h6>
    </div>
  );
}

export default SmallPipes;

import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import largepipe1 from "../Images/largepipe1.jfif";
import largepipe2 from "../Images/largepipe2.jfif";
import largepipe3 from "../Images/largepipe3.jpg";
import largepipe4 from "../Images/largepipe4.jfif";
import largepipe5 from "../Images/largepipe5.jpg";
import largepipe6 from "../Images/largepipe6.jfif";
import largepipe7 from "../Images/largepipe7.jpg";
import largepipe8 from "../Images/largepipe8.jpg";
import largepipe9 from "../Images/largepipe9.jpg";
import largepipe10 from "../Images/largepipe10.jpg";
import largepipe11 from "../Images/largepipe11.jfif";
import largepipe12 from "../Images/largepipe12.jpg";
import largepipe13 from "../Images/largepipe13.jpg";
import largepipe14 from "../Images/largepipe14.jpg";
import largepipe15 from "../Images/largepipe15.jpg";
import largepipe16 from "../Images/largepipe16.jfif";
import largepipe17 from "../Images/largepipe17.jpg";
import largepipe18 from "../Images/largepipe18.jpg";
import largepipe19 from "../Images/largepipe19.jfif";

function Cards() {
  return (
    <div className="cards" id="largewaterpipes">
      <h1>Large Water Pipes</h1>
      <h6>* more colors available</h6>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={largepipe1}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            <CardItem
              src={largepipe2}
              text="$50.00*"
              label="About"
              path="/largewaterpipes"
            />
            <CardItem
              src={largepipe3}
              text="$60.00"
              label="About"
              path="/largewaterpipes"
            />
            <CardItem
              src={largepipe4}
              text="$58.00*"
              label="About"
              path="/largewaterpipes"
            />
            <CardItem
              src={largepipe5}
              text="$105.00"
              label="About"
              path="/largewaterpipes"
            />
            <CardItem
              src={largepipe6}
              text="$70.00*"
              label="About"
              path="/largewaterpipes"
            />
            <CardItem
              src={largepipe7}
              text="$65.00*"
              label="About"
              path="/largewaterpipes"
            />
            <CardItem
              src={largepipe8}
              text="$120.00*"
              label="About"
              path="/largewaterpipes"
            />
            <CardItem
              src={largepipe9}
              text="$60.00"
              label="About"
              path="/largewaterpipes"
            />
            <CardItem
              src={largepipe10}
              text="$70.00"
              label="About"
              path="/largewaterpipes"
            />
            <CardItem
              src={largepipe11}
              text="$70.00"
              label="About"
              path="/largewaterpipes"
            />
            <CardItem
              src={largepipe12}
              text="$70.00"
              label="About"
              path="/largewaterpipes"
            />
            <CardItem
              src={largepipe13}
              text="$70.00"
              label="About"
              path="/largewaterpipes"
            />
            <CardItem
              src={largepipe14}
              text="$70.00"
              label="About"
              path="/largewaterpipes"
            />
            <CardItem
              src={largepipe15}
              text="$70.00"
              label="About"
              path="/largewaterpipes"
            />
            <CardItem
              src={largepipe16}
              text="$70.00"
              label="About"
              path="/largewaterpipes"
            />
            <CardItem
              src={largepipe17}
              text="$70.00"
              label="About"
              path="/largewaterpipes"
            />
            <CardItem
              src={largepipe18}
              text="$70.00"
              label="About"
              path="/largewaterpipes"
            />
            <CardItem
              src={largepipe19}
              text="$70.00"
              label="About"
              path="/largewaterpipes"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

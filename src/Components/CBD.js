import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import CBD1 from "../Images/cbd1.jpg";
import CBD2 from "../Images/cbd2.jpg";
import CBD3 from "../Images/cbd3.jpg";
import CBD4 from "../Images/cbd4.jpg";
import CBD5 from "../Images/cbd5.jpg";
import CBD6 from "../Images/cbd6.jpg";
import CBD7 from "../Images/cbd7.jpg";
import CBD8 from "../Images/cbd8.jpg";
import CBD9 from "../Images/cbd9.jpg";
import CBD10 from "../Images/cbd10.jpg";
import CBD11 from "../Images/cbd11.jpg";

function CBD() {
  return (
    <div className="cards merch" id="cbd">
      <h1>CBD Products</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem src={CBD1} text="$50.00*" label="About" path="/cbd" />
            <CardItem src={CBD2} text="$50.00*" label="About" path="/cbd" />
            <CardItem src={CBD3} text="$50.00*" label="About" path="/cbd" />
            <CardItem src={CBD4} text="$50.00*" label="About" path="/cbd" />
            <CardItem src={CBD5} text="$50.00*" label="About" path="/cbd" />
            <CardItem src={CBD6} text="$50.00*" label="About" path="/cbd" />
            <CardItem src={CBD7} text="$50.00*" label="About" path="/cbd" />
            <CardItem src={CBD8} text="$50.00*" label="About" path="/cbd" />
            <CardItem src={CBD9} text="$50.00*" label="About" path="/cbd" />
            <CardItem src={CBD10} text="$50.00*" label="About" path="/cbd" />
            <CardItem src={CBD11} text="$50.00*" label="About" path="/cbd" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CBD;

import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import bluePipe from "../Images/bluePipe.jfif";
import blueChromePipe from "../Images/blueChromePipe.jfif";
import blueShortyPipe from "../Images/blueShortyPipe.jfif";
import blueWavePipe from "../Images/blueWavePipe.jfif";
import burntPipe from "../Images/burntPipe.jfif";
import clearBluePipe from "../Images/clearBluePipe.jfif";
import blackAndGoldPipe from "../Images/blackAndGoldPipe.jfif";
import brownAndWhitePipe from "../Images/brownAndWhitePipe.jfif";
import clearSkeletonPipe from "../Images/clearSkeletonPipe.jfif";
import clearShortyPipe from "../Images/clearShortyPipe.jfif";
import clearPipe from "../Images/clearPipe.jfif";
import helixPipe from "../Images/helixPipe.jfif";
import blackDiamondPipe from "../Images/blackDiamondPipe.jfif";
import honeycombPipe from "../Images/honeycombPipe.jfif";
import mushroomPipe from "../Images/mushroomPipe.jfif";
import orangeFirePipe from "../Images/orangeFirePipe.jfif";
import orangeSkullPipe from "../Images/orangeSkullPipe.jfif";
import simpsonsPipe from "../Images/simpsonsPipe.jfif";
import subflowerShortyPipe from "../Images/subflowerShortyPipe.jfif";


function Cards() {
  return (
    <div className="cards">
      <h1>Available Inventory</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={blueChromePipe}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            <CardItem
              src={blueShortyPipe}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            <CardItem
              src={blueWavePipe}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            {/* </ul> */}
            {/* <ul className="cards__items"> */}
            <CardItem
              src={burntPipe}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            <CardItem
              src={clearBluePipe}
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
              src={brownAndWhitePipe}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            <CardItem
              src={blackAndGoldPipe}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            <CardItem
              src={clearSkeletonPipe}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            <CardItem
              src={clearShortyPipe}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            <CardItem
              src={clearPipe}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            <CardItem
              src={blackDiamondPipe}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            <CardItem
              src={helixPipe}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            <CardItem
              src={honeycombPipe}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            <CardItem
              src={mushroomPipe}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            <CardItem
              src={orangeFirePipe}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            <CardItem
              src={orangeSkullPipe}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            <CardItem
              src={simpsonsPipe}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            <CardItem
              src={subflowerShortyPipe}
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

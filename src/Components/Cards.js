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
import image1 from "../Images/image1.jpg";
import image3 from "../Images/image3.jpg";
import image6 from "../Images/image6.jpg";
import image9 from "../Images/image9.jpg";
import image11 from "../Images/image11.jpg";
import image13 from "../Images/image13.jpg";
import image15 from "../Images/image15.jpg";
import image17 from "../Images/image17.jpg";
import image20 from "../Images/image20.jpg";
import image23 from "../Images/image23.jpg";
import image26 from "../Images/image26.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Available Inventory</h1>
      <p>* more colors available</p>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {/* <CardItem
              src={blueChromePipe}
              text="Explore our Items"
              label="About"
              path="/home"
            /> */}
            <CardItem
              src={blueShortyPipe}
              text="$50.00*"
              label="About"
              path="/home"
            />
            <CardItem
              src={blueWavePipe}
              text="$60.00"
              label="About"
              path="/home"
            />
            {/* </ul> */}
            {/* <ul className="cards__items"> */}
            <CardItem
              src={burntPipe}
              text="$58.00*"
              label="About"
              path="/home"
            />
            <CardItem
              src={clearBluePipe}
              text="$105.00"
              label="About"
              path="/home"
            />
            <CardItem
              src={bluePipe}
              text="$70.00*"
              label="About"
              path="/home"
            />
            <CardItem
              src={brownAndWhitePipe}
              text="$65.00*"
              label="About"
              path="/home"
            />
            <CardItem
              src={blackAndGoldPipe}
              text="$120.00*"
              label="About"
              path="/home"
            />
            <CardItem
              src={clearSkeletonPipe}
              text="$60.00"
              label="About"
              path="/home"
            />
            <CardItem
              src={clearShortyPipe}
              text="$70.00"
              label="About"
              path="/home"
            />
            <CardItem
              src={clearPipe}
              text="$120.00*"
              label="About"
              path="/home"
            />
            <CardItem
              src={blackDiamondPipe}
              text="$60.00*"
              label="About"
              path="/home"
            />
            <CardItem
              src={helixPipe}
              text="$85.00"
              label="About"
              path="/home"
            />
            <CardItem
              src={honeycombPipe}
              text="$70.00"
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
              text="$60.00"
              label="About"
              path="/home"
            />
            <CardItem
              src={orangeSkullPipe}
              text="$120.00"
              label="About"
              path="/home"
            />
            <CardItem
              src={simpsonsPipe}
              text="$100.00*"
              label="About"
              path="/home"
            />
            <CardItem
              src={subflowerShortyPipe}
              text="$30.00"
              label="About"
              path="/home"
            />
            <CardItem
              src={image1}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            <CardItem
              src={image3}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            <CardItem
              src={image6}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            <CardItem
              src={image9}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            <CardItem
              src={image11}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            <CardItem
              src={image13}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            <CardItem
              src={image15}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            <CardItem
              src={image17}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            <CardItem
              src={image20}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            <CardItem
              src={image23}
              text="Explore our Items"
              label="About"
              path="/home"
            />
            <CardItem
              src={image26}
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

import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import hookah1 from "../Images/hookah1.jpg";
import hookah2 from "../Images/hookah2.jpg";
import hookah3 from "../Images/hookah3.jpg";
import hookah4 from "../Images/hookah4.jpg";
import hookah5 from "../Images/hookah5.jpg";
import hookah6 from "../Images/hookah6.jpg";
import hookah7 from "../Images/hookah7.jpg";
import hookah8 from "../Images/hookah8.jpg";
import hookah9 from "../Images/hookah9.jpg";
import hookah10 from "../Images/hookah10.jpg";
import lunchboxhookah from "../Images/lunchboxhookah.jpg";
import clearledhookah from "../Images/clearledhookah.jpg";

function Hookahs() {
  return (
    <div className="cards merch" id="hookahs">
      <h1>Hookahs</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={hookah1}
              text="$69.00*"
              label="Hookahs"
              path="/hookahs"
            />
            <CardItem
              src={hookah2}
              text="$95.00*"
              label="Hookahs"
              path="/hookahs"
            />
            <CardItem
              src={hookah3}
              text="$69.00*"
              label="Hookahs"
              path="/hookahs"
            />
            <CardItem
              src={hookah4}
              text="$95.00*"
              label="Hookahs"
              path="/hookahs"
            />
            <CardItem
              src={hookah5}
              text="$95.00*"
              label="Hookahs"
              path="/hookahs"
            />
            <CardItem
              src={hookah6}
              text="$95.00*"
              label="Hookahs"
              path="/hookahs"
            />
            <CardItem
              src={hookah7}
              text="$75.00*"
              label="Hookahs"
              path="/hookahs"
            />
            <CardItem
              src={hookah8}
              text="$85.00*"
              label="Hookahs"
              path="/hookahs"
            />
            <CardItem
              src={hookah9}
              text="$95.00*"
              label="Hookahs"
              path="/hookahs"
            />
            <CardItem
              src={hookah10}
              text="$85.00*"
              label="Hookahs"
              path="/hookahs"
            />
            <CardItem
              src={lunchboxhookah}
              text="$85.00*"
              label="Hookahs"
              path="/hookahs"
            />
            <CardItem
              src={clearledhookah}
              text="$139.00*"
              label="Hookahs"
              path="/hookahs"
            />
          </ul>
          <ul style={{ paddingBottom: "20px" }}>
            <h2>Al Fakher Authentic Hookah Tobacco</h2>
            <li>Blueberry</li>
            <li>Guava</li>
            <li>Coconut</li>
            <li>Citrus w/ Mint</li>
            <li>Cherry</li>
            <li>Mojito</li>
            <li>Melon</li>
            <li>Grenadine</li>
            <li>Grape w/ Berry</li>
            <li>Grape w/ Mint</li>
          </ul>
          <ul style={{ paddingBottom: "20px" }}>
            <h2>Starbuzz Hookah Tobacco</h2>
            <li>White Chai</li>
            <li>Peach Queen</li>
            <li>Lady Red</li>
            <li>Simply Mango</li>
            <li>Cosmo Power</li>
            <li>White Mint</li>
            <li>Rose</li>
            <li>Peach Mist</li>
            <li>Pineapple</li>
            <li>Jack the Ripper</li>
            <li>Brownie</li>
            <li>Margarita Freeze</li>
            <li>Black Mint</li>
            <li>Pink Candy</li>
            <li>Purple Savior</li>
            <li>Tequila Sunrise</li>
            <li>Spearmint</li>
            <li>Lemon Mint</li>
            <li>Safari Melon Dew</li>
            <li>Spiced Chai</li>
            <li>Mint Colossus</li>
          </ul>
          <h6>**plus tax on all purchases</h6>
        </div>
      </div>
    </div>
  );
}

export default Hookahs;

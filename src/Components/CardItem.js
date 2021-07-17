import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <React.Fragment>
      <li className="cards__item">
        <Link className="cards__items__link" to={props.path}>
          <figure
            className="cards__items__pics-wrap"
            data-category={props.label}
          >
            <img className="cards__item__image" src={props.src} alt="Stuff"  />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </React.Fragment>
  );
}

export default CardItem;

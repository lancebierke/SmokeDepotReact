import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./Dropdown.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

function Dropdown(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const handleRoutes = (id) => {
    const currentLocation = props.history.location.pathname;
    if (currentLocation !== "/") {
      props.history.push("/", { detail: id });
      return;
    }
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    console.log(currentLocation);
  };

  return (
    <React.Fragment>
      <ul
        onClick={handleClick}
        className={click ? "downdown-menu clicked" : "downdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => handleRoutes(item.id)}
              className={item.cname}
            >
              {item.title}
              {/* <Link
                className={item.cname}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link> */}
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default withRouter(Dropdown);

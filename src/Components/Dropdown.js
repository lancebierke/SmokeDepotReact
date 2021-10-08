import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./Dropdown.css";
import { Link } from "react-router-dom";

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <React.Fragment>
      <ul
        onClick={handleClick}
        className={click ? "downdown-menu clicked" : "downdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li ket={index}>
              <Link
                className={item.cname}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default Dropdown;

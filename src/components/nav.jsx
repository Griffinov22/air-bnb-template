import React from "react";
import "../css/index.css";
import airbnb from "../images/airbnb.svg";
function Navbar() {
  return (
    <nav>
      <img src={airbnb} alt="airbnb" />
    </nav>
  );
}

export default Navbar;

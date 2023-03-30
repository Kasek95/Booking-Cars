import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

function Header(props) {
  return (
    <header>
      <div className={"header_container container"}>
        <Link className={"logo"} to={"/"}>
          Royal<span>Cars</span>
        </Link>
        <nav className={"navigation"}>
          <a className={"navLink"} href={"#AboutUs"}>
            About Us
          </a>
          <Link className={"navLink"} to={"/Fleet"}>
            Fleet of Vehicles
          </Link>
          <Link className={"navLink"} to={"/AddVehicle"}>
            Add your Vehicle
          </Link>
          <a className={"navLink"} href={"#concat"}>
            Concat
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
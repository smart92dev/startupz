import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/svgs/logo.svg";
import { ReactComponent as Menu } from "../assets/svgs/menu.svg";
const Navbar = () => {
  const [isDivVisible, setIsDivVisible] = useState(false);
  const toggleMenu = () => {
    setIsDivVisible(!isDivVisible);
  };

  return (
    <div className="relative container">
      <nav className="container">
        <a href="">
          <Logo />
        </a>
        <ul>
          <li>
            <a href="#">Startup</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Work with us!</a>
          </li>
        </ul>
        <Menu className="menu" onClick={toggleMenu}/>
      </nav>
      <div className={`mobile-menu container fade ${isDivVisible ? 'show' : 'hide'}`}>
        <ul>
          <li>
            <a href="#">Startup</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Work with us!</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

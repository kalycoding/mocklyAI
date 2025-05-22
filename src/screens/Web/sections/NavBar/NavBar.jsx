import React, { useState } from "react";
import { NavBarWrapper } from "../../../../components/NavBarWrapper";
import "./style.css";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav-bar-container">
      <NavBarWrapper
        buttonClassName="design-component-instance-node"
        className="nav-bar-instance"
        logo="/img/logo-1.svg"
      />
      <button className="hamburger-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#how-it-works">How It Works</a>
          <a href="#features">Features</a>
          <a href="#who-its-for">Who It's For</a>
          <a href="#about-us">About Us</a>
          <a href="#contact-us">Contact Us</a>
        </div>
      )}
    </div>
  );
};

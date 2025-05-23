/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React, { useState } from "react";
import { PageNav } from "../PageNav";
import "./style.css";

export const NavBarWrapper = ({
  className,
  logo = "/img/logo.svg",
  buttonClassName,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
    console.log(sectionId);
  };
  console.log("on page");
  return (
    <div className={`nav-bar-wrapper ${className}`}>
      <img className="logo" alt="Logo" src={logo} />

      <div className="frame-5">
        <PageNav
          className="page-nav-2"
          page="How It Works"
          onClick={() => scrollToSection("how-it-works")}
        />
        <PageNav
          className="page-nav-2"
          page="Features"
          onClick={() => scrollToSection("features")}
        />
        <PageNav
          className="page-nav-2"
          page="Who It's For"
          onClick={() => scrollToSection("who-its-for")}
        />
        <PageNav
          className="page-nav-2"
          page="About Us"
          onClick={() => scrollToSection("about-us")}
        />
        <PageNav
          className="page-nav-2"
          page="Contact Us"
          onClick={() => scrollToSection("contact-us")}
        />
      </div>

      <button
        className={`button-3 ${buttonClassName}`}
        onClick={() => window.open('https://app.trymockly.ai', '_blank')}
      >
        <div className="label-4">Get Started Now</div>
      </button>

      <button className="hamburger-menu" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <a onClick={() => scrollToSection("how-it-works")}>How It Works</a>
          <a onClick={() => scrollToSection("features")}>Features</a>
          <a onClick={() => scrollToSection("who-its-for")}>Who It's For</a>
          <a onClick={() => scrollToSection("about-us")}>About Us</a>
          <a onClick={() => scrollToSection("contact-us")}>Contact Us</a>
          <button
            className={`mobile-button-3 ${buttonClassName}`}
            onClick={() => window.open('https://app.trymockly.ai', '_blank')}
          >
            <div className="label-4">Get Started Now</div>
          </button>
        </div>
      )}
    </div>
  );
};

NavBarWrapper.propTypes = {
  logo: PropTypes.string,
};

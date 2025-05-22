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

  return (
    <div className={`nav-bar-wrapper ${className}`}>
      <img className="logo" alt="Logo" src={logo} />

      <div className="frame-5">
        <PageNav className="page-nav-2" page="How It Works" />
        <PageNav className="page-nav-2" page="Features" />
        <PageNav className="page-nav-2" page="Who It's For" />
        <PageNav className="page-nav-2" page="About Us" />
        <PageNav className="page-nav-2" page="Contact Us" />
      </div>

      <button className={`button-3 ${buttonClassName}`}>
        <div className="label-4">Join Waitlist</div>
      </button>

      <button className="hamburger-menu" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#how-it-works">How It Works</a>
          <a href="#features">Features</a>
          <a href="#who-its-for">Who It's For</a>
          <a href="#about-us">About Us</a>
          <a href="#contact-us">Contact Us</a>
          <button className="mobile-button-3">
            <div className="label-4">Join Waitlist</div>
          </button>
        </div>
      )}
    </div>
  );
};

NavBarWrapper.propTypes = {
  logo: PropTypes.string,
};

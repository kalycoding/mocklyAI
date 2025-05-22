/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { PageNav } from "../PageNav";
import "./style.css";

export const NavBarWrapper = ({
  className,
  logo = "/img/logo.svg",
  buttonClassName,
}) => {
  return (
    <div className={`nav-bar-wrapper ${className}`}>
      <img className="logo" alt="Logo" src={logo} />

      <div className="frame-5">
        <PageNav className="page-nav-2" page="How It Works" />
        <PageNav className="page-nav-2" page="Features" />
        <PageNav className="page-nav-2" page="Who It&#39;s For" />
        <PageNav className="page-nav-2" page="About Us" />
        <PageNav className="page-nav-2" page="Contact Us" />
      </div>

      <button className={`button-3 ${buttonClassName}`}>
        <div className="label-4">Join Waitlist</div>
      </button>
    </div>
  );
};

NavBarWrapper.propTypes = {
  logo: PropTypes.string,
};

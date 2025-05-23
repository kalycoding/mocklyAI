/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PageNav = ({ page = "How It Works", className, onClick }) => {
  return (
    <div className={`page-nav ${className}`} onClick={() => onClick()}>
      <div className="how-it-works">{page}</div>
    </div>
  );
};

PageNav.propTypes = {
  page: PropTypes.string,
};

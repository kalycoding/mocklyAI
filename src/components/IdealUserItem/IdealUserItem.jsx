/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IdealUserItem = ({
  user = "CS Students",
  benefit = "Stand out in internship interviews with realistic mock sessions and instant feedback.",
  className,
}) => {
  return (
    <div className={`ideal-user-item ${className}`}>
      <div className="CS-students">{user}</div>

      <p className="stand-out-in">{benefit}</p>
    </div>
  );
};

IdealUserItem.propTypes = {
  user: PropTypes.string,
  benefit: PropTypes.string,
};

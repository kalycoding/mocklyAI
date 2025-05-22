/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconLeft4 = ({ color = "white", className }) => {
  return (
    <svg
      className={`icon-left-4 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M3.75 4.71023C3.75 3.52179 5.02417 2.76841 6.0655 3.34115L15.6827 8.63058C16.762 9.22422 16.762 10.7751 15.6826 11.3688L6.0655 16.6582C5.02416 17.2309 3.75 16.4775 3.75 15.2891V4.71023Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconLeft4.propTypes = {
  color: PropTypes.string,
};

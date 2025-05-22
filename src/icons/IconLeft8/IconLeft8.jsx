/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconLeft8 = ({ color = "#2563EB", className }) => {
  return (
    <svg
      className={`icon-left-8 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10 15.375C12.7614 15.375 15 13.1364 15 10.375V9.125M10 15.375C7.23858 15.375 5 13.1364 5 10.375V9.125M10 15.375V18.5M6.875 18.5H13.125M10 12.875C8.61929 12.875 7.5 11.7557 7.5 10.375V3.5C7.5 2.11929 8.61929 1 10 1C11.3807 1 12.5 2.11929 12.5 3.5V10.375C12.5 11.7557 11.3807 12.875 10 12.875Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

IconLeft8.propTypes = {
  color: PropTypes.string,
};

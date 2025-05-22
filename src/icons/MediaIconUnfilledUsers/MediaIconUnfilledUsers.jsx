/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const MediaIconUnfilledUsers = ({ color = "#0F1114", className }) => {
  return (
    <svg
      className={`media-icon-unfilled-users ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 17 16"
      width="17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10.5 12.7517C11.0553 12.9133 11.6425 13 12.25 13C13.2358 13 14.1683 12.7718 14.9976 12.3652C14.9992 12.327 15 12.2886 15 12.25C15 10.7312 13.7688 9.5 12.25 9.5C11.3046 9.5 10.4707 9.97701 9.97571 10.7035M10.5 12.7517V12.75C10.5 12.0081 10.3099 11.3105 9.97571 10.7035M10.5 12.7517C10.5 12.7755 10.4998 12.7992 10.4994 12.8229C9.25824 13.5702 7.80432 14 6.25 14C4.69568 14 3.24176 13.5702 2.00061 12.8229C2.00021 12.7986 2 12.7743 2 12.75C2 10.4028 3.90279 8.5 6.25 8.5C7.85528 8.5 9.25269 9.38999 9.97571 10.7035M8.5 4.25C8.5 5.49264 7.49264 6.5 6.25 6.5C5.00736 6.5 4 5.49264 4 4.25C4 3.00736 5.00736 2 6.25 2C7.49264 2 8.5 3.00736 8.5 4.25ZM14 5.75C14 6.7165 13.2165 7.5 12.25 7.5C11.2835 7.5 10.5 6.7165 10.5 5.75C10.5 4.7835 11.2835 4 12.25 4C13.2165 4 14 4.7835 14 5.75Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

MediaIconUnfilledUsers.propTypes = {
  color: PropTypes.string,
};

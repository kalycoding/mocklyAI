/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const MediaIconUnfilledArrowPathRounded = ({
  color = "black",
  className,
}) => {
  return (
    <svg
      className={`media-icon-unfilled-arrow-path-rounded ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M19.5 12C19.5 10.768 19.454 9.547 19.362 8.338C19.2912 7.38015 18.8787 6.4796 18.1996 5.80045C17.5204 5.1213 16.6199 4.70876 15.662 4.638C13.2241 4.45408 10.7759 4.45408 8.338 4.638C7.38015 4.70876 6.4796 5.1213 5.80045 5.80045C5.1213 6.4796 4.70876 7.38015 4.638 8.338C4.621 8.558 4.606 8.779 4.592 9M19.5 12L22.5 9M19.5 12L16.5 9M4.5 12C4.5 13.232 4.546 14.453 4.638 15.662C4.70876 16.6199 5.1213 17.5204 5.80045 18.1996C6.4796 18.8787 7.38015 19.2912 8.338 19.362C10.7759 19.546 13.2241 19.546 15.662 19.362C16.6199 19.2912 17.5204 18.8787 18.1996 18.1996C18.8787 17.5204 19.2912 16.6199 19.362 15.662C19.379 15.442 19.394 15.221 19.408 15M4.5 12L7.5 15M4.5 12L1.5 15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

MediaIconUnfilledArrowPathRounded.propTypes = {
  color: PropTypes.string,
};

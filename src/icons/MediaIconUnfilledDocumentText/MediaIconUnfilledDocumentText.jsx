/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const MediaIconUnfilledDocumentText = ({
  color = "#0F1114",
  className,
}) => {
  return (
    <svg
      className={`media-icon-unfilled-document-text ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M18.3 14.4V12.0375C18.3 10.3599 16.9401 9 15.2625 9H13.9125C13.3534 9 12.9 8.54669 12.9 7.9875V6.6375C12.9 4.95993 11.5401 3.6 9.86255 3.6H8.17505M8.17505 15.075H14.925M8.17505 17.775H11.55M10.2 3.6H5.81255C5.25336 3.6 4.80005 4.05331 4.80005 4.6125V20.1375C4.80005 20.6967 5.25336 21.15 5.81255 21.15H17.2875C17.8467 21.15 18.3 20.6967 18.3 20.1375V11.7C18.3 7.22649 14.6736 3.6 10.2 3.6Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

MediaIconUnfilledDocumentText.propTypes = {
  color: PropTypes.string,
};

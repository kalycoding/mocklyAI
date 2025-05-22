/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconLeft4 } from "../../icons/IconLeft4";
import "./style.css";

export const PlayVideoButton = ({ className }) => {
  return (
    <div className={`play-video-button ${className}`}>
      <IconLeft4 className="icon-left-4" color="white" />
    </div>
  );
};

import React from "react";
import { PlayVideoButton } from "../PlayVideoButton";
import "./style.css";

export const DemoVideo = ({ property1, className }) => {
  return (
    <div className={`demo-video ${className}`}>
      <div className={`overlap-group `}>
        <div className="frame-4">
          <img
            className="mask-group"
            alt="Mask group"
            src="/img/mask-group-9.png"
          />
        </div>

        <PlayVideoButton className="class-2" />
      </div>
    </div>
  );
};

import React from "react";
import { DemoVideo } from "../../../../components/DemoVideo";
import "./style.css";

export const Gradient = () => {
  return (
    <div className="gradient">
      <div className="div">
        <div className="frame-2">
          <p className="text-wrapper">
            Ace Interviews for Google, Meta, and More
          </p>

          <p className="p">
            Train with an AI interviewer that talks and listens like a real
            engineer to help you improve fast.
          </p>
        </div>

        <div className="frame-3">
          <button className="button">
            <div className="label">Join Waitlist</div>
          </button>

          <p className="text-wrapper-2">
            Nothing to install. Try 3 full interviews for free.
          </p>
        </div>
      </div>

      <DemoVideo className="demo-video-instance" property1="default" />
    </div>
  );
};

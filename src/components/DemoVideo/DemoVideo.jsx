/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { PlayVideoButton } from "../PlayVideoButton";
import "./style.css";

export const DemoVideo = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`demo-video ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className={`overlap-group ${state.property1}`}>
        <div className="frame-4">
          {state.property1 === "default" && (
            <img
              className="mask-group"
              alt="Mask group"
              src="/img/mask-group-9.png"
            />
          )}
        </div>

        <PlayVideoButton
          className={`${state.property1 === "hovered" ? "class" : "class-2"}`}
        />
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "hovered",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

DemoVideo.propTypes = {
  property1: PropTypes.oneOf(["hovered", "default"]),
};

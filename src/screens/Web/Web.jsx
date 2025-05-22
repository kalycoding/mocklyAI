import React from "react";
import { Frame } from "./sections/Frame";
import { Gradient } from "./sections/Gradient";
import { NavBar } from "./sections/NavBar";
import "./style.css";

export const Web = () => {
  return (
    <div className="web" data-model-id="242:288">
      <div className="overlap">
        <Gradient />
        <NavBar />
      </div>

      <Frame />
    </div>
  );
};

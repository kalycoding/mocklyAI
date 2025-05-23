import React, { useState } from "react";
import { NavBarWrapper } from "../../../../components/NavBarWrapper";
import "./style.css";

export const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <NavBarWrapper
        buttonClassName="design-component-instance-node"
        className="nav-bar-instance"
        logo="/img/logo-1.svg"
      />
    </div>
  );
};

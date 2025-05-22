/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconLeft8 } from "../../icons/IconLeft8";
import "./style.css";

export const FeauteDesc = ({
  heading = "Add Job Details",
  desc = "Paste a job description and MocklyAI will tailor the interview to the role and company style.",
  className,
  icon = <IconLeft8 className="icon-left-8" color="#2563EB" />,
}) => {
  return (
    <div className={`feaute-desc ${className}`}>
      <div className="frame-18">
        <div className="icon-left-wrapper">{icon}</div>
      </div>

      <div className="frame-19">
        <div className="add-job-details">{heading}</div>

        <p className="paste-a-job-3">{desc}</p>
      </div>
    </div>
  );
};

FeauteDesc.propTypes = {
  heading: PropTypes.string,
  desc: PropTypes.string,
};

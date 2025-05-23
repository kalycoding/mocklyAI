import React from "react";
import "./style.css";

export const DemoVideo = ({ className }) => {
  return (
    <div className={`demo-video ${className}`}>
      <div className="video-container">
        <iframe
          src="https://www.loom.com/embed/5e2480afee28475a926e9f9d561127e5?sid=a12bfceb-386b-423d-8e52-d9f059e1adec"
          frameBorder="0"
          allowFullScreen
          title="MocklyAI Demo Video"
        ></iframe>
      </div>
    </div>
  );
};

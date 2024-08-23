import React from "react";
import Education from "./Education";
import Description from "./Description";
import './RightSide.css';
import Experience from "./Experience";
import Skills from "./Skills";

const RightSide = () => {
  return (
    <div className="right-container">
      <h1>Ilirjana Didani</h1>
      <h4>Software Developer</h4>
      <Description />
      <Education />
      <Experience/>
      <Skills />
    </div>
  );
};

export default RightSide;

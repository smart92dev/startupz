import React from "react";
import thumbs_left from "../assets/images/thumbs_left.png";
import thumbs_right from "../assets/images/thumbs_right.png";
import ben from "../assets/images/ben.png";
const SolvingProblems = () => {
  return (
    <section id="solving-problems">
      <div id="solving-problems-inner" className="container">
        <div className="d-flex solving-problems-inner-main">
          <img src={thumbs_left} />
          <p>We love solving problems!</p>
          <img src={thumbs_right} />
        </div>
        <img src={ben} className="ben" />
      </div>
    </section>
  );
};

export default SolvingProblems;

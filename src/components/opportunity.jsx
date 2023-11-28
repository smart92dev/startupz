import React from "react";
import thumbs_left from "../assets/images/thumbs_left.png";
import thumbs_right from "../assets/images/thumbs_right.png";
const Opportunity = () => {
  return (
    <section id="opportunity">
      <div id="opportunity-inner" className="container">
        <div className="d-flex opportunity-main">
          <div className="d-flex align-items-center">
            <img src={thumbs_left} />
          </div>
          <p>
            Startups create a world that actually is better. Any problem that
            can be solved, will be solved by a startup, and that is a huge
            opportunity.
          </p>
          <div className="d-flex align-items-center">
            <img src={thumbs_right} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunity;

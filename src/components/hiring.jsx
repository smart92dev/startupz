import React from "react";
import person_left from "../assets/images/person_left.png";
import person_right from "../assets/images/person_right.png";
const Hiring = () => {
  return (
    <section id="hiring">
      <div id="hiring-inner" className="container">
        <div className="hiring-main">
          <div className="">
            <img src={person_left} className="img-fluid person-left" />
          </div>
          <h3>We are hiring!</h3>
          <p>
            We're always looking for talented people¸ <br /> to join and help
            build our startups. <br /> Check out our current openings
          </p>
          <div className="d-flex justify-content-center">
            <button>See current openings</button>
          </div>
          <div className="">
            <img src={person_right} className="img-fluid person-right" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hiring;

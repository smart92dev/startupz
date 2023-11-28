import React from "react";
import { ReactComponent as Bulb } from "../assets/svgs/bulb.svg";
import bulb from '../assets/images/bulb.png'

const OurCoreValues = () => {
  const values = [
    {
      number: "01.",
      title: "Innovation",
      text: "Startupz operates where entrepreneurship and technology intersect. We design solutions and turn them into businesses models.",
    },
    {
      number: "02.",
      title: "People",
      text: "Talent is what enable us to create great companies.",
    },
  ];
  return (
    <section id="our-core-values">
      <div id="our-core-values-inner" className="container">
        <div className="d-flex w-100 justify-content-between">
          <div className="">
            <h2>Our core values</h2>
          </div>
          <img src={bulb}/>
        </div>

        <div className="numbers">
          {values.map((value, i) => (
            <div key={i} className="">
              <div className="d-flex">
                <p className="number">{value.number}</p>
                <p className="title">{value.title}</p>
              </div>
              <p className="number-text">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCoreValues;

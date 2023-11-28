import React from "react";
import { ReactComponent as QuestionMark } from "../assets/svgs/question_mark.svg";

const WhoWeAre = () => {
  const stats = [
    {
      number: "01",
      text: "We develop innovative products, systems and services",
    },
    {
      number: "02",
      text: "Next we build teams to scale them into companies",
    },
    {
      number: "03",
      text: "Each startup solving one problem at a time",
    },
  ];
  return (
    <section id="who-we-are">
      <div id="who-we-are-inner" className="container">
        <div className="d-flex w-100 justify-content-between">
          <div className="">
            <h2>Who we are</h2>
            <p className="">
              We create products that have innovation and technology at their
              core.
              <br /> We value working with talented people that understand the
              possibilities of today.
            </p>
          </div>
          <QuestionMark />
        </div>

        <div className="numbers">
          {stats.map((stat, i) => (
            <div key={i} className="">
              <p className="number">{stat.number}</p>
              <p className="number-text">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

import React from "react";
import tolq from "../assets/images/tolq.png";
import feedback from "../assets/images/feedback.png";
import codekeeper from "../assets/images/codekeeper.png";
import legalsite from "../assets/images/legalsite.png";

const OurWorks = () => {
  const works = [
    {
      color: "#A9BC87",
      text: "Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution.",
      title: "Tolq",
      image: tolq
    },
    {
      color: "#8BB5C9",
      text: "Feedback Labs turns feedback into actionable insights for your team.",
      title: "Feedback Labs",
      image: feedback

    },
    {
      color: "#00A0B6",
      text: "Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.",
      title: "Codekeeper",
      image: codekeeper

    },
    {
      color: "#8B60D3",
      text: "Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.",
      title: "LegalSite",
      image: legalsite

    },
  ];
  return (
    <section id="our-works">
      <div id="our-works-inner" className="container">
        <div className="">
          <h2>Our works</h2>
        </div>
        <div className="works">
          {works.map((work, i) => (
            <div className="work-card">
              <h4>{work.title}</h4>
              <p>{work.text}</p>
              <img src={work.image} alt="tolq" />
              <button>More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorks;

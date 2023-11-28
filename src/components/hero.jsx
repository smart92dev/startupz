import React from "react";
import hero_image from "../assets/images/hero_image.png";

const Hero = () => {
  return (
    <section id="hero">
      <div id="hero-inner" className="container">
        <div className="hero-text">
          <h1>
            We Create <br />
            Startups.
          </h1>
          <p>We are startup studio that develops and launches new companies.</p>
          <button>See our works</button>
        </div>
        <div className="">
          <img src={hero_image} alt="" className="img-fluid people" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
